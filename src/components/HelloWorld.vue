<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div style="height: 400px;">
      <BarChart :barData="barDataInfo"></BarChart>
      <LineChart :seriesData="data"></LineChart>
    </div>
  </div>
</template>

<script>
import BarChart from './bar.vue'
import LineChart from '@/components/echarts/line.vue'
export default {
  name: 'HelloWorld',
  components: {
    LineChart,
    BarChart
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      barDataInfo:{
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: '直接访问',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220]
        }]
      }
      data: []
    }
  },
  mounted () {
    let i = 1
    setInterval(() => {
      if (i % 2 === 0) {
        this.data = [820, 932, 901, 934, 1290, 1330, 1320]
      } else {
        this.data = [220, 532, 1201, 934, 190, 430, 1820]
      }
      i++
    }, 3000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
