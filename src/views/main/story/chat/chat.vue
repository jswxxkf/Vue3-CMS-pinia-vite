<template>
  <div class="chat">
    <kf-editor v-model="htmlString" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// sub cpn
import KfEditor from '@/base-ui/editor'

const htmlString = ref('<b>Kaifeng Xue</b>正在聆听你的故事哦~~')
</script>

<style scoped lang="less"></style>
