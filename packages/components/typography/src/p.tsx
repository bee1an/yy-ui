import { useTheme, useThemeProps } from '@yy-ui/composables'
import { pDark, pLight, pStyle, PThemeVars } from '@yy-ui/theme-chalk'
import { createKey, CreateNamespace } from '@yy-ui/utils'
import { computed, defineComponent, ExtractPropTypes, PropType } from 'vue'

export const Pprops = {
  ...useThemeProps<PThemeVars>(),
  /** 文字深度 */
  depth: {
    type: [Number, String] as PropType<1 | 2 | 3 | '1' | '2' | '3'>,
    default: '1'
  }
}

export type PProps = ExtractPropTypes<typeof Pprops>

export default defineComponent({
  name: 'P',
  props: Pprops,
  setup(props) {
    const bem = new CreateNamespace('p')

    const lightVars = pLight.vars()
    const darkVars = pDark.vars()

    const theme = computed(() => {
      const textColorKey = createKey(
        'textColor',
        props.depth.toString() as '1' | '2' | '3'
      )

      return {
        light: Object.assign({}, lightVars, {
          textColor: lightVars[textColorKey]
        }),
        dark: Object.assign({}, darkVars, {
          textColor: darkVars[textColorKey]
        })
      }
    })

    const { styleVars } = useTheme(theme, 'p', pStyle, props, pLight.exclude)

    return { bem, styleVars }
  },
  render() {
    const { bem, styleVars } = this

    return (
      <p style={styleVars} class={bem.b().value}>
        {this.$slots.default?.()}
      </p>
    )
  }
})
