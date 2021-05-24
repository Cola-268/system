import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './plugins/element.js'
//导入全局样式表
import './assets/css/public.css'
//导入字体图标
import './assets/fonts/iconfont.css'
//导入树状三级菜单  依赖
import TreeTable from 'vue-table-with-tree-grid'
//导入富文本编辑器  依赖
import VueQuillEditor from 'vue-quill-editor'
//导入富文本的样式
// import 'quill/dist/quill.core.css' // import styles
// import 'quill/dist/quill.snow.css' // for snow theme
// import 'quill/dist/quill.bubble.css' // for bubble theme

//导入nprogress
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'

//导入axios
import axios from 'axios'
//配置求情的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
//在request拦截器中。显示进度条
axios.interceptors.request.use(config => {
  NProgress.start()
  config.headers.Authorization = window.sessionStorage.getItem("token")
  return config
})
//再response 拦截器中,隐藏进度条
axios.interceptors.response.use(config=>{
  NProgress.done()
  return config
})

Vue.component('tree-table',TreeTable)
Vue.use(VueQuillEditor)

Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.filter('dateFormat',function(originVal){
  const dt=new Date(originVal)
  const y=dt.getFullYear()
  const m=(dt.getMonth()+1+'').padStart(2,'0')
  const d=(dt.getDate()+1+'').padStart(2,'0')
  const hh=(dt.getHours()+1+'').padStart(2,'0')
  const mm=(dt.getMinutes()+1+'').padStart(2,'0')
  const ss=(dt.getSeconds()+1+'').padStart(2,'0')
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
