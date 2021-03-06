import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/common.css'
import './style/iconfont.css'
import './style/globalcss.css'
import './plugins/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
