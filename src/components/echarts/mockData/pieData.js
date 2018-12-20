export const pieDataJson = {
  map1: {
    title: '南丁格尔玫瑰图',
    legendData: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8'],
    seriesData: [{
      name: '半径模式',
      type: 'pie',
      radius: [20, 110],
      center: ['25%', '50%'],
      roseType: 'radius',
      label: {
        normal: {
          show: true
        },
        emphasis: {
          show: true
        }
      },
      lableLine: {
        normal: {
          show: true
        },
        emphasis: {
          show: true
        }
      },
      data: [
        {value: 10, name: 'rose1'},
        {value: 5, name: 'rose2'},
        {value: 15, name: 'rose3'},
        {value: 25, name: 'rose4'},
        {value: 20, name: 'rose5'},
        {value: 35, name: 'rose6'},
        {value: 30, name: 'rose7'},
        {value: 40, name: 'rose8'}
      ]
    }, {
      name: '面积模式',
      type: 'pie',
      radius: [30, 110],
      center: ['75%', '50%'],
      roseType: 'area',
      data: [
        {value: 10, name: 'rose1'},
        {value: 5, name: 'rose2'},
        {value: 15, name: 'rose3'},
        {value: 25, name: 'rose4'},
        {value: 20, name: 'rose5'},
        {value: 35, name: 'rose6'},
        {value: 30, name: 'rose7'},
        {value: 40, name: 'rose8'}
      ]
    }]
  },
  map2: {
    title: '饼图',
    legendData: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8'],
    seriesData: [{
      name: '姓名',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      data: [
        {value: 10, name: 'rose1'},
        {value: 5, name: 'rose2'},
        {value: 15, name: 'rose3'},
        {value: 25, name: 'rose4'},
        {value: 20, name: 'rose5'},
        {value: 35, name: 'rose6'},
        {value: 30, name: 'rose7'},
        {value: 40, name: 'rose8'}
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  },
  map3: {
    title: '嵌套环形图',
    legendData: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他'],
    seriesData: [{
      name: '访问来源',
      type: 'pie',
      radius: [0, '30%'],
      label: {
        normal: {
          position: 'inner'
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        {value: 335, name: '直达'},
        {value: 679, name: '营销广告'},
        {value: 1548, name: '搜索引擎'}
      ]
    }, {
      name: '访问来源',
      type: 'pie',
      radius: ['40%', '55%'],
      label: {
        normal: {
          formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}',
          backgroundColor: '#eee',
          borderColor: '#aaa',
          borderWidth: 1,
          borderRadius: 4,
          rich: {
            a: {
              color: '#999',
              lineHeight: 22,
              align: 'center'
            },
            hr: {
              borderColor: '#aaa',
              width: '100%',
              borderWidth: 0.5,
              height: 0
            },
            b: {
              fontSize: 16,
              lineHeight: 33
            },
            per: {
              color: '#eee',
              backgroundColor: '#334455',
              padding: [2, 4],
              borderRadius: 2
            }
          }
        }
      },
      data: [
        {value: 335, name: '直达'},
        {value: 310, name: '邮件营销'},
        {value: 234, name: '联盟广告'},
        {value: 135, name: '视频广告'},
        {value: 1048, name: '百度'},
        {value: 251, name: '谷歌'},
        {value: 147, name: '必应'},
        {value: 102, name: '其他'}
      ]
    }]
  }
}
