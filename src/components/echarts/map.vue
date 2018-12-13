<template>
  <div ref="echarts" class="chart">
  </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/map'
import 'echarts/map/js/china'
import 'echarts/map/js/world'
import 'echarts/extension/bmap/bmap'
import chartConfig from './common/echart'
import { extend } from './common/extend'
export default {
  mixins: [chartConfig],
  data () {
    return {
      type: 'map'
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
      var data = [
        {name: '海门', value: 9},
        {name: '鄂尔多斯', value: 12},
        {name: '招远', value: 12},
        {name: '舟山', value: 12},
        {name: '齐齐哈尔', value: 14},
        {name: '盐城', value: 15},
        {name: '赤峰', value: 16},
        {name: '青岛', value: 18},
        {name: '乳山', value: 18},
        {name: '金昌', value: 19}
      ]
      var geoCoordMap = {
        '海门': [121.15, 31.89],
        '鄂尔多斯': [109.781327, 39.608266],
        '招远': [120.38, 37.35],
        '舟山': [122.207216, 29.985295],
        '齐齐哈尔': [123.97, 47.33],
        '盐城': [120.13, 33.38],
        '赤峰': [118.87, 42.28],
        '青岛': [120.33, 36.07],
        '乳山': [121.52, 36.89],
        '金昌': [102.188043, 38.520089]
      }

      var convertData = function (data) {
        var res = []
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name]
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            })
          }
        }
        return res
      }
      this.myChart = echarts.init(this.$refs.echarts)
      this.myChart.setOption(extend({
        title: this.titleConfig,
        tooltip: this.tooltipConfig,
        bmap: {
          center: [104.114129, 37.550339],
          zoom: 5,
          roam: true,
          mapStyle: {
            styleJson: [{
              'featureType': 'water',
              'elementType': 'all',
              'stylers': {
                'color': '#044161'
              }
            },
            {
              'featureType': 'land',
              'elementType': 'all',
              'stylers': {
                'color': '#004981'
              }
            },
            {
              'featureType': 'boundary',
              'elementType': 'geometry',
              'stylers': {
                'color': '#064f85'
              }
            },
            {
              'featureType': 'railway',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            },
            {
              'featureType': 'highway',
              'elementType': 'geometry',
              'stylers': {
                'color': '#004981'
              }
            },
            {
              'featureType': 'highway',
              'elementType': 'geometry.fill',
              'stylers': {
                'color': '#005b96',
                'lightness': 1
              }
            },
            {
              'featureType': 'highway',
              'elementType': 'labels',
              'stylers': {
                'visibility': 'off'
              }
            },
            {
              'featureType': 'arterial',
              'elementType': 'geometry',
              'stylers': {
                'color': '#004981'
              }
            },
            {
              'featureType': 'arterial',
              'elementType': 'geometry.fill',
              'stylers': {
                'color': '#00508b'
              }
            },
            {
              'featureType': 'poi',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            },
            {
              'featureType': 'green',
              'elementType': 'all',
              'stylers': {
                'color': '#056197',
                'visibility': 'off'
              }
            },
            {
              'featureType': 'subway',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            },
            {
              'featureType': 'manmade',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            },
            {
              'featureType': 'local',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            },
            {
              'featureType': 'arterial',
              'elementType': 'labels',
              'stylers': {
                'visibility': 'off'
              }
            },
            {
              'featureType': 'boundary',
              'elementType': 'geometry.fill',
              'stylers': {
                'color': '#029fd4'
              }
            },
            {
              'featureType': 'building',
              'elementType': 'all',
              'stylers': {
                'color': '#1a5787'
              }
            },
            {
              'featureType': 'label',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            }]
          }
        },
        series: [{
          name: 'pm2.5',
          type: 'scatter',
          data: convertData(data),
          coordinateSystem: 'bmap',
          symbolSize: function (val) {
            return val[2] / 10
          },
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: false
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: '#ddb926'
            }
          }
        }]
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
