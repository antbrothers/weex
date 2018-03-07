/**
 * Created by linjianxi on 2017/8/21.
 */
module.exports = function (ios, cookie) {
  var LOGININFO = 'GET_LOGIN_INFO' + Math.floor(Math.random() * 1000000);
  var LOGIN_INFO_CB = 'LOGIN_INFO_CB' + Math.floor(Math.random() * 1000000);
  var DEVICE_INFO = 'DEVICE_INFO' + Math.floor(Math.random() * 1000000);
  var DEVICE_INFO_CB = 'DEVICE_INFO_CB' + Math.floor(Math.random() * 1000000);


  window[LOGININFO] = function (str) {
    var strCB = '{"callbackname":"' + str + '"}';
    try {
      if (ios) {
        callAppFun('emH5GetLoginStatus:' + strCB)
      } else {
        if (window.eastmoney) {
          window.eastmoney.emH5GetLoginStatus(strCB)
        }
      }
    } catch (e) {
    }
  }
  window[LOGIN_INFO_CB] = function (json) {
    if (typeof (json) === 'string') {
      var data = JSON.parse(json)
      cookie('uid', data.data.uid, {'path': '/'})
      cookie('ctoken', data.data.ct, {'path': '/'})
      cookie('utoken', data.data.ut, {'path': '/'})
      window[DEVICE_INFO](''+DEVICE_INFO_CB)
    }
  }
  window[DEVICE_INFO] = function (str){
    var strCB = '{"callbackname":"' + str + '"}'
    try {
      if (ios) {
        callAppFun('getDeviceInfo:' + strCB)
      } else {
        if (window.eastmoney) {
          window.eastmoney.getDeviceInfo(strCB)
        }
      }
    } catch (e) {
    }
  }
  window[DEVICE_INFO_CB] = function (json){
    if (typeof (json) === 'string') {
      var data = JSON.parse(json)
      cookie('device_id', data.data.UniqueID, {'path': '/'})
    }
  }
  window[LOGININFO]('' + LOGIN_INFO_CB);

  function callAppFun(url) {
    var iframe = document.createElement('iframe')
    iframe.src = url;
    iframe.width = 0;
    iframe.border = 0;
    iframe.style.display = 'none';
    document.body.appendChild(iframe)
    setTimeout(function () {
      iframe.remove()
    }, 500)
  }
};
