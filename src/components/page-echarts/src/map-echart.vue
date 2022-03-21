<template>
  <div class="bar-echart">
    <base-echart :options="options" />
  </div>
</template>

<script setup lang="ts">
import { computed, withDefaults } from 'vue'
// utils
import { convertData } from '../utils/convert-data'
// sub cpn
import BaseEchart from '@/base-ui/echart'
// type
import type { IDataType } from '../types'
import type { EChartsOption } from 'echarts'

const props = withDefaults(
  defineProps<{
    title?: string
    mapData: IDataType[]
  }>(),
  {
    title: ''
  }
)

const options = computed(() => {
  return {
    backgroundColor: '#fff',
    title: {
      text: '全国销量统计',
      left: 'center',
      textStyle: {
        color: '#666',
        fontSize: 16
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: function (params: any) {
        return params.name + ' : ' + params.value[2]
      }
    },
    visualMap: {
      type: 'continuous',
      min: 0,
      max: 60000,
      left: 10,
      bottom: 0,
      calculable: true,
      text: ['高', '低'],
      inRange: {
        color: ['rgb(70, 240, 252)', 'rgb(250, 220, 46)', 'rgb(245, 38, 186)']
      },
      textStyle: {
        color: '#000'
      }
    },
    geo: {
      map: 'china',
      roam: true, // equivalent to 'move' + 'scale'
      emphasis: {
        itemStyle: {
          borderColor: 'rgb(9, 54, 95)',
          areaColor: '#f4cccc'
        }
      }
    },
    series: [
      {
        name: '销量',
        type: 'scatter', // 在地理坐标系上绘制散点图
        coordinateSystem: 'geo',
        data: convertData(props.mapData),
        symbolSize: 12, // 圆点大小
        emphasis: {
          itemStyle: {
            borderColor: '#000',
            borderWidth: 2
          }
        }
      },
      {
        type: 'map',
        map: 'china',
        geoIndex: 0,
        aspectScale: 0.75,
        tooltip: {
          show: false
        }
      }
    ]
  } as EChartsOption
})
</script>

<style scoped></style>
