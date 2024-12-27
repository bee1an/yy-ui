import { ExtractPropTypes, PropType } from 'vue'

export type ButtonType =
  | 'default'
  | 'tertiary'
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'

export const buttonProps = {
  /** 按钮类型 */
  type: {
    type: String as PropType<ButtonType>,
    default: 'default'
  },
  /** 文字是否加粗 */
  strong: {
    type: Boolean
  },
  /** 次要按钮 */
  secondary: {
    type: Boolean
  },
  /** 次次要按钮 */
  tertiary: {
    type: Boolean
  },
  /** 次次次要按钮 */
  quaternary: {
    type: Boolean
  },
  /** 虚线按钮 */
  dashed: {
    type: Boolean
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
