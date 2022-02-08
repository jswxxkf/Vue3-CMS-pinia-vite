import * as echarts from 'echarts'
// 注册地图数据
import chinaMapData from '../data/china.json'
echarts.registerMap('china', chinaMapData)

export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el, 'light', {
    renderer: 'svg'
  })
  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }
  const updateSize = () => {
    echartInstance.resize()
  }
  // 随窗口自适应调整宽度
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })
  return {
    updateSize,
    echartInstance,
    setOptions
  }
}
