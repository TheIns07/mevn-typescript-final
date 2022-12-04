import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index'
import 'bootswatch/dist/sandstone/bootstrap.min.css'

createApp(App).use(router).mount('#app')
