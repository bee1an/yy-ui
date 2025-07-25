import { rgba } from '@yy-craft/utils'
import { type ExtractThemeVars, type ThemeConfig, commonLight } from '../common'

const vars = {
	buttonHeight: commonLight.heightMedium,
	buttonPadding: '0 15px',
	buttonBorder: '1px solid transparent',
	buttonBorderRadius: commonLight.borderRadius,
	buttonFontSize: commonLight.fontSize,
	buttonTransitionTime: '0.3s',
	cubicBezierEaseInOut: commonLight.cubicBezierEaseInOut,
	buttonColor: commonLight.textColor1,
	buttonBorderColor: commonLight.borderColor,
	buttonBackgroundColor: commonLight.transparent,
	buttonColorHover: commonLight.primaryColorHover,
	buttonBorderColorHover: commonLight.primaryColorHover,
	buttonBackgroundColorHover: commonLight.transparent,
	buttonColorActive: commonLight.primaryColorPressed,
	buttonBorderColorActive: commonLight.primaryColorPressed,
	buttonBackgroundColorActive: commonLight.transparent,
	buttonFontWeightStrong: commonLight.fontWeightStrong,
	buttonBorderStyle: 'solid',
	buttonWaveSpreadFrom: '',
	buttonWaveSpreadTo: '',
	buttonWaveOpacityFrom: '',
	buttonWaveOpacityTo: ''
}

export const buttonLight: ThemeConfig<typeof vars> = {
	name: 'button',
	vars: () => ({ ...vars })
}

export type ButtonThemeVars = ExtractThemeVars<typeof buttonLight>

export const buttonLightColors = {
	default: {
		default: {
			buttonColor: commonLight.textColor1,
			buttonBorderColor: commonLight.borderColor,
			buttonBackgroundColor: commonLight.transparent,
			buttonColorHover: commonLight.primaryColorHover,
			buttonBorderColorHover: commonLight.primaryColorHover,
			buttonBackgroundColorHover: commonLight.transparent,
			buttonColorActive: commonLight.primaryColorPressed,
			buttonBorderColorActive: commonLight.primaryColorPressed,
			buttonBackgroundColorActive: commonLight.transparent,
			buttonWaveSpreadFrom: '0 0 0.5px 0 ' + commonLight.primaryColor,
			buttonWaveSpreadTo: '0 0 0.5px 4.5px ' + commonLight.primaryColor,
			buttonWaveOpacityFrom: '0.6',
			buttonWaveOpacityTo: '0'
		},
		secondary: {
			buttonColor: commonLight.textColor1,
			buttonBorderColor: commonLight.transparent,
			buttonBackgroundColor: commonLight.buttonColor2,
			buttonColorHover: commonLight.textColor1,
			buttonBorderColorHover: commonLight.transparent,
			buttonBackgroundColorHover: commonLight.buttonColor2Hover,
			buttonColorActive: commonLight.textColor1,
			buttonBorderColorActive: commonLight.transparent,
			buttonBackgroundColorActive: commonLight.buttonColor2Pressed
		},
		tertiary: {
			buttonColor: commonLight.textColor1,
			buttonBorderColor: commonLight.transparent,
			buttonBackgroundColor: commonLight.buttonColor2,
			buttonColorHover: commonLight.textColor1,
			buttonBorderColorHover: commonLight.transparent,
			buttonBackgroundColorHover: commonLight.buttonColor2Hover,
			buttonColorActive: commonLight.textColor1,
			buttonBorderColorActive: commonLight.transparent,
			buttonBackgroundColorActive: commonLight.buttonColor2Pressed
		},
		quaternary: {
			buttonColor: commonLight.textColor1,
			buttonBorderColor: commonLight.transparent,
			buttonBackgroundColor: commonLight.transparent,
			buttonColorHover: commonLight.textColor1,
			buttonBorderColorHover: commonLight.transparent,
			buttonBackgroundColorHover: commonLight.buttonColor2Hover,
			buttonColorActive: commonLight.textColor1,
			buttonBorderColorActive: commonLight.transparent,
			buttonBackgroundColorActive: commonLight.buttonColor2Pressed
		},
		dashed: {
			buttonColor: commonLight.textColor1,
			buttonBorderColor: commonLight.borderColor,
			buttonBackgroundColor: commonLight.transparent,
			buttonColorHover: commonLight.primaryColorHover,
			buttonBorderColorHover: commonLight.primaryColorHover,
			buttonBackgroundColorHover: commonLight.transparent,
			buttonColorActive: commonLight.primaryColorPressed,
			buttonBorderColorActive: commonLight.primaryColorPressed,
			buttonBackgroundColorActive: commonLight.transparent,
			buttonBorderStyle: 'dashed',
			buttonWaveSpreadFrom: '0 0 0.5px 0 ' + commonLight.primaryColor,
			buttonWaveSpreadTo: '0 0 0.5px 4.5px ' + commonLight.primaryColor,
			buttonWaveOpacityFrom: '0.6',
			buttonWaveOpacityTo: '0'
		}
	},
	tertiary: {
		default: {
			buttonColor: commonLight.textColor3,
			buttonBorderColor: commonLight.borderColor,
			buttonBackgroundColor: commonLight.transparent,
			buttonColorHover: commonLight.primaryColorHover,
			buttonBorderColorHover: commonLight.primaryColorHover,
			buttonBackgroundColorHover: commonLight.transparent,
			buttonColorActive: commonLight.primaryColorPressed,
			buttonBorderColorActive: commonLight.primaryColorPressed,
			buttonBackgroundColorActive: commonLight.transparent,
			buttonWaveSpreadFrom: '0 0 0.5px 0 ' + commonLight.primaryColor,
			buttonWaveSpreadTo: '0 0 0.5px 4.5px ' + commonLight.primaryColor,
			buttonWaveOpacityFrom: '0.6',
			buttonWaveOpacityTo: '0'
		},
		secondary: {
			buttonColor: commonLight.textColor3,
			buttonBorderColor: commonLight.transparent,
			buttonBackgroundColor: commonLight.buttonColor2,
			buttonColorHover: commonLight.textColor3,
			buttonBorderColorHover: commonLight.transparent,
			buttonBackgroundColorHover: commonLight.buttonColor2Hover,
			buttonColorActive: commonLight.textColor1,
			buttonBorderColorActive: commonLight.transparent,
			buttonBackgroundColorActive: commonLight.buttonColor2Pressed
		},
		tertiary: {
			buttonColor: commonLight.textColor3,
			buttonBorderColor: commonLight.transparent,
			buttonBackgroundColor: commonLight.buttonColor2,
			buttonColorHover: commonLight.textColor3,
			buttonBorderColorHover: commonLight.transparent,
			buttonBackgroundColorHover: commonLight.buttonColor2Hover,
			buttonColorActive: commonLight.textColor1,
			buttonBorderColorActive: commonLight.transparent,
			buttonBackgroundColorActive: commonLight.buttonColor2Pressed
		},
		quaternary: {
			buttonColor: commonLight.textColor3,
			buttonBorderColor: commonLight.transparent,
			buttonBackgroundColor: commonLight.transparent,
			buttonColorHover: commonLight.textColor3,
			buttonBorderColorHover: commonLight.transparent,
			buttonBackgroundColorHover: commonLight.buttonColor2Hover,
			buttonColorActive: commonLight.textColor1,
			buttonBorderColorActive: commonLight.transparent,
			buttonBackgroundColorActive: commonLight.buttonColor2Pressed
		},
		dashed: {
			buttonColor: commonLight.textColor3,
			buttonBorderColor: commonLight.borderColor,
			buttonBackgroundColor: commonLight.transparent,
			buttonColorHover: commonLight.primaryColorHover,
			buttonBorderColorHover: commonLight.primaryColorHover,
			buttonBackgroundColorHover: commonLight.transparent,
			buttonColorActive: commonLight.primaryColorPressed,
			buttonBorderColorActive: commonLight.primaryColorPressed,
			buttonBackgroundColorActive: commonLight.transparent,
			buttonBorderStyle: 'dashed',
			buttonWaveSpreadFrom: '0 0 0.5px 0 ' + commonLight.primaryColor,
			buttonWaveSpreadTo: '0 0 0.5px 4.5px ' + commonLight.primaryColor,
			buttonWaveOpacityFrom: '0.6',
			buttonWaveOpacityTo: '0'
		}
	},
	primary: {
		default: {
			buttonColor: commonLight.textColor4,
			buttonBorderColor: commonLight.primaryColor,
			buttonBackgroundColor: commonLight.primaryColor,
			buttonColorHover: commonLight.textColor4,
			buttonBorderColorHover: commonLight.transparent,
			buttonBackgroundColorHover: commonLight.primaryColorHover,
			buttonColorActive: commonLight.textColor4,
			buttonBorderColorActive: commonLight.primaryColorPressed,
			buttonBackgroundColorActive: commonLight.primaryColorPressed,
			buttonWaveSpreadFrom: '0 0 0.5px 0 ' + commonLight.primaryColor,
			buttonWaveSpreadTo: '0 0 0.5px 4.5px ' + commonLight.primaryColor,
			buttonWaveOpacityFrom: '0.6',
			buttonWaveOpacityTo: '0'
		},
		secondary: {
			buttonColor: commonLight.primaryColor,
			buttonBorderColor: commonLight.transparent,
			buttonBackgroundColor: rgba(commonLight.primaryColor, 0.16),
			buttonColorHover: commonLight.primaryColor,
			buttonBorderColorHover: commonLight.transparent,
			buttonBackgroundColorHover: rgba(commonLight.primaryColor, 0.22),
			buttonColorActive: commonLight.primaryColor,
			buttonBorderColorActive: commonLight.transparent,
			buttonBackgroundColorActive: rgba(commonLight.primaryColor, 0.28)
		},
		tertiary: {
			buttonColor: commonLight.primaryColor,
			buttonBorderColor: commonLight.transparent,
			buttonBackgroundColor: commonLight.buttonColor2,
			buttonColorHover: commonLight.primaryColor,
			buttonBorderColorHover: commonLight.transparent,
			buttonBackgroundColorHover: commonLight.buttonColor2Hover,
			buttonColorActive: commonLight.primaryColor,
			buttonBorderColorActive: commonLight.transparent,
			buttonBackgroundColorActive: commonLight.buttonColor2Pressed
		},
		quaternary: {
			buttonColor: commonLight.primaryColor,
			buttonBorderColor: commonLight.transparent,
			buttonBackgroundColor: commonLight.transparent,
			buttonColorHover: commonLight.primaryColor,
			buttonBorderColorHover: commonLight.transparent,
			buttonBackgroundColorHover: commonLight.buttonColor2Hover,
			buttonColorActive: commonLight.primaryColor,
			buttonBorderColorActive: commonLight.transparent,
			buttonBackgroundColorActive: commonLight.buttonColor2Pressed
		},
		dashed: {
			buttonColor: commonLight.primaryColor,
			buttonBorderColor: commonLight.primaryColor,
			buttonBackgroundColor: commonLight.transparent,
			buttonColorHover: commonLight.primaryColor,
			buttonBorderColorHover: commonLight.primaryColor,
			buttonBackgroundColorHover: commonLight.transparent,
			buttonColorActive: commonLight.primaryColorPressed,
			buttonBorderColorActive: commonLight.primaryColorPressed,
			buttonBackgroundColorActive: commonLight.transparent,
			buttonBorderStyle: 'dashed',
			buttonWaveSpreadFrom: '0 0 0.5px 0 ' + commonLight.primaryColor,
			buttonWaveSpreadTo: '0 0 0.5px 4.5px ' + commonLight.primaryColor,
			buttonWaveOpacityFrom: '0.6',
			buttonWaveOpacityTo: '0'
		}
	},
	success: {
		default: {
			buttonColor: commonLight.textColor4,
			buttonBorderColor: commonLight.successColor,
			buttonBackgroundColor: commonLight.successColor,
			buttonColorHover: commonLight.textColor4,
			buttonBorderColorHover: commonLight.transparent,
			buttonBackgroundColorHover: commonLight.successColorHover,
			buttonColorActive: commonLight.textColor4,
			buttonBorderColorActive: commonLight.transparent,
			buttonBackgroundColorActive: commonLight.successColorPressed,
			buttonWaveSpreadFrom: '0 0 0.5px 0 #18a058',
			buttonWaveSpreadTo: '0 0 0.5px 4.5px #18a058',
			buttonWaveOpacityFrom: '0.6',
			buttonWaveOpacityTo: '0'
		},
		secondary: {
			buttonColor: commonLight.successColor,
			buttonBorderColor: commonLight.transparent,
			buttonBackgroundColor: rgba(commonLight.successColor, 0.16),
			buttonColorHover: commonLight.successColor,
			buttonBorderColorHover: commonLight.transparent,
			buttonBackgroundColorHover: rgba(commonLight.successColor, 0.22),
			buttonColorActive: commonLight.successColor,
			buttonBorderColorActive: commonLight.transparent,
			buttonBackgroundColorActive: rgba(commonLight.successColor, 0.28)
		},
		tertiary: {
			buttonColor: commonLight.successColor,
			buttonBorderColor: commonLight.transparent,
			buttonBackgroundColor: commonLight.buttonColor2,
			buttonColorHover: commonLight.successColor,
			buttonBorderColorHover: commonLight.transparent,
			buttonBackgroundColorHover: commonLight.buttonColor2Hover,
			buttonColorActive: commonLight.successColor,
			buttonBorderColorActive: commonLight.transparent,
			buttonBackgroundColorActive: commonLight.buttonColor2Pressed
		},
		quaternary: {
			buttonColor: commonLight.successColor,
			buttonBorderColor: commonLight.transparent,
			buttonBackgroundColor: commonLight.transparent,
			buttonColorHover: commonLight.successColor,
			buttonBorderColorHover: commonLight.transparent,
			buttonBackgroundColorHover: commonLight.buttonColor2Hover,
			buttonColorActive: commonLight.successColor,
			buttonBorderColorActive: commonLight.transparent,
			buttonBackgroundColorActive: commonLight.buttonColor2Pressed
		},
		dashed: {
			buttonColor: commonLight.successColor,
			buttonBorderColor: commonLight.successColor,
			buttonBackgroundColor: commonLight.transparent,
			buttonColorHover: commonLight.successColor,
			buttonBorderColorHover: commonLight.successColor,
			buttonBackgroundColorHover: commonLight.transparent,
			buttonColorActive: commonLight.successColorPressed,
			buttonBorderColorActive: commonLight.successColorPressed,
			buttonBackgroundColorActive: commonLight.transparent,
			buttonBorderStyle: 'dashed',
			buttonWaveSpreadFrom: '0 0 0.5px 0 #18a058',
			buttonWaveSpreadTo: '0 0 0.5px 4.5px #18a058',
			buttonWaveOpacityFrom: '0.6',
			buttonWaveOpacityTo: '0'
		}
	},
	warning: {
		default: {
			buttonColor: commonLight.textColor4,
			buttonBorderColor: commonLight.warningColor,
			buttonBackgroundColor: commonLight.warningColor,
			buttonColorHover: commonLight.textColor4,
			buttonBorderColorHover: commonLight.transparent,
			buttonBackgroundColorHover: commonLight.warningColorHover,
			buttonColorActive: commonLight.textColor4,
			buttonBorderColorActive: commonLight.transparent,
			buttonBackgroundColorActive: commonLight.warningColorPressed,
			buttonWaveSpreadFrom: '0 0 0.5px 0 #f0a020',
			buttonWaveSpreadTo: '0 0 0.5px 4.5px #f0a020',
			buttonWaveOpacityFrom: '0.6',
			buttonWaveOpacityTo: '0'
		},
		secondary: {
			buttonColor: commonLight.warningColor,
			buttonBorderColor: commonLight.transparent,
			buttonBackgroundColor: rgba(commonLight.warningColor, 0.16),
			buttonColorHover: commonLight.warningColor,
			buttonBorderColorHover: commonLight.transparent,
			buttonBackgroundColorHover: rgba(commonLight.warningColor, 0.22),
			buttonColorActive: commonLight.warningColor,
			buttonBorderColorActive: commonLight.transparent,
			buttonBackgroundColorActive: rgba(commonLight.warningColor, 0.28)
		},
		tertiary: {
			buttonColor: commonLight.warningColor,
			buttonBorderColor: commonLight.transparent,
			buttonBackgroundColor: commonLight.buttonColor2,
			buttonColorHover: commonLight.warningColor,
			buttonBorderColorHover: commonLight.transparent,
			buttonBackgroundColorHover: commonLight.buttonColor2Hover,
			buttonColorActive: commonLight.warningColor,
			buttonBorderColorActive: commonLight.transparent,
			buttonBackgroundColorActive: commonLight.buttonColor2Pressed
		},
		quaternary: {
			buttonColor: commonLight.warningColor,
			buttonBorderColor: commonLight.transparent,
			buttonBackgroundColor: commonLight.transparent,
			buttonColorHover: commonLight.warningColor,
			buttonBorderColorHover: commonLight.transparent,
			buttonBackgroundColorHover: commonLight.buttonColor2Hover,
			buttonColorActive: commonLight.warningColor,
			buttonBorderColorActive: commonLight.transparent,
			buttonBackgroundColorActive: commonLight.buttonColor2Pressed
		},
		dashed: {
			buttonColor: commonLight.warningColor,
			buttonBorderColor: commonLight.warningColor,
			buttonBackgroundColor: commonLight.transparent,
			buttonColorHover: commonLight.warningColor,
			buttonBorderColorHover: commonLight.warningColor,
			buttonBackgroundColorHover: commonLight.transparent,
			buttonColorActive: commonLight.warningColorPressed,
			buttonBorderColorActive: commonLight.warningColorPressed,
			buttonBackgroundColorActive: commonLight.transparent,
			buttonBorderStyle: 'dashed',
			buttonWaveSpreadFrom: '0 0 0.5px 0 #f0a020',
			buttonWaveSpreadTo: '0 0 0.5px 4.5px #f0a020',
			buttonWaveOpacityFrom: '0.6',
			buttonWaveOpacityTo: '0'
		}
	},
	error: {
		default: {
			buttonColor: commonLight.textColor4,
			buttonBorderColor: commonLight.errorColor,
			buttonBackgroundColor: commonLight.errorColor,
			buttonColorHover: commonLight.textColor4,
			buttonBorderColorHover: commonLight.transparent,
			buttonBackgroundColorHover: commonLight.errorColorHover,
			buttonColorActive: commonLight.textColor4,
			buttonBorderColorActive: commonLight.transparent,
			buttonBackgroundColorActive: commonLight.errorColorPressed,
			buttonWaveSpreadFrom: '0 0 0.5px 0 #d03050',
			buttonWaveSpreadTo: '0 0 0.5px 4.5px #d03050',
			buttonWaveOpacityFrom: '0.6',
			buttonWaveOpacityTo: '0'
		},
		secondary: {
			buttonColor: commonLight.errorColor,
			buttonBorderColor: commonLight.transparent,
			buttonBackgroundColor: rgba(commonLight.errorColor, 0.16),
			buttonColorHover: commonLight.errorColor,
			buttonBorderColorHover: commonLight.transparent,
			buttonBackgroundColorHover: rgba(commonLight.errorColor, 0.22),
			buttonColorActive: commonLight.errorColor,
			buttonBorderColorActive: commonLight.transparent,
			buttonBackgroundColorActive: rgba(commonLight.errorColor, 0.28)
		},
		tertiary: {
			buttonColor: commonLight.errorColor,
			buttonBorderColor: commonLight.transparent,
			buttonBackgroundColor: commonLight.buttonColor2,
			buttonColorHover: commonLight.errorColor,
			buttonBorderColorHover: commonLight.transparent,
			buttonBackgroundColorHover: commonLight.buttonColor2Hover,
			buttonColorActive: commonLight.errorColor,
			buttonBorderColorActive: commonLight.transparent,
			buttonBackgroundColorActive: commonLight.buttonColor2Pressed
		},
		quaternary: {
			buttonColor: commonLight.errorColor,
			buttonBorderColor: commonLight.transparent,
			buttonBackgroundColor: commonLight.transparent,
			buttonColorHover: commonLight.errorColor,
			buttonBorderColorHover: commonLight.transparent,
			buttonBackgroundColorHover: commonLight.buttonColor2Hover,
			buttonColorActive: commonLight.errorColor,
			buttonBorderColorActive: commonLight.transparent,
			buttonBackgroundColorActive: commonLight.buttonColor2Pressed
		},
		dashed: {
			buttonColor: commonLight.errorColor,
			buttonBorderColor: commonLight.errorColor,
			buttonBackgroundColor: commonLight.transparent,
			buttonColorHover: commonLight.errorColor,
			buttonBorderColorHover: commonLight.errorColor,
			buttonBackgroundColorHover: commonLight.transparent,
			buttonColorActive: commonLight.errorColorPressed,
			buttonBorderColorActive: commonLight.errorColorPressed,
			buttonBackgroundColorActive: commonLight.transparent,
			buttonBorderStyle: 'dashed',
			buttonWaveSpreadFrom: '0 0 0.5px 0 #d03050',
			buttonWaveSpreadTo: '0 0 0.5px 4.5px #d03050',
			buttonWaveOpacityFrom: '0.6',
			buttonWaveOpacityTo: '0'
		}
	},
	info: {
		default: {
			buttonColor: commonLight.textColor4,
			buttonBorderColor: commonLight.infoColor,
			buttonBackgroundColor: commonLight.infoColor,
			buttonColorHover: commonLight.textColor4,
			buttonBorderColorHover: commonLight.transparent,
			buttonBackgroundColorHover: commonLight.infoColorHover,
			buttonColorActive: commonLight.textColor4,
			buttonBorderColorActive: commonLight.transparent,
			buttonBackgroundColorActive: commonLight.infoColorPressed,
			buttonWaveSpreadFrom: '0 0 0.5px 0 #2080f0',
			buttonWaveSpreadTo: '0 0 0.5px 4.5px #2080f0',
			buttonWaveOpacityFrom: '0.6',
			buttonWaveOpacityTo: '0'
		},
		secondary: {
			buttonColor: commonLight.infoColor,
			buttonBorderColor: commonLight.transparent,
			buttonBackgroundColor: rgba(commonLight.infoColor, 0.16),
			buttonColorHover: commonLight.infoColor,
			buttonBorderColorHover: commonLight.transparent,
			buttonBackgroundColorHover: rgba(commonLight.infoColor, 0.22),
			buttonColorActive: commonLight.infoColor,
			buttonBorderColorActive: commonLight.transparent,
			buttonBackgroundColorActive: rgba(commonLight.infoColor, 0.28)
		},
		tertiary: {
			buttonColor: commonLight.infoColor,
			buttonBorderColor: commonLight.transparent,
			buttonBackgroundColor: commonLight.buttonColor2,
			buttonColorHover: commonLight.infoColor,
			buttonBorderColorHover: commonLight.transparent,
			buttonBackgroundColorHover: commonLight.buttonColor2Hover,
			buttonColorActive: commonLight.infoColor,
			buttonBorderColorActive: commonLight.transparent,
			buttonBackgroundColorActive: commonLight.buttonColor2Pressed
		},
		quaternary: {
			buttonColor: commonLight.infoColor,
			buttonBorderColor: commonLight.transparent,
			buttonBackgroundColor: commonLight.transparent,
			buttonColorHover: commonLight.infoColor,
			buttonBorderColorHover: commonLight.transparent,
			buttonBackgroundColorHover: commonLight.buttonColor2Hover,
			buttonColorActive: commonLight.infoColor,
			buttonBorderColorActive: commonLight.transparent,
			buttonBackgroundColorActive: commonLight.buttonColor2Pressed
		},
		dashed: {
			buttonColor: commonLight.infoColor,
			buttonBorderColor: commonLight.infoColor,
			buttonBackgroundColor: commonLight.transparent,
			buttonColorHover: commonLight.infoColor,
			buttonBorderColorHover: commonLight.infoColor,
			buttonBackgroundColorHover: commonLight.transparent,
			buttonColorActive: commonLight.infoColorPressed,
			buttonBorderColorActive: commonLight.infoColorPressed,
			buttonBackgroundColorActive: commonLight.transparent,
			buttonBorderStyle: 'dashed',
			buttonWaveSpreadFrom: '0 0 0.5px 0 #2080f0',
			buttonWaveSpreadTo: '0 0 0.5px 4.5px #2080f0',
			buttonWaveOpacityFrom: '0.6',
			buttonWaveOpacityTo: '0'
		}
	}
}
