<template>
  <div class="kf-text-link">
    <template v-for="(item, index) in textArr" :key="index">
      <div class="item">
        <span class="title">{{ item.title }} : </span>
        <el-link type="primary">{{ item.desc }}</el-link>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    textArr?: any[]
  }>(),
  {
    textArr: () => []
  }
)
</script>

<style scoped lang="less">
.kf-text-link {
  padding: 0 15px;
  .item {
    margin: 5px;
    .title {
      position: relative;
      display: inline-block;
      margin-right: 20px;
      &::before {
        position: absolute;
        top: 40%;
        left: -15px;
        width: 5px;
        height: 5px;
        background-color: #000;
        border-radius: 100%;
        content: '';
      }
    }
  }
}
</style>
