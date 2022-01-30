<template>
  <div class="login-account">
    <el-form ref="formRef" label-width="60px" :rules="rules" :model="account">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" type="password" placeholder="请输入密码" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
// hooks
import { useRouter } from 'vue-router'
// template data
import { rules } from '../config/account-config'

const router = useRouter()
const account = reactive({
  name: '',
  password: ''
})
const formRef = ref<InstanceType<typeof ElForm>>()
const loginAction = () => {
  formRef.value?.validate((isValid) => {
    if (isValid) {
      // 真正执行登录逻辑的地方
      router.push('/main')
    }
  })
}

defineExpose({ loginAction })
</script>

<style scoped lang="less"></style>
