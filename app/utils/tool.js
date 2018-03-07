/**
 * Created by linjianxi on 2017/8/22.
 */

var event = weex.requireModule('event')
var modal = weex.requireModule('modal')
function eventOpenWeex(param) {
  var params = param
  var bytes = params.split('params=')
  bytes[1] = base64encode(encodeURIComponent(bytes[1]))
  var paramsEncoded = bytes[0] + 'params=' + bytes[1]
  console.log(paramsEncoded)
  event.openSpecifiedPage(paramsEncoded)
}
function eventOpenH5(s, ios) {

  if (ios) { //IOS
    var iosstr = '{"callbackname":"callbackOpen","appname":"haitunlive://","scheme":"' + s + '"}';
    window.location = "emH5toOpenApp:" + iosstr;
  } else { //Android
    var bytes = s.split('params=');
    bytes[1] = encodeURIComponent(base64encode(bytes[1]));
    var androidstr = '{"callbackname":"callbackOpen","appname":"' + 'com.eastmoney.haitunlive' + '","scheme":"' + bytes[0] + 'params=' + bytes[1] + '","isLocal":"' + true + '"}';
    window.eastmoney.emH5toOpenLocalPage(androidstr);
  }
}
function base64encode(str) {
  var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var base64DecodeChars = new Array(
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
    52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
    -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
    -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  var out, i, len;
  var c1, c2, c3;
  len = str.length;
  i = 0;
  out = "";
  while (i < len) {
    c1 = str.charCodeAt(i++) & 0xff;
    if (i == len) {
      out += base64EncodeChars.charAt(c1 >> 2);
      out += base64EncodeChars.charAt((c1 & 0x3) << 4);
      out += "==";
      break;
    }
    c2 = str.charCodeAt(i++);
    if (i == len) {
      out += base64EncodeChars.charAt(c1 >> 2);
      out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
      out += base64EncodeChars.charAt((c2 & 0xF) << 2);
      out += "=";
      break;
    }
    c3 = str.charCodeAt(i++);
    out += base64EncodeChars.charAt(c1 >> 2);
    out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
    out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
    out += base64EncodeChars.charAt(c3 & 0x3F);
  }
  return out;
}
function callbackOpen(returnValue) {
  var str = JSON.parse(returnValue);
  if (str.code != "0") {
    window.location = "http://zhibo.eastmoney.com/";
  }
}
module.exports = function (web, ios) {
  return {
    SET_TITLE: (txt) => {
      var strCB = '{"title1":"' + txt + '"}'
      if (web) {
        if (ios) {
          window.location = 'emH5Title:' + strCB
        } else {
          if (window.eastmoney) {
            window.eastmoney.emH5Title(strCB)
          }
        }
      } else {
         event.emH5Title(strCB)
      }
    },
    /**
     * weex 跳转
     * @param to
     * @param routerType  'weex' 跳weex ； 'h5' 跳h5 ；'encode' 编过码的地址
     * @param htmlType 页面类型 支付页面 特殊处理
     * @constructor
     */
    WEEX_ROUTER: (to, routerType, htmlType) => {
      var parm = ''
      if (routerType == 'weex') {
        var destClass = htmlType == 'pay'? 'pay' : 'wxh5'
        parm = 'emlive://haitunlive.com/first?params={"destClass":"'+ destClass +'","segueParams":{"load_js_path": "' + to + '","title":"","pid":"{pid}"}}'
        if (web) {
          eventOpenH5(parm, ios)
        } else {
          eventOpenWeex(parm)
        }
      } else if (routerType == 'h5'){
        parm = 'emlive://haitunlive.com/first?params={"destClass":"h5","segueParams":{"url":"'+ to +'","isShowTitle":false}}'
        eventOpenWeex(parm)
      } else {
        if (web) {
          eventOpenH5(to, ios)
        } else {
          event.openSpecifiedPage(to)
        }

      }
    },
    OPOEN_WEEX_NATIVE: (url) => {
      if (web) {
        eventOpenH5(url, ios)
      } else {
        eventOpenWeex(url)
      }
    }
  }
}
