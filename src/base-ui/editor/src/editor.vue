<template>
  <div class="kf-editor">
    <div ref="toolBarRef" class="tool-bar" :style="width ? `${width}px` : '100%'"></div>
    <div ref="textContainerRef" class="text-container" :style="width ? `${width}px` : '100%'"></div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
// @王福鹏 富文本编辑器
import type Editor from 'wangeditor'
import WangEditor from 'wangeditor'

const props = withDefaults(
  defineProps<{
    modelValue?: string
    width?: number
    height?: number
    zIndex?: number
    focus?: boolean
  }>(),
  {
    modelValue: '',
    width: 0,
    height: 500,
    zIndex: 1,
    focus: false
  }
)
const emit = defineEmits(['update:modelValue'])

const toolBarRef = ref<HTMLDivElement>()
const textContainerRef = ref<HTMLDivElement>()
// 是否需要初始化内容
const isInitContent = ref(false)
// editor实时变化的内容
const content = reactive<{
  html: string
  text: string
}>({
  html: '',
  text: ''
})
// 一个editor实例
const instance = ref<Editor>()
// 声明周期
onMounted(() => {
  createWangEditor()
})
onBeforeUnmount(() => {
  if (!instance.value) return
  instance.value.destroy()
  instance.value = undefined
})

const createWangEditor = () => {
  // WangEditor的构造方法需要传入DOM Selector，此处即可使用ref
  instance.value = new WangEditor(toolBarRef.value, textContainerRef.value)
  setEditorConfig()
  instance.value.create()
  // create 之后才能初始化
  initEditorContent(props.modelValue)
}

const initEditorContent = (htmlStr: string, isFocus = false) => {
  if (!instance.value) return
  const editor = instance.value
  editor.config.focus = isFocus
  if (!htmlStr) return
  isInitContent.value = true
  editor.txt.html(htmlStr)
}

const setEditorConfig = () => {
  if (!instance.value) return
  const editor = instance.value
  // 设置编辑区域高度为 500px
  editor.config.height = props.height
  // 设置 z-index
  editor.config.zIndex = props.zIndex
  // 取消自动 focus
  editor.config.focus = props.focus
  // 配置 onchange 的回调
  editor.config.onchange = (newHtml: string) => {
    content.html = newHtml
    content.text = editor.txt.text()
    console.log(newHtml)
    // 初始值填入也会触发此回调，故排除初次重复赋值
    if (!isInitContent.value) {
      // 发射最新html值，给到父组件 Chat.vue 中的 htmlString
      emit('update:modelValue', content.html)
    }
    // 最后将是否初始值标记为 false
    isInitContent.value = false
    // 配置触发 onChange 的时间频率，默认为 200ms
    editor.config.onchangeTimeout = 500 // 修改为 500 ms
    // 配置菜单栏，删减菜单，调整顺序
    editor.config.menus = [
      'head',
      'bold',
      'fontSize',
      'fontName',
      'italic',
      'underline',
      'strikeThrough',
      'indent',
      'lineHeight',
      'foreColor',
      'backColor',
      'link',
      'list',
      // 'todo',
      'justify',
      'quote',
      // 'emoticon',
      // 'image',
      // 'video',
      // 'table',
      'code',
      'splitLine',
      'undo',
      'redo'
    ]
  }
}
</script>

<style scoped lang="less">
.kf-editor {
  margin-top: 20px;
  text-align: left;
  .tool-bar {
    border-bottom: 1px solid #ccc;
  }
  .text-container {
    height: 500px;
    padding: 15px;
  }
}
</style>
