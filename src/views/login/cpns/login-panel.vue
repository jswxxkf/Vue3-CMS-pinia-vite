<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs v-model="currentTab" type="border-card" stretch>
      <el-tab-pane name="account">
        <template #label>
          <div class="header-pane">
            <el-icon class="icon" :size="20"><user-filled /></el-icon>
            <span>账号登录</span>
          </div>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <div class="header-pane">
            <el-icon class="icon" :size="20"><iphone /></el-icon>
            <span>手机登录</span>
          </div>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" @click="handleLoginClick">立即登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// sub cpn
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
import { Iphone, UserFilled } from '@element-plus/icons-vue'

const isKeepPassword = ref(true)
const currentTab = ref<string>('account')
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const phoneRef = ref<InstanceType<typeof LoginPhone>>()
const handleLoginClick = () => {
  if (currentTab.value === 'account') {
    accountRef.value?.loginAction(isKeepPassword.value)
  } else {
    phoneRef.value?.loginAction()
  }
}
</script>

<style scoped lang="less">
.login-panel {
  display: flex;
  flex-direction: column;
  width: 320px;
  .title {
    text-align: center;
  }
  .header-pane {
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      margin-right: 5px;
    }
  }
  .account-control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
