import { createApp } from 'vue'
import Home from './components/Home.vue'
import router from './router'

createApp(Home).use(router).mount('#app')
