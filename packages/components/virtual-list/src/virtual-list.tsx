import { CreateNamespace } from '@yy-ui/utils'
import {
  computed,
  defineComponent,
  ExtractPropTypes,
  nextTick,
  onMounted,
  PropType,
  reactive,
  ref,
  SlotsType
} from 'vue'
import { ScrollTo, useScrollTo } from './use-scroll-to'
import { emitter } from './emitter-bus'

export const virtualListProps = {
  /** 是否使用虚拟滚动 */
  virtualScroll: {
    type: Boolean,
    default: true
  },
  /** 所有的渲染数据 */
  data: {
    type: Array as PropType<any[]>,
    default: () => []
  },
  /** 滚动区域最大尺寸 */
  wrapperMaxSize: {
    type: Number,
    default: 500
  },
  /** 是否是垂直滚动 */
  vertical: {
    type: Boolean,
    default: true
  },
  /** 每一项的尺寸: 数值约接近, scrollTo的准确度越高 */
  itemSize: {
    type: Number,
    default: 30
  },
  /** 最小边界: 当元素最大位置大于最小边界时才会渲染 */
  minBound: {
    type: Number,
    default: 0,
    validator: (val: number) => val <= 0 // 最小边界必须小于等于0
  },
  /** 最大边界: 当元素最小位置小于最大边界时才会渲染 */
  maxBound: {
    type: Number,
    default: (props: { wrapperMaxSize: number }) => props.wrapperMaxSize,
    validator: (val: number, props: { wrapperMaxSize: number }) =>
      val >= props.wrapperMaxSize // 最大边界必须大于等于wrapperMaxSize
  },
  /** 每一项的key字段别名 */
  keyField: String
}

export type VirtualListProps = ExtractPropTypes<typeof virtualListProps>

export interface VirtualListExposed {
  scrollTo: ScrollTo
}

class VirtualListFactory<T = any> {
  define() {
    return defineComponent({
      name: 'yy-virtual-list',
      props: {
        ...virtualListProps,
        data: { type: Array as PropType<T[]>, default: () => [] }
      },
      slots: Object as SlotsType<{
        default: { item: T }
      }>,
      setup(props, { slots, expose }) {
        if (!props.virtualScroll) {
          // 不使用虚拟滚动
          return () => props.data.map(item => slots.default?.({ item }))
        }

        const scrollPosKey = computed(() =>
          props.vertical ? 'scrollTop' : 'scrollLeft'
        )

        const scrollSizeKey = computed(() =>
          props.vertical ? 'scrollHeight' : 'scrollWidth'
        )
        const clientSizeKey = computed(() =>
          props.vertical ? 'clientHeight' : 'clientWidth'
        )

        const warpperSizeStyle = computed(() => {
          return {
            [props.vertical
              ? 'max-height'
              : 'max-width']: `${props.wrapperMaxSize}px`
          }
        })

        const bem = new CreateNamespace('vl')

        const warpper = ref<HTMLDivElement | null>(null)
        const view = ref<HTMLDivElement>()
        const virtualOption = reactive({
          start: 0,
          end: 0,
          lastStart: 0,
          lastEnd: 0
        })

        // 隐藏元素后需要撑开的尺寸
        const offset = ref(0)
        const transformStyle = computed(() => {
          return {
            transform: `translate${props.vertical ? 'Y' : 'X'}(${
              offset.value
            }px)`
          }
        })
        // 最小滚动区域尺寸
        const minSize = ref(props.itemSize * props.data.length)
        const minSizeStyle = computed(() => {
          return {
            [props.vertical ? 'minHeight' : 'minWidth']: `${minSize.value}px`
          }
        })
        // 记录每个item的size
        const sizeGather: number[] = new Array(props.data.length)
        // 更新元素尺寸
        const updateItemSize = () => {
          // 更新元素尺寸
          Array.from(view.value!.children).forEach((child, _index) => {
            const index = virtualOption.start + _index

            const childSize = (child as HTMLElement)[
              props.vertical ? 'offsetHeight' : 'offsetWidth'
            ]

            if (!sizeGather[index] || childSize !== sizeGather[index]) {
              sizeGather[index] = childSize
              minSize.value += sizeGather[index] - props.itemSize // 更新撑开滚动区域的元素尺寸
            }
          })
        }

        const renderByScrollDistance = () => {
          updateItemSize()

          const scrollDistance = warpper.value![scrollPosKey.value]

          let start = 0
          offset.value = 0

          for (let index = 0; index < sizeGather.length; index++) {
            const size = sizeGather[index] || props.itemSize

            /*
								跟据滚动距离计算开始渲染的元素的索引
								条件: 当前元素的结尾大于最小边界时, 作为开始渲染的元素
							*/
            if (offset.value + size - scrollDistance >= props.minBound) {
              start = index
              break
            }
            offset.value += size
          }

          let size = 0
          let index = start
          const firstChildHiddenSize = scrollDistance - offset.value // 第一个元素被隐藏的部分

          while (true) {
            size += sizeGather[index] || 0
            /*
								条件1: 当下一个元素需要渲染但是没有记录他的size时, 需要执行渲染, 并在渲染后更新他的size(updateItemSize)
								条件2: 当下一个元素的结尾(size - firstChildHiddenSize)没有超出最大边界时, 继续渲染
							*/
            if (
              !sizeGather[index] ||
              size - firstChildHiddenSize >= props.maxBound
            ) {
              virtualOption.start = start
              virtualOption.end = index + 1
              const executed = sliceData() // executed防止溢栈

              executed
                ? nextTick(renderByScrollDistance)
                : emitter.emit('renderComplete')

              return
            }
            index++
          }
        }
        const currentData = ref<any[]>([])
        const sliceData = () => {
          const executed = true
          if (virtualOption.start < 0) {
            virtualOption.start = 0
          }
          if (virtualOption.end > props.data.length) {
            virtualOption.end = props.data.length
          }

          if (
            virtualOption.lastStart === virtualOption.start &&
            virtualOption.lastEnd === virtualOption.end
          ) {
            // 未更改不执行
            return !executed
          }

          virtualOption.lastStart = virtualOption.start
          virtualOption.lastEnd = virtualOption.end

          currentData.value = props.data.slice(
            virtualOption.start,
            virtualOption.end
          )

          return executed
        }

        // 初始化渲染
        onMounted(renderByScrollDistance)

        const { handler } = useScrollTo(warpper, props, sizeGather)
        const scrollTo: ScrollTo = (...options: any[]) => {
          if (!warpper.value) return

          handler(...options)
        }

        expose({ scrollTo } satisfies VirtualListExposed)

        const scrollHandler = () => {
          emitter.emit('scroll', {
            scrollSize: warpper.value![scrollPosKey.value],
            maxScrollSize:
              warpper.value![scrollSizeKey.value] -
              warpper.value![clientSizeKey.value]
          })

          renderByScrollDistance()
        }

        return () => {
          return (
            <div
              class={bem.b().value}
              style={warpperSizeStyle.value}
              ref={warpper}
              onScroll={scrollHandler}
            >
              <div class={bem.e('view').value} style={minSizeStyle.value}>
                <div
                  class={bem.e('visible').value}
                  ref={view}
                  style={transformStyle.value}
                >
                  {currentData.value.map(item => slots.default?.({ item }))}
                </div>
              </div>
            </div>
          )
        }
      }
    })
  }
}

const main = new VirtualListFactory().define()

// 支持slot泛型, 导入时传递泛型
export function GenericVirtualList<T>(): ReturnType<
  VirtualListFactory<T>['define']
> {
  return main
}

export default main
