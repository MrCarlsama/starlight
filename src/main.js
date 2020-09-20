import {
  createApp
} from 'vue'
import {
  store
} from './store/index.js'
import {
  router
} from './router/index.js';
import './index.scss'
import App from './App.vue'

const app = createApp(App);

app.use(router)
app.use(store);

app.mount('#app')