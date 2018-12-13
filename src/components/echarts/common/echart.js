export default {
  props: {
    title: {
      type: String,
      default: '标题'
    },
    seriesData: {
      type: [Object, Array],
      default: () => [820, 932, 901, 934, 1290, 1330, 1320]
    },
    xAxisData: {
      type: [Object, Array],
      default: () => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxisData: {
      type: [Object, Array],
      default: () => []
    },
    configOption: {
      type: [Object, Array],
      default: () => ({})
    }
  },
  data () {
    return {
      myChart: '',
      colorConfig: ['#83d0d5', '#f1cb48', '#188ae2', '#E8830B', '#7460ae', '#fc4b6c', '#31ce77', '#eae0bc', '#e732cb', '#9dce8a'],
      titleConfig: {
        text: this.title,
        left: 'center',
        top: '20',
        textStyle: {
          color: '#333'
        }
      },
      tooltipConfig: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legendConfig: {
        data: [],
        left: 'center',
        bottom: '0',
        textStyle: {
          color: '#B6B6B6'
        }
      },
      xAxisConfig: [
        {
          type: 'category',
          position: 'bottom',
          name: '',
          nameLocation: 'center',
          nameGap: '50',
          data: this.xAxisData,
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
      yAxisConfig: [
        {
          type: 'value',
          left: '0',
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
      seriesConfig: [{
        data: this.seriesData,
        type: this.type || 'line',
        smooth: true
      }]
    }
  },
  watch: {
    seriesData: function (data) {
      this.seriesConfig[0].data = this.seriesData
      this.initChart()
    },
    xAxisData: function (data) {
      this.xAxisConfig[0].data = this.xAxisData
      this.initChart()
    },
    yAxisData: function (data) {
      this.yAxisConfig[0].data = this.yAxisData
      this.initChart()
    }
  },
  methods: {
    resizeChart () {
      this.myChart.resize()
    },
    resizeWindow () {
      let that = this
      window.addEventListener('resize', function () {
        that.myChart.resize()
      })
    }
  },
  destroyed () {
    this.myChart.clear()
  }
}
