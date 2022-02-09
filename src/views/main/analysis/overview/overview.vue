<template>
  <div class="overview">
    <kf-card title="关于此项目">
      <div>
        Vue3-CMS是基于Vue3.2(Composition API with script-setup), TypeScript, Vue Router, Pinia,
        Element-Plus, ECharts, Vite 等前端内容管理系统解决方案。
      </div>
    </kf-card>
    <kf-card title="技术栈">
      <kf-text-link :text-arr="technologyStacks" />
    </kf-card>
    <kf-card title="Git 提交规范">
      <kf-descriptions :column="1" :desc-data="descData" />
    </kf-card>
    <kf-card title="项目目录结构">
      <kf-code :code="directoryTree" />
    </kf-card>
  </div>
</template>

<script setup lang="ts">
// sub cpn
import KfCard from '@/base-ui/card'
import KfTextLink from '@/base-ui/text-link'
import KfDescriptions from '@/base-ui/descriptions'
import KfCode from '@/base-ui/code'
// config
import { technologyStacks } from './config/tech-stacks'
import { descData } from './config/desc-data'
import { directoryTree } from './config/dir-tree'
</script>

<style scoped lang="less">
.overview {
  // font-weight: 700;
  text-align: left;
  .el-card {
    margin-bottom: 20px;
    &:deep(.el-card__header span) {
      font-weight: 700;
    }
  }
  .el-description {
    &:deep(.el-descriptions__title) {
      font-weight: 400;
    }
  }
}
</style>
