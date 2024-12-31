import { commonLight, ThemeConfig } from '../../_style/common'

export const checkboxLight = {
  name: 'checkbox',
  vars: {
    checkboxBorderColorHover: commonLight.primaryColor,
    checkboxBoxShadow: '0 0 0 2px rgb(255, 165, 0, 0.3)',
    checkboxSize: '14px',
    checkboxFontSize: '14px',
    checkboxLabelPadding: '0 5px',
    checkboxLabelFontSize: '14px',
    checkboxBorder: '1px solid #dcdfe6',
    checkboxBorderRadius: commonLight.borderRadius,
    checkboxIconBgColor: commonLight.primaryColor,
    checkboxIconColor: '#ffffff',
    checkboxIconTransitionTime: '0.3s',
    transparent: commonLight.transparent,
    cubicBezierEaseInOut: commonLight.cubicBezierEaseInOut
  }
}

export type CheckboxTheme = ThemeConfig<typeof checkboxLight>
