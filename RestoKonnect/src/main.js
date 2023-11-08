import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "./routes/index"
const app = createApp(App)

app.use(router)

app.mount('#app')
