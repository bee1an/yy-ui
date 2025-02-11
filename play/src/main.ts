import { createApp } from 'vue'
import App from './App.vue'

import yyUi from '../../dist'
import plugin from './plugins'
import router from './router'

const app = createApp(App)
app.use(yyUi).use(plugin).use(router)

app.mount('#app')
