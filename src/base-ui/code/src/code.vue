<template>
  <div class="kf-code">
    <pre class="bg">
      <code :class="'language' + language" v-html="highlightedCode"></code>
    </pre>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

const props = withDefaults(
  defineProps<{
    language?: string
    code?: string
  }>(),
  {
    language: 'html',
    code: ''
  }
)
const highlightedCode = ref('')
watchEffect(() => {
  highlightedCode.value = hljs.highlight(props.code, {
    language: props.language
  }).value
})
</script>

<style scoped lang="less">
.kf-code {
  .bg {
    margin: 0;
    padding: 10px;
    background-color: #f0f0f0;
  }
}
</style>
