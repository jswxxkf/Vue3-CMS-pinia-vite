import { createApp } from 'vue'
import App from './App.vue'

import { globalRegister } from './global'

import router from './router'

import store, { setupStore } from './store'

const app = createApp(App)
// global registering
app.use(globalRegister) // 等价于globalRegister(app)
app.use(router)
app.use(store)
// setup store
setupStore()
app.mount('#app')
