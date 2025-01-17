import { createCSSVar } from '@yy-ui/utils'
import {
  ThemeKey,
  ThemeVars,
  injectTheme as _injectTheme
} from '@yy-ui/theme-chalk'
import { CNode } from 'css-render'
import {
  computed,
  ComputedRef,
  ExtractPropTypes,
  inject,
  // isRef,
  PropType,
  toValue
} from 'vue'

/**
 * @description 主题注入
 */

function useTheme<T extends ThemeVars>(
  /** 双主题, 支持响应式数据 */
  themes: { light: T; dark: T } | ComputedRef<{ light: T; dark: T }>,
  mountId: string,
  style?: CNode,
  props?: ExtractPropTypes<ReturnType<typeof useThemeProps>>,
  exclude?: string[],
  prefix?: string
): {
  styleVars: ComputedRef<{
    [x: string]: string
  }>
  vars: ComputedRef<T>
}
function useTheme<T extends ThemeVars>(
  /** 单主题, 支持响应式数据 */
  themes: T | ComputedRef<T>,
  mountId: string,
  style?: CNode,
  props?: ExtractPropTypes<ReturnType<typeof useThemeProps>>,
  exclude?: string[],
  prefix?: string
): {
  styleVars: ComputedRef<{
    [x: string]: string
  }>
  vars: ComputedRef<T>
}
function useTheme(
  /** 没有主题, 只挂载样式 */
  mountId: string,
  style: CNode
): void
function useTheme<T extends ThemeVars>(
  themes:
    | { light: T; dark: T }
    | ComputedRef<{ light: T; dark: T }>
    | T
    | ComputedRef<T>
    | string,
  mountId: string | CNode,
  style?: CNode,
  props?: ExtractPropTypes<ReturnType<typeof useThemeProps>>,
  exclude?: string[],
  prefix = 'y'
) {
  if (typeof themes === 'string' && typeof mountId !== 'string') {
    mountId.mount({ id: prefix + '-' + themes })
    return
  }

  style?.mount({ id: prefix + '-' + mountId })

  const getTheme = (type: ThemeKey) => {
    // const themesVal = isRef(themes) ? themes.value : themes
    const themesVal = toValue(themes) as T

    if ('light' in themesVal || 'dark' in themesVal) {
      return themesVal[type]
    }
    return themesVal
  }

  const injectTheme = inject(_injectTheme, null)

  const theme = computed(() => {
    const themeStr = props?.theme ?? injectTheme?.theme.value ?? 'light' // props优先

    return themeStr === 'light' ? getTheme('light') : getTheme('dark')
  })

  const vars = computed(() => {
    return Object.assign({}, theme.value, props?.themeOverrides || {}) // props优先
  })

  const styleVars = computed(() => {
    return Object.entries(vars.value).reduce((acc, [key, value]) => {
      if (exclude?.includes(key)) return acc
      acc[createCSSVar(key, prefix)] = value

      return acc
    }, {} as Record<string, any>)
  })

  return { styleVars, vars }
}

export { useTheme }

/** 生成主题prop */
export const useThemeProps = <T extends ThemeVars>() => {
  return {
    theme: { type: String as PropType<ThemeKey> },
    themeOverrides: Object as PropType<T>
  }
}
