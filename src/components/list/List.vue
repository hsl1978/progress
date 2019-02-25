<template>
  <div class="list">
    <comHeader></comHeader>
    这里是列表页
    <van-row>
      <van-col span="4">span: 8</van-col>
      <van-col span="20" style="background-color:red">span: 8</van-col>
      <!-- <van-col span="8">span: 8</van-col> -->
    </van-row>
    <van-card
      v-for="item in list"
      :key="item.id"
      num="2"
      price="2.00"
      :desc="item.desc"
      :title="item.title"
      :thumb="item.imageURL"
      origin-price="10.00"
    />
    <comFooter></comFooter>
  </div>
</template>

<script>
import comHeader from '../common/Header'
import comFooter from '../common/Footer'
export default {
  components: {
    comHeader,
    comFooter
  },
  data () {
    return {
      list: [
        {
          imageURL: 'http://localhost:8080/static/1.jpg',
          desc: '好再来洗发露，无没发呢南昌市精神病是人才就开始',
          title: '洗发露'
        },
        {
          imageURL: 'http://localhost:8080/static/2.jpg',
          desc: '三只松鼠零食大礼包，每天都要有好的心情哟',
          title: '三只松鼠零食大礼包'
        }
      ]
    }
  }
}
</script>

<style>
.van-col {
  background-color: blue;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
</style>
