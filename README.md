# echart

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
```
组件引用前的准备：
项目需要依赖echarts 所以请先在项目里依赖echarts图表

npm install echarts -S(如果有装淘宝镜像用cnpm更快捷)

组件放在components下的echarts文件夹下

common文件夹代表这些组件的一些公用属性和方法

mockData文件夹代表组件的举例数据，传参参考

下面是具体图表详细参数说明：

    公共部分：

      1.optionData:如果需要设置图表所要传的参数，默认为空对象，根据不同图表设置不同参数，所有参数都包含在这里

      2.configOption：对象参数，具体传参参考官方文档，如果对初始配置不满意，可自行配置，此参数会最终跟options合并整合为一个参数对象初始化图表

    一.折线图

      主要数据有：

          1.legendData: legend数据

          2.xAxisData: x轴数据

          3.seriesData: series数据

    二.饼图

      主要数据有：

          1.legendData: legend数据

          2.seriesData: series数据

    三.柱状图

    四.散点图

    五.雷达图

      雷达图数据主要有：

          1.legendData： legend数据

          2.indicatorData: 雷达边和最大值的数据

          3.seriesData: series数据

    六.象形柱图(spirit和vehicle)

      1.spirit的参数主要有：

          a) symbolData: 小图片的链接
 
          b) maxData: 最大值
 
          c) seriesData: series 的数据组，参考官网

       2.vehicle的参数主要是：

          a) yAxisData: y轴数据

          b) gridLeftData: y轴字距离左边的距离

          c) legendData: legend数据

          d) seriesData: series


    七.数据集（dataset）
  
      数据集是多图的组合，根据需求，我暂时集合了折线图、饼图、柱状图，后期如果需要导入则需要新增导入新的图表

      数据集总共暴露了5个参数：

          1.sourceData: (dataset -> source) 原始数据，二维数组，具体参考官方文档或示例
  
          2.xAxisData：x轴。折线图或柱状图所需要配置的参数，具体参考官方文档或示例
  
          3.yAxisData：y轴。折线图或柱状图所需要配置的参数，具体参考官方文档或示例
  
          4.gridData:网格参数，具体参考官方文档或示例
  
          5.seriesData：系列列表。每个系列通过 type 决定自己的图表类型，具体参考官方文档或示例
  
    八.地图
    
```