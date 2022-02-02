<template>
  <div class="user">
    <kf-form v-model="formData" v-bind="searchFormConfig" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
// sub cpn
import KfForm from '@/base-ui/form'
// config
import { searchFormConfig } from './config/search.config'

const formData = reactive({
  name: '',
  realname: '',
  cellphone: '',
  enable: '',
  createAt: ''
})
</script>

<style scoped lang="less"></style>
