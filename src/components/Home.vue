<template>
  <div class="hello">
    <h2>Essential Links</h2>
    <div style="height: 400px;">
      <MapChart />
      <PieChart :optionData="pieData.map1"/>
      <PieChart :optionData="pieData.map2"/>
      <PieChart :optionData="pieData.map3"/>
      <RadarChart :optionData="radarData"/>
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
import RadarChart from '@/components/echarts/Radar.vue'
import PieChart from '@/components/echarts/Pie.vue'
import MapChart from '@/components/echarts/Map.vue'
import { datasetJson } from '@/components/echarts/mockData/dataSetData.js'
import { lineDataJson } from '@/components/echarts/mockData/lineData.js'
import { spiritDataJson } from '@/components/echarts/mockData/spiritData.js'
import { vehicleDataJson } from '@/components/echarts/mockData/vehicleData.js'
import { radarDataJson } from '@/components/echarts/mockData/radarData.js'
import { pieDataJson } from '@/components/echarts/mockData/pieData.js'
export default {
  name: 'HelloWorld',
  components: {
    LineChart,
    DataSet,
    SpiritChart,
    VehicleChart,
    RadarChart,
    PieChart,
    MapChart
  },
  data () {
    return {
      data: {},
      dataJson: datasetJson,
      spiritData: spiritDataJson,
      vehicleData: vehicleDataJson,
      radarData: radarDataJson,
      pieData: pieDataJson
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
