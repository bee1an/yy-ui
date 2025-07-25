import { type ExtractThemeVars, type ThemeConfig, commonLight } from '../../common'
import commonVars from './_common'

const vars = {
	...commonVars,
	textColor1: commonLight.textColor1,
	textColor2: commonLight.textColor2,
	textColor3: commonLight.textColor3
}

export const pLight: ThemeConfig<typeof vars> = {
	name: 'p',
	vars: () => ({ ...vars }),
	exclude: ['textColor1', 'textColor2', 'textColor3']
}

export type PThemeVars = ExtractThemeVars<typeof pLight>
