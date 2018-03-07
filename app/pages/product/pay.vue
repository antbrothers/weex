<style scoped src='../../style/pay.css'></style>
<template>
  <scroller class="pay">
    <div class="pay-head-main">
      <div class="pay-head">
        <text class="pay-font-comm">浪花</text>
        <text class="pay-number">{{dataGrid.diamond_num}}</text>
      </div>
    </div>

    <div class="pay-dec">
      <div class="pay-line"></div>
      <text class="pay-dec-font">购买浪花</text>
      <div class="pay-line"></div>
    </div>
    <div class="pay-list">
      <div v-for="(items, index) in dataGrid.pay_diamondinfo_list" class="pay-list-contain">
        <div v-bind:class="['pay-list-main']"  @click="selectChannel(items.diamond_no, index, items.buy_diamond_num)" :ref="'pay-row-'+index">
          <div class="pay-up">
            <image :src="imgs.payIcon" resize="cover" class="payicon"></image>
            <text v-bind:class="['pay-up-font']" :ref="'pay-wave-number-'+index">{{items.buy_diamond_num}}</text>
          </div>
          <div class="pay-down">
            <text v-bind:class="['pay-down-price']" :ref="'pay-money-'+index">￥ {{items.amount}}</text>
          </div>
        </div>
        <div class="pay-list-give" v-if="items.shellnum != 0">
          <image :src="imgs.giveIcon" resize="cover" class="give-icon"></image>
          <text class="give-shell">{{items.shellnum}}贝壳</text>
        </div>
      </div>

      <!--<div class="pay-list-main">
        <div class="pay-up">
          <image :src="imgs.payIcon" resize="cover" class="payicon"></image>
          <text class="pay-up-font">60</text>
        </div>
        <div class="pay-down">
          <text class="pay-down-price">￥ 6.00</text>
        </div>
      </div>
      <div class="pay-list-main">
        <div class="pay-up">
          <image :src="imgs.payIcon" resize="cover" class="payicon"></image>
          <text class="pay-up-font">60</text>
        </div>
        <div class="pay-down">
          <text class="pay-down-price">￥ 6.00</text>
        </div>
      </div>
      <div class="pay-list-main">
        <div class="pay-up">
          <image :src="imgs.payIcon" resize="cover" class="payicon"></image>
          <text class="pay-up-font">60</text>
        </div>
        <div class="pay-down">
          <text class="pay-down-price">￥ 6.00</text>
        </div>
      </div>
      <div class="pay-list-main">
        <div class="pay-up">
          <image :src="imgs.payIcon" resize="cover" class="payicon"></image>
          <text class="pay-up-font">60</text>
        </div>
        <div class="pay-down">
          <text class="pay-down-price">￥ 6.00</text>
        </div>
      </div>
      <div class="pay-list-main">
        <div class="pay-up">
          <image :src="imgs.payIcon" resize="cover" class="payicon"></image>
          <text class="pay-up-font">60</text>
        </div>
        <div class="pay-down">
          <text class="pay-down-price">￥ 6.00</text>
        </div>
      </div>
      <div class="pay-list-main">
        <div class="pay-up">
          <image :src="imgs.payIcon" resize="cover" class="payicon"></image>
          <text class="pay-up-font">60</text>
        </div>
        <div class="pay-down">
          <text class="pay-down-price">￥ 6.00</text>
        </div>
      </div>
      <div class="pay-list-main">
        <div class="pay-up">
          <image :src="imgs.payIcon" resize="cover" class="payicon"></image>
          <text class="pay-up-font">60</text>
        </div>
        <div class="pay-down">
          <text class="pay-down-price">￥ 6.00</text>
        </div>
      </div>-->
    </div>
    <div class="pay-type-container" v-if="android || is_test">
      <div class="type-list" v-for="(items, index) in dataGrid.pay_channel_list" @click="checkPay(index, items.sn)" :ref="'pay_type_'+ index">
        <div class="type-left">
          <image :src="imgs.aliIcon" resize="cover" class="pay-img" v-if="items.sn == 1"></image>
          <image :src="imgs.wechatIcon" resize="cover" class="pay-img" v-if="items.sn == 2"></image>
          <image :src="imgs.appleIcon" resize="cover" class="pay-img apple-icon" v-if="items.sn == 3"></image>
          <text class="type-font">{{items.pay_channel_name}}</text>
        </div>
        <div class="type-right">
          <image :src="imgs.noCheckIcon" resize="cover" class="check-img" :ref="'check-img-'+ index"></image>
        </div>
      </div>
      <!--<div class="type-list">
        <div class="type-left">
          <image :src="imgs.wechatIcon" resize="cover" class="pay-img"></image>
          <text class="type-font">微信支付</text>
        </div>
        <div class="type-right">
          <image :src="imgs.noCheckIcon" resize="cover" class="check-img"></image>
        </div>
      </div>-->

    </div>
    <div class="btn-main">
      <text class="btn" @click="payNow()">立即充值</text>
    </div>
    <div class="agree-main">
      <image :src="imgs.checkIcon" resize="cover" class="check-agree"></image>
      <text class="agree-dec">我已阅读并同意</text>
      <text class="agree-dec agree-xy" @click="jump('http://zhibo.eastmoney.com/agreement/recharge.html', 'h5', 'no')">《浪客充值协议》</text>
    </div>
    <div class="pay-dec" v-if="dataLh.length > 0">
      <div class="pay-line"></div>
      <text class="pay-dec-font">免费获取浪花</text>
      <div class="pay-line"></div>
    </div>
    <div class="pay-type-container" v-if="dataLh.length > 0">
      <div class="type-list" v-for="items in dataLh">
        <div class="type-left">
          <text class="type-font work-font">{{items.name}}</text>
        </div>
        <div class="type-right">
          <text class="get-dec" @click="jump(items.h5_weex_url || items.and_link_url, 'encode', 'no')">去获取</text>
        </div>
      </div>
      <!--<div class="type-list">
        <div class="type-left">
          <text class="type-font work-font">红包</text>
        </div>
        <div class="type-right">
          <text class="get-dec">去获取</text>
        </div>
      </div>-->
    </div>
  </scroller>
</template>
<script>
  var payModule = weex.requireModule('payModule')
  var utilModule = weex.requireModule('utilModule')
  var modal = weex.requireModule('modal')
  import mixins from '../../mixins'
  export default {
    mixins: [mixins],
    data() {
      return {
        imgs: {
          giveIcon: require('../../images/give-2.png'),
          payIcon: require('../../images/payicon.png'),
          aliIcon: require('../../images/ali.png'),
          wechatIcon: require('../../images/wechat.png'),
          appleIcon: require('../../images/appleicon.png'),
          checkIcon: require('../../images/check.png'),
          noCheckIcon: require('../../images/nocheck.png')
        },
        dataGrid: {
          pay_channel_list: []
        },
        dataLh: {},
        payParms: {
          plat: '',
          waveNumber: 0,
          diamondNo: '',
          timestamp: '',
          productType: 'EMLive',
          payType: 1,  // 1支付宝，2 微信， 3 苹果支付\
          out_trade_no: '',
          orderinfo: '',
          wechatTradeNo: ''
        }
      }
    },
    created() {
      var self = this
      self.tool.SET_TITLE('浪花充值')
      self.getPayInfo()
      self.getLangHua()
    },
    mounted: function () {
      var self = this
      if (self.is_test) {
        self.payParms.payType = 1
      } else  {
        self.payParms.payType =self.ios ? 3 : 1
      }
     // self.payParms.payType = self.ios ? 3: 1
      self.payParms.plat = self.ios ? 'Iphone' : 'Android'
      var globalEvent =  weex.requireModule('globalEvent')
      globalEvent.addEventListener("wechatPayCallBack", function (ret) {
        console.log("get wechatPayCallBack callBackCode:" + ret.callBackCode);
        var callBackCode = ret.callBackCode;
        self.payCallBackWechat(callBackCode);
      });
    },
    methods: {
      // 或者充值列表
      getPayInfo() {
        var self = this
        self.request({
          type: 'get',
          proxy: true,
          url: '/proxy/trans',
          data: {
            domain: 6,
            api: 3,
            method: 'json',
            param: {
              'app_type': self.ios ? '2' : '3'
            }
          }
        }).then(res => {
          if(res.result == 1) {
            self.dataGrid = res.data
            /*if (self.ios) {
              self.dataGrid.pay_channel_list = self.dataGrid.pay_channel_list.splice(2,1)
            }*/
            setTimeout(function () {
                self.defaultCheck()
              }, 300)
            }
        })
      },
      // 免费获取浪花
      getLangHua() {
        var self = this
        self.request({
          type: 'get',
          proxy: true,
          url: '/proxy/trans',
          data: {
            domain: 11,
            api: 1,
            method: 'post',
            param: {
              moduletype: 2,
              version: '2.0.3',
              reqtype: 'server'
            }
          }
        }).then(res => {
          if(res.result == 1) {
              self.dataLh = res.data
           }
        })
      },
      // 选择充值金额
      selectChannel(diamond_no, index, buy_diamond_num) {
        for (var i = 0; i < this.dataGrid.pay_diamondinfo_list.length; i++) {
          var wrap = this.$refs['pay-row-' + i]
          var text1 = this.$refs['pay-wave-number-' + i]
          var text2 = this.$refs['pay-money-' + i]
          if (this.web) {
            wrap[0].$el.style.backgroundColor = 'white'
            wrap[0].$el.style.borderColor ='#eeeeee'
            text1[0].$el.style.color = 'black'
            text2[0].$el.style.color = '#a9a9a9'
          } else {
            wrap[0].setStyle('backgroundColor','white')
            wrap[0].setStyle('borderColor','#eeeeee')
            text1[0].setStyle('color', 'black')
            text2[0].setStyle('color','#a9a9a9')
          }
        }
        var wrap = this.$refs['pay-row-' + index]
        var text1 = this.$refs['pay-wave-number-' + index]
        var text2 = this.$refs['pay-money-' + index]
        if (this.web) {
          wrap[0].$el.style.backgroundColor = '#52b8f8'
          wrap[0].$el.style.borderColor ='#52b8f8'
          text1[0].$el.style.color = 'white'
          text2[0].$el.style.color ='white'
        } else {
          wrap[0].setStyle('backgroundColor', '#52b8f8')
          wrap[0].setStyle('borderColor', '#52b8f8')
          text1[0].setStyle('color', 'white')
          text2[0].setStyle('color', 'white')
        }

        this.payParms.diamondNo = diamond_no
        this.payParms.waveNumber = buy_diamond_num
      },
      // 选择支付
      checkPay(index, payType) {

        for (var i = 0; i < this.dataGrid.pay_channel_list.length; i++) {
          var wrap = this.$refs['check-img-' + i]
          if (this.web) {
            wrap[0].$el.style.backgroundImage = 'url("' +this.imgs.noCheckIcon +'")'
          } else {
            wrap[0].setAttr('src', ''+this.imgs.noCheckIcon +'')
          }
        }
        var wrap = this.$refs['check-img-' + index]

        if (this.web) {
          wrap[0].$el.style.backgroundImage = 'url("' +this.imgs.checkIcon +'")'
        } else {
          wrap[0].setAttr('src', ''+this.imgs.checkIcon +'')
        }


        this.payParms.payType = payType
      },
      // 默认选择
      defaultCheck() {
        var wrap = this.$refs['pay-row-' + 0]
        var text1 = this.$refs['pay-wave-number-' + 0]
        var text2 = this.$refs['pay-money-' + 0]
        var wrapRadio = []
        if (this.android || this.is_test) {
           wrapRadio = this.$refs['check-img-' + 0]
        }
        if (this.web) {
          wrap[0].$el.style.backgroundColor = '#52b8f8'
          wrap[0].$el.style.borderColor ='#52b8f8'
          text1[0].$el.style.color = 'white'
          text2[0].$el.style.color ='white'
          if (this.android || this.is_test) {
            wrapRadio[0].$el.style.backgroundImage = 'url("' +this.imgs.checkIcon +'")'
          }
        } else {
          wrap[0].setStyle('backgroundColor', '#52b8f8')
          wrap[0].setStyle('borderColor', '#52b8f8')
          text1[0].setStyle('color', 'white')
          text2[0].setStyle('color', 'white')
          if (this.android || this.is_test) {
            wrapRadio[0].setAttr('src', ''+this.imgs.checkIcon +'')
          }

          this.payParms.diamondNo = this.dataGrid.pay_diamondinfo_list[0].diamond_no
          this.payParms.timestamp = (new Date()).valueOf()
          if (this.is_test) {
            this.payParms.payType = 1
          } else  {
            this.payParms.payType = this.ios ? 3 : 1
          }
        }
      },
      // 去充值
      payNow() {
        var self = this
        self.payParms.timestamp = (new Date()).valueOf()
        if (self.payParms.payType === 1) { // 支付宝
          // 生成预支付交易单
          self.request({
            proxy: true,
            url: '/proxy/trans',
            data: {
              type: 'get',
              domain: 6,
              api: 4,
              method: 'json',
              param: {
                plat: self.payParms.plat,
                diamond_id: self.payParms.diamondNo,
                guid: self.payParms.timestamp,
                productType: self.payParms.productType,
                // plat: self.ios ? 'Iphone' : 'Android'
              }
            }
          }).then(res => {
            if(res.result == 1) {
              console.log(res)
              self.payParms.out_trade_no = res.data.out_trade_no
              self.payParms.orderinfo = res.data.orderinfo

              payModule.callAliPay(self.payParms.out_trade_no, self.payParms.orderinfo, function (ret) {
                if(ret.code == 1) {
                  var result = ret.result
                  var payResultStatus = ret.payResultStatus
                  var orderNo = ret.ordr_no
                  self.post({
                    proxy: true,
                    url: '/proxy/trans',
                    data: {
                      domain: 6,
                      api: 5,
                      method: 'json',
                      param: {
                        result: encodeURI(result),
                        result_status: payResultStatus,
                        out_trade_no: orderNo,
                        productType: self.payParms.productType
                      }
                    }
                  }).then(res => {
                    if (res.result == 1) {
                      var status = res.data.trade_state
                      var myDiamondNum = res.data.my_diamond_num
                      var myShellNum = res.data.my_shell_num
                      self.callBackPayStatus(status, myDiamondNum, myShellNum)
                    } else {
                      utilModule.showToast('网络不佳')
                    }
                  })
                } else {
                  self.callBackPayStatus(ret.code)
                }
              })
            }
          })
        } else if (self.payParms.payType == 2) { // 微信
          self.request({
            proxy: true,
            url: '/proxy/trans',
            data: {
              domain: 6,
              api: 6,
              method: 'json',
              param: {
                diamond_id: self.payParms.diamondNo,
                guid: self.payParms.timestamp,
                productType: self.payParms.productType,
                plat: self.payParms.plat
              }
            }
          }).then(res => {
            if (res.result == 1) {
              self.payParms.wechatTradeNo = res.data.out_trade_no
              var json = self.getWechatJson(res.data)
              payModule.callWechatPay(json)
            } else {
              utilModule.showToast('网络不佳')
            }
          })
        } else {  // 苹果

          self.request({
            proxy: true,
            url: '/proxy/trans',
            data: {
              type: 'get',
              domain: 6,
              api: 8,
              method: 'json',
              param: {
                diamond_id: self.payParms.diamondNo,
                guid: self.payParms.timestamp,
                productType: self.payParms.productType,
                plat: self.payParms.plat
              }
            }
          }).then(res => {
            if(res.result == 1) {
              self.payParms.out_trade_no = res.data.out_trade_no
              payModule.callApplePay(self.payParms.out_trade_no, self.payParms.diamondNo, function (ret) {
                if (ret.code == 1) {
                  self.callBackPayStatus(ret.code, self.dataGrid.diamond_num + self.payParms.waveNumber, ret.shellNumber)
                  /*var result = ret.result
                  var payResultStatus = ret.payResultStatus
                  var orderNo = ret.ordr_no*/
                  /*self.request({
                    proxy: true,
                    url: '/proxy/trans',
                    data: {
                      domain: 6,
                      api: 5,
                      method: 'post',
                      param: {
                        result: encodeURI(result),
                        result_status: payResultStatus,
                        out_trade_no: orderNo,
                        productType: self.payParms.productType
                      }
                    }
                  }).then(res => {
                    if (res.result == 1) {
                    var status = res.data.trade_state
                    var myDiamondNum = res.data.my_diamond_num
                    self.callBackPayStatus(status, myDiamondNum)
                  } else {
                    utilModule.showToast('网络不佳')
                  }
                })*/
                } else {
                  self.callBackPayStatus(ret.code, 0, 0)
                }
              })
            } else {
               utilModule.showToast(res.message);
            }
          })
        }
      },

      callBackPayStatus: function (status, waveNumber, shellNumber) {
        if (status == 1) {
          utilModule.showToast('支付成功')
          this.dataGrid.diamond_num = waveNumber;
          payModule.callBackPayStatus(waveNumber, shellNumber);
        } else if(status == 2) {
          utilModule.showToast('支付失败');
        } else if(status == 3) {
          utilModule.showToast('支付处理中');
        } else if(status == 4) {
          utilModule.showToast('支付取消');
        }
      },
      getWechatJson: function (data) {
        var json = '{"out_trade_no":"'+data.out_trade_no+'",'
          +'"appid":"'+data.appid+'",'
          +'"appiddes":"'+data.appiddes+'",'
          +'"partnerid":"'+data.partnerid+'",'
          +'"partneriddes":"'+data.partneriddes+'",'
          +'"prepayid":"'+data.prepayid+'",'
          +'"package":"'+data.package+'",'
          +'"noncestr":"'+data.noncestr+'",'
          +'"timestamp":"'+data.timestamp+'",'
          +'"sign":"'+data.sign+'"}';

        return json;
      },
      payCallBackWechat: function (callBackCode) {
        var self = this
        self.request({
          proxy: true,
          url: '/proxy/trans',
          data: {
            domain: 6,
            api: 7,
            method: 'json',
            param: {
              result: '',
              result_status: callBackCode,
              out_trade_no: self.payParms.wechatTradeNo,
              productType: self.payParms.productType
            }
          }
        }).then(res => {
          if (res.result == 1) {
            var status = res.data.trade_state;
            var myDiamondNum = res.data.my_diamond_num;
            var myShellNum = res.data.my_shell_num
            self.callBackPayStatus(status, myDiamondNum, myShellNum);
          } else {
            utilModule.showToast('网络不佳')
          }
        })
      }
    }
  }
</script>