import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '/src/components/HelloWorld'
import HomeIndex from '/src/pages/home/Index'
import LoginIndex from '/src/pages/login/Index'
import { cookie } from '/src/util/cookie'

Vue.use(Router)

const router = new Router({
  routes: [
    { // 首页
      path: '/',
      alias: '/home',
      name: 'Index',
      component: HomeIndex
    },
    { // hello
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    },
    { // 登录
      path: '/login',
      name: 'Login',
      component: LoginIndex
    }
  ]
})

// 判断 token
router.beforeEach((to, from, next) => {
  if (cookie('token')) return next()
  /* 无token */
  if (from.path == '/login') return next(false) // 从login跳转
  if (to.path == '/login') return next() // 跳转到login
  next('/login')
})

export default router
