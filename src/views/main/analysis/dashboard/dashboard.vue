<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <kf-card title="分类商品数量(Pie)">
          <pie-echart :pie-data="categoryGoodsCount" />
        </kf-card>
      </el-col>
      <el-col :span="10">
        <kf-card title="不同城市商品数量">
          <map-echart :map-data="addressGoodsSale" />
        </kf-card>
      </el-col>
      <el-col :span="7">
        <kf-card title="分类商品数量(Rose)">
          <rose-echart :rose-data="categoryGoodsCount" />
        </kf-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <kf-card title="分类商品销量">
          <line-echart v-bind="categoryGoodsSale" />
        </kf-card>
      </el-col>
      <el-col :span="12">
        <kf-card title="分类商品收藏数">
          <bar-echart v-bind="categoryGoodsFavor" />
        </kf-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
// hooks
import { useAnalysisStore } from '@/store'
// sub cpn
import KfCard from '@/base-ui/card'
import { PieEchart, RoseEchart, LineEchart, BarEchart, MapEchart } from '@/components/page-echarts'

const analysisStore = useAnalysisStore()
// 请求页面数据
analysisStore.getDashboardDataAction()
// 获取数据
const categoryGoodsCount = computed(() => {
  return analysisStore.categoryGoodsCount.map((item) => {
    return { name: item.name, value: item.goodsCount }
  })
})
const categoryGoodsSale = computed(() => {
  const xLabels: string[] = []
  const values: any[] = []
  const categoryGoodsSale = analysisStore.categoryGoodsSale
  for (const item of categoryGoodsSale) {
    xLabels.push(item.name)
    values.push(item.goodsCount)
  }
  return { xLabels, values }
})
const categoryGoodsFavor = computed(() => {
  const xLabels: string[] = []
  const values: any[] = []
  const categoryGoodsFavor = analysisStore.categoryGoodsFavor
  for (const item of categoryGoodsFavor) {
    xLabels.push(item.name)
    values.push(item.goodsFavor)
  }
  return { xLabels, values }
})
const addressGoodsSale = computed(() => {
  return analysisStore.addressGoodsSale.map((item) => {
    return { name: item.address, value: item.count }
  })
})
</script>

<style scoped lang="less">
.content-row {
  margin-top: 20px;
}
</style>
