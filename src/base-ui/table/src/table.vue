<template>
  <div class="kf-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
      </slot>
    </div>
    <div class="header-oper">
      <slot name="headerOper"></slot>
    </div>
    <el-table
      :data="listData"
      border
      style="width: 100%"
      v-bind="childrenProps"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column v-if="showIndexColumn" type="index" label="序号" align="center" width="80" />
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div v-if="showFooter" class="footer">
      <slot name="footer">
        <el-pagination
          :page-size="page.pageSize"
          :current-page="page.currentPage"
          :total="listCount"
          background
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IPageInfo } from '../types/type'

const props = withDefaults(
  defineProps<{
    title: string
    listData: any[]
    listCount: number
    propList: any[]
    showSelectColumn: boolean
    showIndexColumn: boolean
    page: IPageInfo
    childrenProps?: any
    showFooter?: boolean
  }>(),
  {
    showSelectColumn: false,
    showIndexColumn: false,
    page: () => ({ currentPage: 1, pageSize: 10 }),
    childrenProps: () => ({}),
    showFooter: true
  }
)
const emit = defineEmits(['selectionChange', 'update:page'])
// 事件处理
const handleSelectionChange = (value: any) => {
  emit('selectionChange', value)
}
const handleSizeChange = (pageSize: number) => {
  emit('update:page', { ...props.page, pageSize })
}
const handleCurrentChange = (currentPage: number) => {
  emit('update:page', { ...props.page, currentPage: currentPage })
}
</script>

<style scoped lang="less">
.kf-table {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    margin-bottom: 20px;
    .title {
      font-weight: 700;
      font-size: 20px;
    }
  }
  .header-oper {
    position: absolute;
    top: 10px;
    right: 0;
  }
  .footer {
    align-self: flex-end;
    margin-top: 15px;
  }
}
</style>
