<template>
  <div ref="echarts" class="chart">
  </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import chartConfig from './common/echart'
import { extend } from './common/extend'
export default {
  mixins: [chartConfig],
  data () {
    return {
      type: 'line'
    }
  },
  props: {
    source: {
      type: [Object, Array],
      default: () => []
    },
    xAxis: {
      type: [Object, Array],
      default: () => []
    },
    yAxis: {
      type: [Object, Array],
      default: () => []
    },
    grid: {
      type: [Object, Array],
      default: () => []
    },
    series: {
      type: [Object, Array],
      default: () => []
    }
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
      this.myChart = echarts.init(this.$refs.echarts)
      this.myChart.setOption(extend({
        color: this.colorConfig,
        title: this.titleConfig,
        tooltip: this.tooltipConfig,
        legend: this.legendConfig,
        xAxis: this.xAxis,
        yAxis: this.yAxis,
        grid: this.grid,
        series: this.series
      }, this.configOption))
    }
  }
}
</script>
<style type="text/css">
  .chart{
    width: 100%;
    height: 100%;
  }
</style>
