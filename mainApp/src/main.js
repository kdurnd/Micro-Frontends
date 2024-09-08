import WujieVue from 'wujie-vue3'
import {createApp} from 'vue'
import App from './App.vue'
 

const app = createApp(App)
app.use(WujieVue)
app.mount("#app")
