/**
 * Created by linjianxi on 2017/8/17.
 */
const basePath='http://192.168.31.174:8080/dist/account';
export default [
  {path:'/',component:basePath+'/index.js'},
  {path:'/list/:id',component:basePath+'/product/list.js'},
  {path:'/product/:id',component:basePath+'/product/detail.js'},
  { path: '/test', component: basePath+'/product/test.js'},
  { path: '/pay', component: basePath+'/product/pay.js'},
  { path: '/suject', component: basePath + '/product/subject.js'}
];