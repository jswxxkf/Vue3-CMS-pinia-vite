<template>
  <div class="bar-echart">
    <base-echart :options="options" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import * as echarts from 'echarts'
// sub cpn
import BaseEchart from '@/base-ui/echart'
// types
import type { EChartsOption } from 'echarts'

const props = withDefaults(
  defineProps<{
    title?: string
    xLabels: string[]
    values: any[]
  }>(),
  {
    title: ''
  }
)

const options = computed(() => {
  return {
    xAxis: {
      data: props.xLabels,
      axisLabel: {
        inside: false,
        color: '#000'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: true
      },
      axisTick: {
        show: true
      },
      axisLabel: {
        color: '#999'
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      {
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        },
        data: props.values
      }
    ]
  } as EChartsOption
})
</script>

<style scoped></style>
