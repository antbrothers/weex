<style scoped src='../style/index.css'></style>
<template>
  <scroller class="account">
    <refresh @refresh="getData" :display="refreshDisplay" class="loading" v-if="!web">
      <loading-indicator class="loading-img"></loading-indicator>
    </refresh>
    <div class="account-container" v-bind:style="{ height: ios ? '1250px' : '1198px'}">
      <div class="account-head">
        <div class="account-menu account-menu-left">
          <text class="account-menu-title">浪花</text>
          <text class="account-menu-price">{{dataGrid.diamondnum}}</text>
          <text class="account-menu-btn" @click="jump(link.pay, link.type, 'pay')">充值</text>
        </div>
        <div class="account-menu">
          <text class="account-menu-title">贝壳</text>
          <text class="account-menu-price">{{dataGrid.shellnum}}</text>
          <text class="account-menu-btn account-menu-btn-right" @click="tasks()">做任务</text>
        </div>
      </div>
      <div class="line"></div>
      <div class="list-sel">
        <div class="now-mouth" @click="mouthFun()">
          <text class="font-size-comm">{{mouthes.selectMonthText}}</text>
          <image v-if="!mouthes.show" :src="imgs.downIcon"  resize="cover" class="downicon"></image>
          <image v-if="mouthes.show" :src="imgs.upIcon"  resize="cover" class="downicon"></image>
        </div>
        <div class="list-sel-right">
          <text v-bind:class="['list-sel-bord', 'font-size-comm', searchtype === 0 ? 'active': '' ]" @click="checkType(0)">浪花</text>
          <text v-bind:class="['list-sel-bk', 'font-size-comm', searchtype === 1 ? 'active': '' ]"  @click="checkType(1)">贝壳</text>
        </div>
      </div>
      <scroller class="soller-list">
        <div class="list-main" v-for="items in dataGrid.list" v-if="dataGrid.list.length > 0" >
          <div class="list-main-middle">
            <div class="middle-top">
              <image :src="imgs.gitIcon" resize="cover" class="icon-comm" v-if="items.type === 2"></image>
              <image :src="imgs.appleIcon" resize="cover" class="apple-icon-comm" v-if="items.type === 1"></image>
              <image :src="imgs.workIcon" resize="cover" class="icon-comm" v-if="items.type === 0"></image>
              <text class="font-comm list-main-middle-desc">{{items.reason}}</text>
            </div>
          </div>
          <div class="list-main-right">
            <text class="list-main-lh-number font-size-comm">{{items.money}}{{searchtypeText}}</text>
            <text class="list-main-right-font font-comm">{{items.date}}</text>
          </div>
        </div>
        <div class="next-main" v-if="pageShow">
          <text class="next-desc" @click="onloadMore">点击加载更多</text>
        </div>
        <div v-if="dataGrid.list.length == 0" class="no-data">
          <text class="no-data-desc">暂无数据</text>
        </div>
      </scroller>
      <!-- 月份弹出 begin -->
      <div class="mouth-main" v-if="mouthes.show" v-bind:style="{ bottom: !web ? '0px' : '0px'}">
        <div class="mouth-list">
          <text class="mouth-li" v-for="m in mouthes.monthList" @click="selectMonth(m.value, m.text)">{{m.text}}</text>
        </div>
      </div>
      <!-- 月份弹出 end   -->
    </div>

  </scroller>
</template>
<script>
  import mixins from '../mixins'
  var modal = weex.requireModule('modal')
  export default {
    mixins: [mixins],
    data() {
      return {
        imgs: {
          downIcon: require('../images/btn_downl.png'),
          upIcon: require('../images/btn_up.png'),
          gitIcon: require('../images/git.png'),
          workIcon: require('../images/task-1.png'),
          appleIcon: require('../images/pay_icon.png')
        },
        mouthes: {
          show: false,
          selectMonthText: '',
          selectMonthValue: '',
          monthList: [
          ]
        },
        link: {
          type: '',
          pay: ''
        },
        pageShow: false,
        searchtype: 0,  // //0：查浪花，1查贝壳
        searchtypeText: '浪花',
        pageindex: 1,             //页码
        pagesize: 50,
        dataGrid: {
          diamondnum: '',
          shellnum: '',
          list: []
        },
        refreshDisplay: 'show',
        loadingDisplay: 'show',
      }
    },
    created() {
      var self = this
      self.link.type = self.web ? 'h5' : 'weex'
      self.link.pay = self.web ? 'pay' : 'http://hd.lvb.eastmoney.com/frontend/account/product/pay.js?v=201709181754'
      self.tool.SET_TITLE('我的账户')
      self.calculateMont()
      self.getData()
    },
    methods: {
      // 获取数据
      getData() {
        let self = this
        self.refreshDisplay = 'show'
        self.request({
          type: 'get',
          proxy: true,
          url: '/proxy/trans',
          data: {
            domain: 6,
            api: 2,
            method: 'json',
            param : {
              'date': self.mouthes.selectMonthValue,          //查询月份
              'searchtype': self.searchtype,          //0：查浪花，1查贝壳
              'pageindex': self.pageindex,             //页码
              'pagesize': self.pagesize
            }
          }
        }).then(res => {
          if(res.result == 1) {
            self.refreshDisplay = 'hide'
            self.dataGrid = res.data
            if (res.count > self.pagesize * self.pageindex) {
              self.pageShow = true
            }
          } else {
            modal.alert({
              'message': res.message
            }, function () {
            })
          }
        })
      },
      mouthFun: function () {
        var self = this
        if (self.mouthes.show) {
          self.mouthes.show = false
        } else {
          self.mouthes.show = true
        }

      },
      // 选择日期
      selectMonth: function (v,t) {
        var self = this
        self.mouthes.selectMonthValue = v
        self.mouthes.selectMonthText= t
        self.mouthes.show = false
        this.getData()
      },
      // 计算日期
      calculateMont() {
        var self = this
        var onlyNum = 4 // 只显示4个月
        var d = new Date()
        var month = d.getMonth()+1
        var year = d.getFullYear()
        if (month < onlyNum) {
          if (month == onlyNum-1) { // 2月
            for (var i=0; i<onlyNum; i++) {
              var diff = month-i
              if (diff > 0) {
                self.mouthes.monthList.push({text: i == 0 ? '本月' : diff+'月', value: year+'-'+ diff })
              } else {
                self.mouthes.monthList.push({text: (year-1)+'年'+ '12' +'月', value: (year-1)+'-'+ '12'})
              }
            }
          } else { // 1月
            var lastMonth = 12
            for (var i=0;i <onlyNum; i++) {
              var diff = month-i
              if (diff > 0) {
                self.mouthes.monthList.push({text: i == 0 ? '本月' :month +'月', value: year+'-'+ month})
              } else {
                self.mouthes.monthList.push({text: (year-1)+'年'+ lastMonth +'月', value: (year-1)+'-'+ lastMonth})
                lastMonth--
              }
            }
          }
        } else {
          for (var i=0; i<onlyNum; i++) {
            var m = month-i
            self.mouthes.monthList.push({text: i == 0 ? '本月' : m +'月', value: year+'-'+ m})
          }
        }
        self.mouthes.selectMonthText = '本月'
        self.mouthes.selectMonthValue = year+'-'+ (month)
      },
      // 切换 浪花 和贝壳
      checkType(searchtype) {
        this.searchtype = searchtype
        if (searchtype === 0) {
          this.searchtypeText = '浪花'
        } else {
          this.searchtypeText = '贝壳'
        }
        this.getData()
      },
      onloadMore () {
        this.pageindex++
        this.getData()
      },
      // 做任务
      tasks() {
        var  encounter='emlive://haitunlive.com/first?params={"destClass":"shellmissionlist"}'
        this.tool.OPOEN_WEEX_NATIVE(encounter)
      }
    }
  }
</script>
