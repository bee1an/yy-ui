import type { App } from 'vue'

function create({
	componentPrefix = 'Yy',
	pluginMakers = []
}: {
	componentPrefix?: string
	pluginMakers?: any[]
} = {}) {
	function install(app: App) {
		pluginMakers.forEach((pluginMaker) => {
			if (typeof pluginMaker === 'function' && pluginMaker.useInstall) {
				const plugin = pluginMaker(componentPrefix)

				'install' in plugin && app.use(plugin)
			}
		})
	}

	return { install }
}

export default create
