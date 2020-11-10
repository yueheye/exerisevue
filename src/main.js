import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入全局样式表
import '@/assets/global.css'
//导入axios
import axios from 'axios'
axios.defaults.baseURL='https://www.liulongbin.top:8888/api/private/v1/'
axios.interceptors.request.use(config=>{
  /*console.log(config)*/
  config.headers.AUTHORIZATION =window.sessionStorage.getItem('token');
  return config
})
Vue.prototype.$http =axios

//导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
