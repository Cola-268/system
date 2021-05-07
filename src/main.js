import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
//导入全局样式表
import './assets/css/public.css'
//导入字体图标
import './assets/fonts/iconfont.css'
axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/'
import axios from 'axios'

Vue.prototype.$http=axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
