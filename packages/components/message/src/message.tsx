import { CreateNamespace } from '@yy-ui/utils'
import {
  computed,
  defineComponent,
  ExtractPropTypes,
  onMounted,
  PropType,
  ref,
  VNodeChild
} from 'vue'
import { useTheme, useThemeProps } from '@yy-ui/composables'
import {
  MessageThemeVars,
  messageDark,
  messageLight,
  messageStyle
} from '@yy-ui/theme-chalk'
import YyIcon from '@yy-ui/components/icon'
import MSuccess from './icon/success'
import MWarning from './icon/warning'
import MError from './icon/error'
import MInfo from './icon/info'
import { YFadeInExpandTransition } from '../../_internal'

export const messageProps = {
  ...useThemeProps<MessageThemeVars>(),
  /** id */
  id: {
    type: String
  },
  /** message content */
  content: {
    type: [String, Function] as PropType<string | (() => VNodeChild)>,
    default: ''
  },
  /** show type */
  type: String as PropType<
    'success' | 'warning' | 'error' | 'info' | 'loading'
  >,
  /** 持续时间 */
  duration: {
    type: Number,
    default: 3000
  },
  /** hover不消失 */
  keepAliveOnHover: Boolean
}

export type MessageProps = ExtractPropTypes<typeof messageProps>

export const messageEmits = {
  destroy: () => true
}

export type MessageEmits = {}

export default defineComponent({
  name: 'Message',
  props: messageProps,
  emits: messageEmits,
  setup(props, { expose }) {
    const bem = new CreateNamespace('message')

    const lightVars = messageLight.vars()
    const darkVars = messageDark.vars()

    const theme = computed(() => {
      return {
        light: Object.assign({}, lightVars, {}),
        dark: Object.assign({}, darkVars, {})
      }
    })

    const { styleVars } = useTheme(theme, 'message', messageStyle, props)

    const visible = ref(false)
    let timerId: number | null = null
    const startTimer = () => {
      const { duration } = props
      if (duration === 0) return

      timerId = setTimeout(() => {
        visible.value = false
      }, duration)
    }
    const stopTimer = () => {
      timerId && clearTimeout(timerId)
    }

    const mouseEnterHandler = () => {
      props.keepAliveOnHover && stopTimer()
    }
    const mouseLeaveHandler = () => {
      props.keepAliveOnHover && startTimer()
    }

    onMounted(() => {
      visible.value = true
      startTimer()
    })

    const content = ref(props.content)
    const type = ref(props.type)

    expose({ visible, content, type })

    return {
      bem,
      styleVars,
      visible,
      mouseEnterHandler,
      mouseLeaveHandler,
      content,
      type
    }
  },
  render() {
    const {
      bem,
      styleVars,
      visible,
      mouseEnterHandler,
      mouseLeaveHandler,
      content,
      type,
      $emit
    } = this

    return (
      <YFadeInExpandTransition onAfterLeave={() => $emit('destroy')}>
        <div
          style={styleVars}
          class={bem.b().value}
          v-show={visible}
          onMouseenter={mouseEnterHandler}
          onMouseleave={mouseLeaveHandler}
        >
          <div class={bem.b('block').value}>
            {type && (
              <div
                class={[
                  bem.b('block').e('icon').value,
                  bem.b('block').e('icon').m(type).value
                ]}
              >
                <YyIcon>
                  {type === 'success' ? (
                    <MSuccess />
                  ) : type === 'warning' ? (
                    <MWarning />
                  ) : type === 'error' ? (
                    <MError />
                  ) : (
                    <MInfo />
                  )}
                </YyIcon>
              </div>
            )}
            {typeof content === 'string' ? (
              <div class={bem.b('block').e('content').value}>{content}</div>
            ) : (
              content()
            )}
          </div>
        </div>
      </YFadeInExpandTransition>
    )
  }
})
