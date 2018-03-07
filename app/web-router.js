/**
 * Created by linjianxi on 2017/8/17.
 */
import index from './pages/index.vue'
import list from './pages/product/list.vue'
const detail = resolve => require(['./pages/product/detail.vue'], resolve);
const pay = resolve => require(['./pages/product/pay.vue'], resolve)
const test = resolve => require(['./pages/product/test.vue'], resolve)
const subject = resolve => require(['./pages/product/subject.vue'], resolve)


const routes = [
  { path: '/', component: index },
  { path: '/test', component: test},
  { path: '/list/:id', component: list },
  { path: '/product/:id', component: detail },
  { path: '/pay', component: pay},
  { path: '/subject', component: subject}
];
export default routes