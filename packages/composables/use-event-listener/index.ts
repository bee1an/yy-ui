import { tryOnScopeDispose } from '@yy-craft/utils/src/vue'
import { type ShallowRef, unref, watch } from 'vue'

export type UseEventListenerReturn = ReturnType<typeof useEventListener>

/**
 * @description 监听事件, 在声明周期结束时自动移除监听
 */
export function useEventListener<K extends keyof WindowEventMap>(
	/** 监听对象 */
	target: Readonly<ShallowRef<HTMLElement | null>> | Window | Document,
	/** 事件类型 */
	type: K,
	/** 监听器 */
	listener: (this: Window, ev: WindowEventMap[K]) => any,
	/** 配置: 与原生配置相同 */
	options?: boolean | AddEventListenerOptions
	/** 停止监听 */
): () => void
export function useEventListener(
	target: Readonly<ShallowRef<HTMLElement | null>> | Window | Document,
	type: string,
	listener: EventListenerOrEventListenerObject,
	options?: boolean | AddEventListenerOptions
) {
	if (import.meta.env.SSR) return () => null

	const cleanups: Function[] = []
	const cleanup = () => {
		cleanups.forEach((fn) => fn())
		cleanups.length = 0
	}

	const register = (el: any, event: string, listener: any, options: any) => {
		el.addEventListener(event, listener, options)
		return () => el.removeEventListener(event, listener, options)
	}

	const watchCallback = () => {
		cleanup()

		const element = unref(target as any)

		if (!element) return

		cleanups.push(register(element, type, listener, options))
	}

	const stopWatcher = watch(() => unref(target as any), watchCallback, {
		immediate: true,
		flush: 'post'
	})

	const stop = () => {
		stopWatcher()
		cleanup()
	}

	tryOnScopeDispose(stop)

	return stop
}
