<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div style="height: 400px;">
      <LineChart :seriesData="data"></LineChart>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/echarts/line.vue'
export default {
  name: 'HelloWorld',
  components: {
    LineChart
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: []
    }
  },
  mounted () {
    let i = 1
    setInterval(() => {
      if (i % 2 === 0) {
        this.data = [820, 932, 901, 934, 1290, 1330, 1320]
      } else {
        this.data = [220, 532, 1201, 934, 190, 430, 1820]
      }
      i++
    }, 3000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
