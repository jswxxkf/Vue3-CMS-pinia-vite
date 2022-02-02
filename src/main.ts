import { createApp } from 'vue'
import App from './App.vue'

import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'

import router, { navigateToErrorPage } from './router'

import store, { setupStore } from './store'

const app = createApp(App)
// global registering
app.use(globalRegister) // 等价于globalRegister(app)
app.use(store)
// setup store
setupStore()
  .then(() => app.use(router))
  .catch((err) => {
    app.use(router)
    navigateToErrorPage(err)
  })
  .finally(() => app.mount('#app'))
