<template>
<div class="home">
  <comHeader></comHeader>
    <div id="myChart" :style="{width:'500px',height:'300px'}">
      这里是首页
    </div>
    <button disabled="disabled" class="button" @click="addList">点我存储数据</button>
  <comFooter></comFooter>
</div>
</template>

<script>
import axios from 'axios'
import comHeader from '../common/Header'
import comFooter from '../common/Footer'
export default {
  name: 'hello',
  data () {
    return {
      msg: '你好',
      list: [],
      timer: null,
      url: 'http://localhost:3000/list'
    }
  },
  created () {
    this.getInfo()
    this.timer = setInterval(() => {
      this.refresh()
    }, 1000 * 10)
  },
  methods: {
    // 图标展示
    // 定时刷新
    refresh () {
      axios.get('http://localhost:3000/list').then((res) => {
        // console.log(res.data)
        this.msg = res.data[0].msg
        console.log('更新啦' + this.msg)
      })
    },
    // 可以判断如果定时器还在运行就关闭 或者直接关闭
    destroyed () {
      clearInterval(this.timer)
    },
    // 获取数据
    getInfo () {
      axios({
        methods: 'get',
        url: this.url
      }).then((res) => {
        // console.log(res.data)
        this.list = res.data
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: { text: '图标展示' },
          tooltip: {},
          xAxis: {
            data: this.list[0].name
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: this.list[0].num
          }]
        })
        // console.log(this.list[0].name)
      })
    },
    // 添加一条固定的数据
    addList () {
      axios({
        method: 'post',
        url: this.url,
        data: this.list[0].name
      }).then(res => {
        console.log(res.data)
        this.getInfo()
      })
    }
  },
  components: {
    comHeader,
    comFooter
  }
}
</script>

<style scoped>
.button {
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 2px;
}
</style>
