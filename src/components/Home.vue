<template>
  <div class="hello">
    <h2>Essential Links</h2>
    <div style="height: 400px;">
      <LineChart :optionData="data"></LineChart>
      <DataSet :optionData="dataJson.map1"/>
      <DataSet :optionData="dataJson.map2"/>
      <DataSet :optionData="dataJson.map3"/>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/echarts/line.vue'
import DataSet from '@/components/echarts/dataset.vue'
import { datasetJson } from '@/components/echarts/mockData/dataSetData.js'
import { lineDataJson } from '@/components/echarts/mockData/lineData.js'
export default {
  name: 'HelloWorld',
  components: {
    LineChart,
    DataSet
  },
  data () {
    return {
      data: {},
      dataJson: datasetJson,
      legendData: ['第一条']
    }
  },
  mounted () {
    let i = 1
    let t = setInterval(() => {
      if (i % 2 === 0) {
        this.data = lineDataJson.data1
      } else {
        this.data = lineDataJson.data2
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
