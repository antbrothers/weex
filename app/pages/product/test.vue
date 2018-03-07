<template>
  <div>
    <html:input class="text" type="text" :value='device_id' placeholder="请输入deviceId" />
    <html:input class="text" type="text" :value='ctoken' placeholder="请输入ctoken" />
    <html:input class="text" type="text" :value='utoken' placeholder="请输入utoken" />
    <html:input class="text" type="text" :value='Uid' placeholder="请输入Uid" />
    <text @click='login' class="btn">模拟登录</text>
  </div>
</template>

<script>
  import mixins from '../../mixins'
  export default {
    mixins: [mixins],
    data(){
      return {
        "title":"获取用户信息-旧",
        "shared":true,
        "device_id":"Z4c35mZmMzMyNzc1Njc0NDkzNjE0NmU2NDdmZGRjZmEyNGV8fDYwNjE4MzYyMDY5NjY2OA=ab49=",
        "version":"2.0.5",
        "plat":"andriod",
        "network":"Wifi",
        "ctoken":"W-QMfbiJ1wcVWaxQ0hLFK4Q2XUyG6B2UBWoN1tQYcvRRtS_Lo_xNzuyELGbzETylQ7nQ1-gwUs1rahvXeP25AbZN4pukoiWV0eTJ08TN754uHDOsKiWwyjjgxIlH5Y0gfRE7zHBk_bdNmjHiI58Nflx7HWUUq6OeSJZuilBAjiY",
        "utoken":"s3wlV4neEHtR-7bXjPv8RSXEzQJw5HIOi7i9QFQT3Wyizhu4WMiqW62d_Ei8DTy7CF0XoE_WmvU4i9dIzbR6IHHmw0JF0xVKgfmm5kXAY4DCJmY5bxZ3lrzxao6xbdqgEO_GKjcx-jK462ioJBjvHMACxualq60H4nYipmvaBai-snE3yopeRaUTZjXiz5dprzqw_O6jh_IIylkOSaOxTnfqJSz4YhThiFG7TOicfqFLd3hO1AQUhWGhiOgASXJF5E93HzVPFdquDyP0KgGmnXsF49EN-YGIzxoxuZJg1yqBSuA08BkJFpsDXwyXS3xvRGqdtOkk3pc_RopRptUnbh-cRSeRxA4JL6BZzUjEMc0"
      }
    },
    methods:{
      login(){
        var _this = this
        _this.cookieFun().cookie('device_id', _this.device_id, {'path': '/'})
        _this.cookieFun().cookie('ctoken', _this.ctoken, {'path': '/'})
        _this.cookieFun().cookie('utoken', _this.utoken, {'path': '/'})
        _this.cookieFun().cookie('version', _this.version, {'path': '/'})
        _this.cookieFun().cookie('plat', _this.plat, {'path': '/'})
        _this.cookieFun().cookie('network', _this.network, {'path': '/'})
      }
    }
  }
</script>
<style>
  .text {
    height: 80px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .btn {
    width: 750px;
    height: 100px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    text-align: center;
    background-color: #8e8e8e;
    color: white;
    line-height: 100px;
  }
</style>