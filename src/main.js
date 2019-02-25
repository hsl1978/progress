import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import './tools'
import './assets/css/index.css'
import echarts from 'echarts'

import { Swipe, SwipeItem, Lazyload, Row, Col, Card } from 'vant'
Vue.use(Swipe).use(SwipeItem)
Vue.use(Row).use(Col)
Vue.use(Card)
// options 为可选参数，无则不传
Vue.use(Lazyload)

Vue.prototype.axios = axios
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
