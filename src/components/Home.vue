<template>
  <div class="hello">
    <h2>Essential Links</h2>
    <div style="height: 400px;">
      <VehicleChart :optionData="vehicleData"/>
      <SpiritChart :optionData="spiritData"/>
      <LineChart :optionData="data"/>
      <DataSet :optionData="dataJson.map1"/>
      <DataSet :optionData="dataJson.map2"/>
      <DataSet :optionData="dataJson.map3"/>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/echarts/Line.vue'
import DataSet from '@/components/echarts/Dataset.vue'
import SpiritChart from '@/components/echarts/Spirit.vue'
import VehicleChart from '@/components/echarts/Vehicle.vue'
import { datasetJson } from '@/components/echarts/mockData/dataSetData.js'
import { lineDataJson } from '@/components/echarts/mockData/lineData.js'
import { spiritDataJson } from '@/components/echarts/mockData/spiritData.js'
import { vehicleDataJson } from '@/components/echarts/mockData/vehicleData.js'
export default {
  name: 'HelloWorld',
  components: {
    LineChart,
    DataSet,
    SpiritChart,
    VehicleChart
  },
  data () {
    return {
      data: {},
      dataJson: datasetJson,
      spiritData: spiritDataJson,
      vehicleData: vehicleDataJson
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
      if (i >= 5) {
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
