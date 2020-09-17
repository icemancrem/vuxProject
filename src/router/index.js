import Vue from 'vue'
import Router from 'vue-router'
import Layout from 'pages/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'homepage',
      component: Layout,
      children: [
        {
          path: '/home',
          name: 'home',
          component: (resolve) => require(['pages/home/index'], resolve),
          meta: {
            title: '首页'
          }
        },
        {
          path: '/handler',
          name: 'handler',
          component: (resolve) => require(['pages/handler/index'], resolve),
          meta: {
            title: '故障处理'
          }
        },
        {
          path: '/handlerJug',
          name: 'handlerJug',
          component: (resolve) => require(['pages/handler/components/jug/index'], resolve),
          meta: {
            title: '故障判定'
          }
        },
      ]
    }
  ]
})
