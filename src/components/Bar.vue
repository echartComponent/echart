<template>
	<div ref="barChart" class="chart">
  </div>
</template>
<script>
	import echarts from 'echarts/lib/echarts'
	import 'echarts/lib/chart/bar'
	export default {
  name: 'bar',
  data () { 	
    return {
      myChart: '',
      ass:'aaa'
    }
  },
  props: {
    barData: {}
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      this.myChart = echarts.init(this.$refs.barChart)
      console.log(this.barData)
      this.myChart.setOption(this.barData)
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