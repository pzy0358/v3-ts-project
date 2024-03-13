<template>
  <div class="layout-logo">
    <img src="../../assets/logo.png" alt="" class="logo" />
    <span v-if="!isCollapse">积云-后台管理系统</span>
  </div>
</template>
<script setup lang="ts">
import { useLayoutConfigStore } from '../../stores/layoutConfig'
import { computed } from 'vue'

const store = useLayoutConfigStore()

const isCollapse = computed(() => {
  return store.isCollapse
})
</script>
<style lang="scss" scoped>
.logo {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
}
</style>
