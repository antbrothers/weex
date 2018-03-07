/**
 * Created by linjianxi on 2017/10/13.
 */
/**
 * Created by linjianxi on 2017/8/17.
 */
var modal = weex.requireModule('modal')
import weexVueRouter from 'weex-vue-router'
import routes from './native-router'  // web端的路由跳转在web-router里定义, 在app.js 里引用
Vue.use(weexVueRouter, {routes, weex});
var cookie = ''
export default {
  data() {
    return {
      rpx: 1,
      apiDomain: '',
      android: weex.config.env.platform.toLowerCase() === 'android',
      ios: weex.config.env.platform.toLowerCase() === 'ios',
      web: weex.config.env.platform.toLowerCase() === 'web',
      is_test: true,
      tool: {}
    }
  },
  created() {
    let self = this;
    self.tool = require('./utils/tool')(self.web, self.ios)
    if(weex.config.params && weex.config.params.is_test != 'true'){
      self.apiDomain='http://hd.lvb.eastmoney.com';
    } else {
      self.apiDomain='http://hd-qas.lvb.eastmoney.com';
    }
    self.is_test = weex.config.params && weex.config.params.is_test == 'true'
    if (self.web) {
      cookie = require('./utils/cookie')
      require('./utils/web-getUserInfo')(self.ios, cookie)
    }
  },
  methods: {
    request(opt) {
      const stream = weex.requireModule('stream');
      const self = this;
      let defaultOption = {
        host: self.apiDomain,
        type: 'post',
        proxy: false,   // 默认非转发的接口

        url: '',
        data: {
          param: {
            'ctoken': self.web ? cookie('ctoken') : weex.config.params.ctoken,
            'utoken': self.web ? cookie('utoken') : weex.config.params.utoken,
            'device_id': self.web ? cookie('device_id') : weex.config.params.device_id
          }
        },
        async: true,
        timeout: 20000,
        dataType: 'json'
      };
      let option = self.extendObject(defaultOption, opt);
      let query = ''
      var proxStr = ''
      var proxyParam = {
        "domain": "",
        "api": "",
        "method": "",
        "param": ""
      }

      var proxyParamStr = ''
      for (var key in option.data) {
        if (typeof option.data[key] === 'object' && option.data[key] !== null ) {
          for (var m in option.data[key]) {
            if (option.proxy) {
              proxStr += `${m}=${option.data[key][m]}&`
            } else {
              query += `${m}=${option.data[key][m]}&`
            }
          }
        } else {
          query += `${key}=${option.data[key]}&`
        }
      }
      // 转发 非json 参数
      if (option.proxy && (option.data.method == 'post' || option.data.method == 'get')) {
        proxyParamStr = query + 'param=' + encodeURIComponent(proxStr)
      } else {
        // 转发 接受json 参数
        proxyParam.domain = option.data.domain
        proxyParam.api = option.data.api
        proxyParam.method = option.data.method
        proxyParam.param = encodeURIComponent(JSON.stringify(option.data.param))
        proxyParamStr = 'domain='+proxyParam.domain+'&api='+proxyParam.api+ '&method=' + proxyParam.method+'&param=' + proxyParam.param
      }
      return new Promise((resolve, reject) => {
        stream.fetch({
          method: option.type,
          url: option.proxy? option.host+option.url+'?' + proxyParamStr : option.host+option.url,
          type: option.dataType,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: option.proxy? '' : query
        }, (response) => {
          if (response.status == 200) {
            resolve(response.data);
          } else {
            reject(response)
          }
        }, () => {})
      })
    },
    /**
     * 路由跳转
     * @param url
     * @param routerType h5 weex
     * @param htmlTpe 页面类型 支付页面 特殊处理 支付页面  htmlType = pay  否则 htmlType = no
     */
    jump(url, routerType, htmlType) {
      if (!url) {
        console.warn(url + "为非法的链接");
        return;
      }
      const self = this;
      //const nativeEvent = weex.requireModule('nativeEvent'); //native端必须扩展这个模块才能正常运行
      let go = to => {
        self.$router.push(to);
      };

      if (self.web) {
        if (routerType == 'encode') {
          this.tool.WEEX_ROUTER(url, routerType, htmlType)
        } else if (routerType == 'weex') {
          this.tool.WEEX_ROUTER(url, routerType, htmlType)
        } else if (url.indexOf('http') === 0) {
          window.location.href = url
        } else {
          go(url)
        }
        /*if (url.indexOf('http') === 0) {
         window.location.href = url
         } else if (routerType == 'encode') {
         this.tool.WEEX_ROUTER(url, routerType, htmlType)
         } else if (routerType == 'weex') {
         this.tool.WEEX_ROUTER(url, routerType, htmlType)
         } else {
         go(url)
         }*/
      }
      if (!self.web) {
        this.tool.WEEX_ROUTER(url, routerType, htmlType)
      }
    },
    extendObject(destination, source) { // 对参数进行一次深拷贝
      for (var property in source) {
        if (typeof source[property] === "object" && source[property] !== null ) {
          destination[property] = destination[property] || {};
          for (var key in source[property]) {
            if (typeof source[property][key] === "object" && source[property][key] !== null) {
              for (var deepKey in source[property][key]) {
                destination[property][key][deepKey] = source[property][key][[deepKey]]
              }
            } else {
              destination[property][key] = source[property][key]
            }

          }
        } else {
          destination[property] = source[property];
        }
      }
      return destination;
    },

    /**
     * 此处写入cookie， 要return 一个对象，
     * 因为 cookieFun 是一个方法，会优先进入Vue 框架的一个绑定bind()方法 (优先绑定数据 faster than native)
     * @returns {{cookie: string}}
     */
    cookieFun() {
      return {cookie: cookie}
    }
  }
}
