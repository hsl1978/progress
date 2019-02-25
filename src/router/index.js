import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/list/List.vue'
import Cart from '@/components/cart/Cart.vue'
import Login from '@/components/Login.vue'
import My from '@/components/my/My.vue'
import Home from '@/components/home/Home.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/list' },
    { path: '/list', component: List },
    { path: '/cart', component: Cart },
    { path: '/my', component: My },
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ],

  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  console.log('to', to)
  console.log('from', from)

  if (to.path === '/login') {
    next()
    return
  }
  let token = localStorage.getItem('token')
  if (token) {
    next()
  } else {
    next('/login')
  }
})
export default router
