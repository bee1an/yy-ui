import { CreateNamespace } from '@yy-ui/utils/src/create'
import { ExtractPropTypes, InjectionKey, PropType, SetupContext } from 'vue'
import { treeNodeProps } from './tree-node'
import { useThemeProps } from '@yy-ui/composables'
import { TreeThemeVars } from '@yy-ui/theme-chalk'
import type { VirtualListProps } from '@yy-ui/components/virtual-list/src/virtual-list'
import type { ScrollbarProps } from '@yy-ui/components/scrollbar/src/scrollbar'

/** inject Bem */
export const InjectBem = Symbol('InjectBem') as InjectionKey<CreateNamespace>

// key type
export type TreeKey = string

// value type
export type TreeValue = string | number

// transform tree data
export interface TreeData extends TreeOption {
  /** 原始数据 */
  rawData: TreeOption
  /** 等级 */
  level: number
  /** 子元素 */
  children?: TreeData[]
  /** 是否是叶子节点 */
  isLeaf: boolean
  /** 是否展开 */
  isExpanded: boolean
  /** 是否正在加载 */
  isLoading: boolean
  /** 是否选中 */
  isSelected: boolean
  /** 是否有节点被拖拽到当前节点上 */
  dragBorder?: boolean
  /** 是否有节点被拖拽到当前节点边缘 */
  dragBorderBottom?: number
}

export interface TreeOption {
  /** 对应的值 */
  value: TreeValue
  /** 唯一key */
  key: TreeKey
  /** 子元素 */
  children?: TreeOption[]
  /** 是否是叶子节点 */
  isLeaf?: boolean
  /** 允许其他名字 */
  [key: string]: unknown
}
export const treeProps = {
  ...useThemeProps<TreeThemeVars>(),
  data: {
    type: Array as PropType<TreeOption[]>,
    required: true
  },
  /** 值别名 */
  valueField: {
    type: String,
    default: 'value'
  },
  /** key别名 */
  keyField: {
    type: String,
    default: 'key'
  },
  /** 默认展开key */
  defaultExpandedKeys: {
    type: Array as PropType<TreeKey[]>
  },
  /** 异步加载子元素 */
  onLoad: {
    type: Function as PropType<(node: TreeOption) => Promise<any>>
  },
  /** 是否可以选中 */
  selectable: {
    type: Boolean,
    default: false
  },
  /** 是否可以多选 */
  multiple: {
    type: Boolean,
    default: false
  },
  /** 选中key */
  selectedKeys: {
    type: Array as PropType<TreeKey[]>
  },
  /** 缩进宽度 */
  indentWidth: treeNodeProps.indentWidth,
  /** 是否可拖动 */
  draggable: treeNodeProps.draggable,
  /** 虚拟滚动 */
  virtualScroll: {
    type: Boolean,
    default: false
  },
  /** 虚拟滚动配置 */
  virtualListProps: Object as PropType<
    Pick<VirtualListProps, 'wrapperMaxSize'>
  >,
  /** 滚动条配置: 仅在虚拟滚动时生效 */
  scrollbarProps: Object as PropType<ScrollbarProps>
} as const
export type TreeProps = ExtractPropTypes<typeof treeProps>

export type TreeEmitsType = {
  /** v-model */
  (e: 'update:selectedKeys', payload: TreeKey[]): void
  /** drag */
  (
    e: 'drag',
    payload: {
      dragNode: TreeOption
      dragNodeParent: TreeOption | null
      dropNode: TreeOption | null
      position: number
    }
  ): void
}

/** 传递插槽给后代组件 */
export const InjectSlots = Symbol('InjectSlots') as InjectionKey<{
  slots: SetupContext['slots']
}>
