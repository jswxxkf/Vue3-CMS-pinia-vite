<template>
  <div class="login-phone">
    <el-form label-width="70px" :rules="rules" :model="phone">
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="验证码" prop="verification">
        <div class="get-code">
          <el-input v-model="phone.verification" placeholder="请输入密码" />
          <el-button type="primary" class="fetch-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
// hooks
import { useUserStore } from '@/store'
// sub cpn
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus'
// template data
import { rules } from '../config/phone-config'

const userStore = useUserStore()
const phone = reactive({
  number: '',
  verification: ''
})
// handlers
const loginAction = () => {
  userStore.phoneLogin({ ...phone })
}

defineExpose({ loginAction })
</script>

<style scoped lang="less">
.get-code {
  display: flex;
  .fetch-btn {
    margin-left: 8px;
  }
}
.el-form-item {
  margin-top: 10px;
}
</style>
