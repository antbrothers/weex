<style scoped src="../../style/subject.css"></style>
<template>
  <div class="subject-container">
    <scroller class="subject-scroller">
      <div class="subject-list" v-if="dataGrid.length > 0" v-for="items in dataGrid" @click="jump('http://hd.lvb.eastmoney.com/frontend/topic?id='+items.TopicID+'&ps=50&download=41','h5', 'no')">
        <div class="list-left">
          <image :src="items.UploadPath + items.BackPicUrl" resize="cover" class="tx-img"> </image>
        </div>
        <div class="list-middle">
          <div class="middle-top">
            <text class="top-font">{{items.TopicName}}</text>
          </div>
          <div class="middle-desc">
            <text class="desc-font">{{items.TopicIntroduce}}</text>
          </div>
          <div class="middle-bottom">
            <image :src="imgs.fireicon" resize="cover" class="fireicon"></image>
            <text class="bottom-font">{{watchCountFun(items.WatchCount)}}人参与</text>
          </div>
        </div>
        <div class="list-right">
          <image :src="imgs.righticon" resize="cover" class="right-icon"></image>
        </div>
      </div>
    </scroller>
  </div>
</template>
<script>
  import mixins from '../../mixins'
  export default {
    mixins: [mixins],
    data() {
      return {
        imgs: {
          tx: require('../../images/tx.png'),
          righticon: require('../../images/righticon.png'),
          fireicon: require('../../images/fireicon.png')
        },
        dataGrid: []
      }
    },
    created() {
      var self = this
      self.tool.SET_TITLE('为你准备的大杂烩')
      self.getData()
    },
    methods: {
      // 获取数据
      getData() {
        let self = this
        self.request({
          url: '/api/VideoTopicCollection/GetVideoTopicCollection'
        }).then(res => {
          if(res.result == 1) {
            self.dataGrid = res.data
          }
        }).catch(error => {
          console.log('caught', error.message);
        })
      },
      watchCountFun(param) {
        var num = 0
        if (param > 1000000) {
          num = (param/10000).toFixed(0) + '万'
        } else if (param > 100000) {
          num = (param/10000).toFixed(1) + '万'
        } else {
          num = param
        }
        return num
      }
    }
  }
</script>