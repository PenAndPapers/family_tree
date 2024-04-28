import { computed, ref } from 'vue'
import * as echarts from 'echarts'

export function useInitChart(data: Object, imgName: string, imgPath: string) {
  const imgUrl = ref(new URL(imgPath, import.meta.url).href)

  const chartOption = computed(() => {
    return {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
        formatter: function (params: any) {
          if (!params.data.details) return ''

          const details = params.data.details

          if (Object.prototype.hasOwnProperty.call(details, 'wife')) {
            return `Wife: ${details.wife}`
          } else if (Object.prototype.hasOwnProperty.call(details, 'husband'))
            return `Husband: ${details.husband}`
          return '-'
        }
      },
      toolbox: {
        itemSize: 20,
        feature: {
          saveAsImage: {
            type: 'png',
            // type: 'svg',
            name: imgName,
            backgroundColor: '#ffffff',
            show: true
          },
          dataZoom: {
            show: true
          },
          dataView: {
            show: true
          },
          restore: {
            show: true
          }
        }
      },
      series: [
        {
          type: 'tree',
          data: [data],
          top: '1%',
          left: '3%',
          bottom: '1%',
          right: '5%',
          symbolSize: 18,
          edgeShape: 'polyline',
          edgeForkPosition: '63%',
          lineStyle: {
            color: '#777777'
          },
          label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 25,
            fontWeight: '600'
          },
          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left'
            }
          },
          emphasis: {
            focus: 'descendant'
          },
          expandAndCollapse: true,
          animationDuration: 200,
          animationDurationUpdate: 200
        }
      ]
    }
  })

  const autoScroll = () => {
    setTimeout(() => {
      const main = document.getElementById('main')
      main?.scrollIntoView({ block: 'center' })

      const scrollHeight = main?.scrollHeight as number
      const scrollWidth = main?.scrollWidth as number

      window.scrollTo({
        top: scrollHeight / 0,
        left: scrollWidth / 2
      })
    })
  }

  const initChart = () => {
    // const treeChart = echarts.init(document.getElementById('main'), null, { renderer: 'svg' })
    const treeChart = echarts.init(document.getElementById('main'))

    // Display the chart using the configuration items and data just specified.
    treeChart.setOption(chartOption.value)
    autoScroll()
  }

  return {
    chartOption,
    autoScroll,
    initChart,
    imgUrl
  }
}
