<template>
  <div class="page-search">
    <kf-form v-model="formData" v-bind="searchFormConfig">
      <template #header>
        <div class="header">高级检索</div>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button @click="handleResetClick">
            <el-icon class="icon"><refresh /></el-icon>重置
          </el-button>
          <el-button type="primary">
            <el-icon class="icon"><search /></el-icon>搜索
          </el-button>
        </div>
      </template>
    </kf-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
// sub cpn
import { Refresh, Search } from '@element-plus/icons-vue'
import KfForm from '@/base-ui/form'
import { searchFormConfig } from '@/views/main/system/role/config/search.config'

const props = defineProps<{
  searchFormConfig: any
}>()
const formItems = searchFormConfig.formItems
const formOriginData: any = {}
for (const item of formItems) {
  formOriginData[item.field] = ''
}
const formData = ref(formOriginData)
// 事件处理
const handleResetClick = () => {
  for (const key in formOriginData) {
    // 使得浅拷贝后的对象也能监听到深层变化，而不是改变原先对象的引用
    // formData.value = formOriginData
    formData.value[key] = formOriginData[key]
  }
}
</script>

<style scoped lang="less">
.header {
  margin: 0 0 20px 0;
  font-weight: 700;
  font-size: 20px;
}
.handle-btns {
  padding: 0 40px 20px 0;
  text-align: right;
  .icon {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
}
</style>
