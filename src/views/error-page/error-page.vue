<template>
  <div class="error-page">
    <h2>
      <span class="error-msg">{{ msg }}</span>
      <span>您可尝试重新登录: <router-link to="/login">Click Here</router-link></span>
    </h2>
  </div>
</template>

<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router'

const msg = useRoute().query.msg
</script>

<style scoped lang="less">
.error-page {
  display: flex;
  align-items: center;
  justify-content: center;
  .error-msg {
    margin-right: 10px;
  }
}
</style>
