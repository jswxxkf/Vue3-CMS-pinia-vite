<template>
  <div class="page-modal">
    <el-dialog v-model="dialogVisible" :title="title" width="30%" center destroy-on-close>
      <kf-form v-model="formData" v-bind="modalConfig"></kf-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
// hooks
import { useMainStore } from '@/store'
// sub cpn
import KfForm from '@/base-ui/form'

const props = withDefaults(
  defineProps<{
    modalConfig: any
    pageName: string
    defaultInfo?: any
    otherInfo?: any
    modelValue?: any
  }>(),
  {
    defaultInfo: () => ({}),
    otherInfo: () => ({}),
    modelValue: () => ({})
  }
)
const emit = defineEmits(['update:modelValue'])

const mainStore = useMainStore()
const title = computed(() => {
  if (Object.keys(props.defaultInfo).length) {
    return `编辑${props.modalConfig.formTitle.slice(0, 2)}`
  } else {
    return `新建${props.modalConfig.formTitle.slice(0, 2)}`
  }
})
const formData = ref<any>({})
const dialogVisible = ref(false)
// 用来做编辑时，数据的回显
watch(
  () => props.defaultInfo, // 由于已经失去响应式，故必须写为getter函数
  (newValue) => {
    for (const item of props.modalConfig.formItems) {
      formData.value[`${item.field}`] = newValue[`${item.field}`]
    }
  }
)
// 对formData的监听，需要改变父组件中双向绑定值
watch(formData, (newValue) => emit('update:modelValue', newValue), { deep: true })
// 事件处理
const handleConfirmClick = () => {
  dialogVisible.value = false
  if (Object.keys(props.defaultInfo).length) {
    // 编辑
    mainStore.editPageData(
      props.pageName,
      { ...formData.value, ...props.otherInfo },
      props.defaultInfo.id
    )
  } else {
    mainStore.createPageData(props.pageName, { ...formData.value, ...props.otherInfo })
  }
}

defineExpose({ dialogVisible })
</script>

<style scoped lang="less"></style>
