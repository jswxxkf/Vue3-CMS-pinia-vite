<template>
  <div class="kf-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form label-width="100px">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col :span="8" v-bind="colLayout">
            <el-form-item :label="item.label" :rules="item.rules" :style="itemStyle">
              <el-input
                v-if="item.type === 'input' || item.type === 'password'"
                v-model="formData[`${item.field}`]"
                v-bind="item.otherOptions"
                :placeholder="item.placeholder"
                :show-password="item.type === 'password'"
              />
              <el-select
                v-else-if="item.type === 'select'"
                v-model="formData[`${item.field}`]"
                v-bind="item.otherOptions"
                style="width: 100%"
                :placeholder="item.placeholder"
              >
                <el-option
                  v-for="option in item.options"
                  :key="option.value"
                  :value="option.value"
                  >{{ option.title }}</el-option
                >
              </el-select>
              <el-date-picker
                v-else-if="item.type === 'datepicker'"
                v-model="formData[`${item.field}`]"
                v-bind="item.otherOptions"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CSSProperties, ref, watch } from 'vue'
// types
import { IFormItem } from '../types'

const props = withDefaults(
  defineProps<{
    modelValue: any
    labelWidth: string
    formItems: IFormItem[]
    itemStyle?: CSSProperties
    colLayout?: any
  }>(),
  {
    modelValue: () => ({}),
    labelWidth: '100px',
    formItems: () => [],
    itemStyle: () => ({ padding: '10px 40px' }),
    colLayout: () => ({
      xl: 6, // >=1920px
      lg: 8,
      md: 12, // >=992px
      sm: 24,
      xs: 24
    })
  }
)
const emit = defineEmits(['update:modelValue'])
// 表单双向绑定用
const formData = ref({ ...props.modelValue })
// 真正实现双向绑定
watch(
  formData,
  (newValue) => {
    emit('update:modelValue', newValue)
  },
  { deep: true }
)
</script>

<style scoped lang="less">
.kf-form {
  padding-top: 22px;
}
</style>
