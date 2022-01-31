<template>
  <div class="login-account">
    <el-form ref="formRef" label-width="60px" :rules="rules" :model="account">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password placeholder="请输入密码" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
// sub cpn
import { ElForm, ElFormItem, ElInput } from 'element-plus'
// hooks
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store'
// utils
import localCache from '@/utils/cache'
// constants
import { USER_NAME, PASSWORD } from '@/constants/cache_keys'
// template data
import { rules } from '../config/account-config'

const router = useRouter()
const userStore = useUserStore()
const account = reactive({
  name: localCache.getCache(USER_NAME) || '',
  password: localCache.getCache(PASSWORD) || ''
})
const formRef = ref<InstanceType<typeof ElForm>>()
// handlers
const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate((isValid) => {
    if (isValid) {
      // 真正执行登录逻辑的地方
      // 1.判断是否需要记住密码
      if (isKeepPassword) {
        // 本地缓存
        localCache.setCache(USER_NAME, account.name)
        localCache.setCache(PASSWORD, account.password)
      } else {
        localCache.deleteCache(USER_NAME)
        localCache.deleteCache(PASSWORD)
      }
      // 2.开始登录验证
      userStore.accountLogin({ ...account })
    }
  })
}

defineExpose({ loginAction })
</script>

<style scoped lang="less">
.el-form-item {
  margin-top: 10px;
}
</style>
