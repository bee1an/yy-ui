import { tryOnScopeDispose } from '@yy-craft/utils/src/vue'
import { type ShallowRef, watch } from 'vue'

export type UseResizeObserverOptions = ResizeObserverOptions

export type UseResizeObserverReturn = ReturnType<typeof useResizeObserver>

/**
 * @description 监听尺寸变化
 */
export const useResizeObserver = (
	/** 监听对象 */
	target: Readonly<ShallowRef<Element | null>>,
	/** 尺寸变化时回调 */
	onResize: (entry: ResizeObserverEntry[]) => void,
	/**  */
	options: UseResizeObserverOptions = {}
) => {
	if (import.meta.env.SSR) return () => null

	const resizeObserver = new ResizeObserver(onResize)

	const cleanups: Function[] = []
	const cleanup = () => {
		cleanups.forEach((fn) => fn())
		cleanups.length = 0
	}

	const observe = () => {
		resizeObserver.observe(target.value!, options)
		return () => resizeObserver.disconnect()
	}

	const unwatch = watch(
		target,
		(el) => {
			cleanup()
			if (!el) return
			cleanups.push(observe())
		},
		{
			immediate: true
		}
	)

	const stop = () => {
		unwatch()
		cleanup()
	}

	tryOnScopeDispose(stop)

	return stop
}
