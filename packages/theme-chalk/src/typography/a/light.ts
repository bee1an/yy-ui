import commonVars from './_common'
import { commonLight, ExtractThemeVars, ThemeConfig } from '../../common'

const vars = { ...commonVars, textColor: commonLight.primaryColor }

export const aLight: ThemeConfig<typeof vars> = {
  name: 'a',
  vars: () => ({ ...vars })
}

export type AThemeVars = ExtractThemeVars<typeof aLight>
