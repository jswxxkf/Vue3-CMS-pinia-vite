<template>
  <div class="content-table">
    <kf-table
      v-model:page="pageInfo"
      :list-data="dataList"
      :list-count="dataCount"
      v-bind="contentTableConfig"
    >
      <template #headerOper>
        <el-button v-if="isCreate" type="primary" size="default">
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
          <el-button v-if="isUpdate" size="default" type="text">
            <el-icon class="oper-icon"><edit /></el-icon>编辑
          </el-button>
          <el-button v-if="isDelete" size="default" type="text">
            <el-icon class="oper-icon"><delete /></el-icon>删除
          </el-button>
        </div>
      </template>
      <!-- 动态具名作用域插槽，同时给父组件预留具名作用域插槽 -->
      <template v-for="item in otherPropSlots" :key="item.prop" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </kf-table>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
// hooks
import { useSystemStore } from '@/store'
import { usePermission } from '@/hooks/use-permission'
// sub cpn
import KfTable from '@/base-ui/table'
import { Delete, Edit } from '@element-plus/icons-vue'

const props = defineProps<{
  pageName: string
  contentTableConfig: any
}>()

const systemStore = useSystemStore()
// 用户按钮权限
const isCreate = usePermission(props.pageName, 'create')
const isUpdate = usePermission(props.pageName, 'update')
const isDelete = usePermission(props.pageName, 'delete')
const isQuery = usePermission(props.pageName, 'query')
// 分页信息
const pageInfo = ref({ currentPage: 1, pageSize: 10 })
// 获取页面数据逻辑
const getPageData = (queryInfo: any = {}) => {
  if (!isQuery) return
  return systemStore.getPageList(props.pageName, {
    offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
    size: pageInfo.value.pageSize,
    ...queryInfo
  })
}
getPageData()
const dataList = computed(() => systemStore.pageListData(props.pageName))
const dataCount = computed(() => systemStore.pageListCount(props.pageName))
// 侦听pageInfo的改变
watch(pageInfo, () => getPageData())
// 获取其他的动态插槽名称
const otherPropSlots = props.contentTableConfig.propList.filter((item: any) => {
  if (item.slotName === 'status') return false
  if (item.slotName === 'createAt') return false
  if (item.slotName === 'updateAt') return false
  if (item.slotName === 'oper') return false
  return true
})

defineExpose({ getPageData })
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
