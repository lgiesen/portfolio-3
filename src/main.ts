import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(i18n) 
app.use(vuetify)
// Redirect from /#/ to /
if (window.location.pathname === '/' && window.location.hash === '#/') {
    window.location.replace('/');
  }
app.mount('#app')
