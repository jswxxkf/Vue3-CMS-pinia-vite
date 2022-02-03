<template>
  <div class="content-table">
    <kf-table :list-data="dataList" :list-count="dataCount" v-bind="contentTableConfig">
      <template #headerOper>
        <el-button type="primary" size="default">
          <span>新建{{ contentTableConfig.title.slice(0, 2) }}</span>
        </el-button>
      </template>
      <template #status="scope">
        <el-tag v-if="scope.row.enable" type="success" class="tag">已启用</el-tag>
        <el-tag v-else type="danger" class="tag">已禁用</el-tag>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #oper>
        <div class="table-oper">
          <el-button size="default" type="text">
            <el-icon class="oper-icon"><edit /></el-icon>编辑
          </el-button>
          <el-button size="default" type="text">
            <el-icon class="oper-icon"><delete /></el-icon>删除
          </el-button>
        </div>
      </template>
    </kf-table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
// hooks
import { useSystemStore } from '@/store'
// sub cpn
import KfTable from '@/base-ui/table'
import { Delete, Edit } from '@element-plus/icons-vue'

const props = defineProps<{
  pageName: string
  contentTableConfig: any
}>()

const systemStore = useSystemStore()
systemStore.getPageList(props.pageName)
const dataList = computed(() => systemStore.pageListData(props.pageName))
const dataCount = computed(() => systemStore.pageListCount(props.pageName))
</script>

<style scoped lang="less">
.content-table {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
  .tag {
    user-select: none;
  }
  .table-oper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .el-button {
      margin: 0;
    }
    .oper-icon {
      margin-right: 5px;
    }
  }
}
</style>
