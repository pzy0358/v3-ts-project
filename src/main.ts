import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入scss
import './styles/index.scss'

import ElementPlus from 'element-plus'

import useIcon from './utils/setGlobal'

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(useIcon)
app.use(ElementPlus, { locale: zhCn })
app.mount('#app')
