<template>
  <div class="rose-echart">
    <base-echart :options="options" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseEchart from '@/base-ui/echart'
// types
import type { EChartsOption } from 'echarts'
import type { IDataType } from '../types'

const props = withDefaults(
  defineProps<{
    roseData: IDataType[]
  }>(),
  {}
)

const options = computed(() => {
  return {
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: true },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '分类商品数量',
        type: 'pie',
        radius: [10, 100],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  } as EChartsOption
})
</script>

<style scoped lang="less"></style>
