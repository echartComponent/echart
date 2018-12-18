<template>
  <div ref="mapChart" class="chart">
  </div>
</template>
<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
export default {
  name: 'map',
  data () {
    return {
      myChart: ''
    }
  },
  props: {
    mapData: {}
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      this.myChart = echarts.init(this.$refs.mapChart)
      console.log(this.mapData)
      this.myChart.setOption(this.mapData)
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
