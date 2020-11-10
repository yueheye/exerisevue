import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'/login'},
  {path:'/login',component: ()=>import('../components/Login')},
  {path:'/home',component: Home }

]
const router = new VueRouter({
  routes
})
router.beforeEach( (to,from,next)=>{
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
  }

)
export default router
