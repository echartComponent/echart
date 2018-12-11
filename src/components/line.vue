<template>
  <div ref="lineChart" class="chart">
  </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'

export default {
  name: 'line',
  data () {
    return {
      myChart: ''
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      this.myChart = echarts.init(this.$refs.lineChart)

      this.myChart.setOption({
        color: ['#83d0d5', '#f1cb48', '#188ae2', '#E8830B', '#7460ae', '#fc4b6c', '#31ce77', '#eae0bc', '#e732cb', '#9dce8a'],
        title: {
          text: this.title,
          left: '35',
          top: '20',
          link: this.link,
          textStyle: {
            color: '#B6B6B6'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '15%',
          bottom: '30%'
        },
        legend: {
          data: [],
          left: 'center',
          bottom: '0',
          textStyle: {
            color: '#B6B6B6'
          }
        },
        xAxis: [
          {
            type: 'category',
            position: 'bottom',
            name: '',
            nameLocation: 'center',
            nameGap: '50',
            data: [],
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#BFC2C8'
              },
              rotate: 30,
              interval: 0
            },
            axisLine: {
              lineStyle: {
                color: '#BFC2C8'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            left: '10',
            name: '',
            nameLocation: 'center',
            nameGap: '45',
            axisLine: {
              lineStyle: {
                color: '#BFC2C8'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: '#898D95'
              }
            },
            axisLabel: {
              textStyle: {
                color: '#BFC2C8'
              },
              interval: 0,
              formatter: function (value, index) {
                if (value >= 1000 && value < 10000000) {
                  value = value / 1000 + 'K'
                } else if (value >= 1000000 && value < 1000000000) {
                  value = value / 1000000 + 'M'
                } else if (value >= 1000000000) {
                  value = value / 1000000000 + 'B'
                }
                return value
              }
            }
          }
        ],
        series: []
      })
    }
  }
}
</script>
<style type="text/css">
  .chart{
    width: 300px;
    height: 300px;
  }
</style>
