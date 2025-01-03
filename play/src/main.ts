import { createApp } from 'vue'
import App from './App.vue'

import yyUi from '@yy-ui/yy-ui'
import plugin from './plugins'
// 全局引入样式
// import '@yy-ui/theme-chalk/src/index.scss'

const app = createApp(App)
app.use(yyUi).use(plugin)

app.mount('#app')
