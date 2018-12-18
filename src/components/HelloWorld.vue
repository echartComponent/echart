<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div style="height: 400px;">
      <BarChart :barData="barDataInfo"></BarChart>
      <Scatter :scatterData="scatterDataInfo"></Scatter>
    </div>

  </div>

</template>

<script>
import BarChart from '@/components/echarts/Bar.vue'
import MapChart from '@/components/echarts/Map.vue'
import Scatter from '@/components/echarts/Scatter.vue'
import { barData } from './echarts/mockData/barMockData.js'
export default {
  name: 'HelloWorld',
  components: {
    BarChart,
    Scatter,
    MapChart
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      barDataInfo: barData,
      scatterDataInfo: {
        backgroundColor: '#404a59',
        color: [
          '#dd4444', '#fec42c', '#80F1BE'
        ],
        legend: {
          y: 'top',
          data: ['北京', '上海', '广州'],
          textStyle: {
            color: '#fff',
            fontSize: 16
          }
        },
        grid: {
          x: '10%',
          x2: 150,
          y: '18%',
          y2: '10%'
        },
        tooltip: {
          padding: 10,
          backgroundColor: '#222',
          borderColor: '#777',
          borderWidth: 1
        },
        xAxis: {
          type: 'value',
          name: '日期',
          nameGap: 16,
          nameTextStyle: {
            color: '#fff',
            fontSize: 14
          },
          max: 31,
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#eee'
            }
          }
        },
        yAxis: {
          type: 'value',
          name: 'AQI指数',
          nameLocation: 'end',
          nameGap: 20,
          nameTextStyle: {
            color: '#fff',
            fontSize: 16
          },
          axisLine: {
            lineStyle: {
              color: '#eee'
            }
          }
        },
        mapDataInfo: {},
        data: []
      }
    }
  },
  mounted () {
    let i = 1
    let t = setInterval(() => {
      if (i % 2 === 0) {
        this.data = [820, 932, 901, 934, 1290, 1330, 1320]
      } else {
        this.data = [220, 532, 1201, 934, 190, 430, 1820]
      }
      i++
      if (i >= 5) {
        clearInterval(t)
      }
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
