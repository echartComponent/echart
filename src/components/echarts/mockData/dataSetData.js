export const datasetJson = {
  
  map1: {
    source: [
      ['product', '2012', '2013', '2014', '2015'],
      ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
      ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
      ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
    ],
    xAxis: {type: 'category'},
    yAxis: {gridIndex: 0},
    grid: {top: '55%'},
    series: [
      {type: 'line', smooth: true, seriesLayoutBy: 'row'},
      {type: 'line', smooth: true, seriesLayoutBy: 'row'},
      {type: 'line', smooth: true, seriesLayoutBy: 'row'},
      {type: 'line', smooth: true, seriesLayoutBy: 'row'},
      {
        type: 'pie',
        id: 'pie',
        radius: '30%',
        center: ['50%', '25%'],
        label: {
          formatter: '{b}: {@2012} ({d}%)'
        },
        encode: {
          itemName: 'product',
          value: '2012',
          tooltip: '2012'
        }
      }
    ]
  },
  map2: {
    source: [
      ['product', '2012', '2013', '2014', '2015'],
      ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
      ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
      ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
    ],
    xAxis: [
      {type: 'category', gridIndex: 0},
      {type: 'category', gridIndex: 1}
    ],
    yAxis: [
      {gridIndex: 0},
      {gridIndex: 1}
    ],
    grid: [
      {bottom: '55%'},
      {top: '55%'}
    ],
    series: [
      {type: 'bar', seriesLayoutBy: 'row'},
      {type: 'bar', seriesLayoutBy: 'row'},
      {type: 'bar', seriesLayoutBy: 'row'},
      {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
      {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
      {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
      {type: 'bar', xAxisIndex: 1, yAxisIndex: 1}
    ]
  },
  map3: {
    source: [
      ['product', '2012', '2013', '2014', '2015'],
      ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
      ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
      ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
    ],
    series:[{
      type: 'pie',
      radius: 60,
      center: ['25%', '30%']
    }, {
      type: 'pie',
      radius: 60,
      center: ['75%', '30%'],
      encode: {
        itemName: 'product',
        value: '2013'
      }
    }, {
      type: 'pie',
      radius: 60,
      center: ['25%', '75%'],
      encode: {
        itemName: 'product',
        value: '2014'
      }
    }, {
      type: 'pie',
      radius: 60,
      center: ['75%', '75%'],
      encode: {
        itemName: 'product',
        value: '2015'
      }
    }]
  }
}