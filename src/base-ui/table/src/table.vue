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
    <el-table :data="listData" border style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column v-if="showIndexColumn" type="index" label="序号" align="center" width="80" />
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center">
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    listData: any[]
    listCount: number
    propList: any[]
    showSelectColumn: boolean
    showIndexColumn: boolean
  }>(),
  {
    showSelectColumn: false,
    showIndexColumn: false
  }
)
const emit = defineEmits(['selectionChange'])
// 事件处理
const handleSelectionChange = (value: any) => {
  emit('selectionChange', value)
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
