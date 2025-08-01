import {
	type PropType,
	Transition,
	TransitionGroup,
	type TransitionProps,
	defineComponent,
	h
} from 'vue'

/* 
  @description code from https://github.com/tusen-ai/naive-ui/blob/main/src/_internal/fade-in-expand-transition/src/FadeInExpandTransition.ts
*/

export default defineComponent({
	name: 'FadeInExpandTransition',
	props: {
		appear: Boolean,
		group: Boolean,
		mode: String as PropType<'in-out' | 'out-in' | 'default'>,
		onLeave: Function,
		onAfterLeave: Function,
		onAfterEnter: Function,
		width: Boolean,
		reverse: Boolean
	},
	setup(props) {
		function handleBeforeLeave(el: HTMLElement): void {
			if (props.width) {
				el.style.maxWidth = `${el.offsetWidth}px`
			} else {
				el.style.maxHeight = `${el.offsetHeight}px`
			}
			void el.offsetWidth
		}
		function handleLeave(el: HTMLElement): void {
			if (props.width) {
				el.style.maxWidth = '0'
			} else {
				el.style.maxHeight = '0'
			}
			void el.offsetWidth
			const { onLeave } = props
			if (onLeave) onLeave()
		}
		function handleAfterLeave(el: HTMLElement): void {
			if (props.width) {
				el.style.maxWidth = ''
			} else {
				el.style.maxHeight = ''
			}
			const { onAfterLeave } = props
			if (onAfterLeave) onAfterLeave()
		}
		function handleEnter(el: HTMLElement): void {
			el.style.transition = 'none'
			if (props.width) {
				const memorizedWidth = el.offsetWidth
				el.style.maxWidth = '0'
				void el.offsetWidth
				el.style.transition = ''
				el.style.maxWidth = `${memorizedWidth}px`
			} else {
				if (props.reverse) {
					el.style.maxHeight = `${el.offsetHeight}px`
					void el.offsetHeight
					el.style.transition = ''
					el.style.maxHeight = '0'
				} else {
					const memorizedHeight = el.offsetHeight
					el.style.maxHeight = '0'
					void el.offsetWidth
					el.style.transition = ''
					el.style.maxHeight = `${memorizedHeight}px`
				}
			}
			void el.offsetWidth
		}
		function handleAfterEnter(el: HTMLElement): void {
			if (props.width) {
				el.style.maxWidth = ''
			} else {
				if (!props.reverse) {
					el.style.maxHeight = ''
				}
			}
			props.onAfterEnter?.()
		}

		return {
			handleBeforeLeave,
			handleLeave,
			handleAfterLeave,
			handleEnter,
			handleAfterEnter
		}
	},
	render() {
		const {
			handleBeforeLeave,
			handleLeave,
			handleAfterLeave,
			handleEnter,
			handleAfterEnter,
			$props: { group, width, mode, appear },
			$slots: { default: defaultSlot }
		} = this
		const tag = group ? TransitionGroup : Transition

		const resolvedProps = {
			name: width ? 'fade-in-width-expand-transition' : 'fade-in-height-expand-transition',
			appear,
			onEnter: handleEnter,
			onAfterEnter: handleAfterEnter,
			onBeforeLeave: handleBeforeLeave,
			onLeave: handleLeave,
			onAfterLeave: handleAfterLeave
		}

		if (!group) {
			;(resolvedProps as unknown as TransitionProps).mode = mode
		}

		return h(tag as any, resolvedProps, defaultSlot)
	}
})
