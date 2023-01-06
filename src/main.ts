import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import ElementPlus from 'element-plus'

import App from './App.vue'
import AppComponents from './components'

import './index.css'
import router from './router'

import enUS from "../src/lang/en-US";
import jaJP from "../src/lang/ja-JP";


const app = createApp(App)
const i18n = createI18n({
  // something vue-i18n options here ...
  locale: 'ja',
  allowComposition: true, // you need to specify that!
  messages: {
    en: enUS,
    ja: jaJP
  }
})

app.use(i18n)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(AppComponents)
app.mount('#app')
app.config.performance = true