<script setup lang="ts">
import { useTheme } from '@yy-craft/composables/use-theme'
import { dividerDark, dividerLight, dividerStyle } from '@yy-craft/theme-chalk/src/divider'
import { CreateNamespace } from '@yy-craft/utils/src/create'
import { computed } from 'vue'
import { dividerProps } from './divider'

defineOptions({ name: 'Divider' })

const props = defineProps(dividerProps)

const bem = new CreateNamespace('divider')

const lightVars = dividerLight.vars()

const darkVars = dividerDark.vars()
const themeVars = computed(() => {
	const lVars = { ...lightVars }
	const dVars = { ...darkVars }
	if (props.borderStyle) {
		lVars.dividerBorderStyle = props.borderStyle
		dVars.dividerBorderStyle = props.borderStyle
	}
	return { light: lVars, dark: dVars }
})

const { styleVars } = useTheme(themeVars, 'divider', dividerStyle, props)
</script>

<template>
	<div
		:style="styleVars"
		:class="[
			bem.b().value,
			bem.m(props.vertical && 'vertical').value,
			bem.m(props.contentPosition).value
		]"
	>
		<div :class="[bem.e('line').value, bem.e('line').m('left').value]"></div>
		<div v-if="$slots.default" :class="bem.e('text').value">
			<slot></slot>
		</div>
		<div :class="[bem.e('line').value, bem.e('line').m('right').value]"></div>
	</div>
</template>
