import commonVars from './_common'
import { commonLight, ExtractThemeVars, ThemeConfig } from '../common'

export const cardLight: ThemeConfig<typeof commonVars> = {
  name: 'card',
  vars: () => ({
    ...commonVars,
    transitionTime: '0.3s',
    boxShadow:
      '0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)',
    cubicBezierEaseInOut: commonLight.cubicBezierEaseInOut,
    borderColor: commonLight.borderColor,
    borderRadius: commonLight.borderRadius,
    cardFontSize: commonLight.fontSize,
    titleFontWeight: commonLight.fontWeightStrong,
    actionBackgroundColor: '#fafafc'
  }),
  exclude: Object.keys(commonVars)
}

export type CardThemeVars = ExtractThemeVars<typeof cardLight>
