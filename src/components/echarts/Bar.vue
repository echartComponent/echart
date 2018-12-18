<template>
  <div ref="barChart" class="chart">
  </div>
</template>
<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import chartConfig from './common/echart'
import { extend } from './common/extend'
export default {
  mixins: [chartConfig],
  name: 'bar',
  data () {
    return {
      myChart: ''
    }
  },
  props: {
    barData: {}
  },
  mounted () {
    let init = new Promise((resolve) => {
      this.initChart()
      resolve()
    })
    init.then(() => {
      this.resizeWindow()
    })
  },
  methods: {
    initChart () {
      this.myChart = echarts.init(this.$refs.barChart)
      console.log(this.titleConfig)
      this.myChart.setOption(extend({
        color: this.colorConfig,
        title: this.titleConfig,
        tooltip: this.tooltipConfig,
        legend: this.legendConfig,
        xAxis: this.xAxisConfig,
        yAxis: this.yAxisConfig,
        series: this.seriesConfig
      }, this.barData))
    }
  }
}
</script>
<style scope>
  .chart{
    width: 100%;
    height: 100%;
  }
</style>
