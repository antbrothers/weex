/**
 * Created by linjianxi on 2017/8/17.
 */
import vueRouter from 'vue-router'
Vue.use(vueRouter)

import routes from './web-router'
const router = new vueRouter({
  // mode: 'hash'
  routes
});

new Vue ({
  el: '#root',
  router
})