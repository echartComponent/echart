<template>
  <div class="hello">
    <h2>Essential Links</h2>
    <div style="height: 400px;">
      <LineChart :seriesData="data"></LineChart>
      <DataSet :source="dataJson.source" :xAxis="dataJson.map1.xAxis" :yAxis="dataJson.map1.yAxis" :grid="dataJson.map1.grid" :series="dataJson.map1.series"/>
      <DataSet :source="dataJson.source" :xAxis="dataJson.map2.xAxis" :yAxis="dataJson.map2.yAxis" :grid="dataJson.map2.grid" :series="dataJson.map2.series"/>
      <DataSet :source="dataJson.source" :series="dataJson.map3.series"/>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/echarts/line.vue'
import DataSet from '@/components/echarts/dataset.vue'
import { dataJson } from '@/components/echarts/mockData/dataSetData.js'
export default {
  name: 'HelloWorld',
  components: {
    LineChart,
    DataSet
  },
  data () {
    return {
      data: [],
      dataJson: dataJson
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
      if(i >= 5){
        clearInterval(t)
      }
    }, 3000)
  }
}
</script>

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
