import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import index from '../view/index.vue'
import login from '../view/login'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'index',
    //   component: index,
    //   meta: {
    //     title: '管理系统'
    //   }
    // },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: '管理系统-登录'
      }
    }
  ]
})
