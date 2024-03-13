<template>
  <!-- 左侧菜单区域 -->
  <el-aside
    class="layout-aside"
    :class="isCollapse ? 'layout-aside-menu-60' : 'layout-aside-menu-200'"
  >
    <Logo></Logo>
    <vertcialMenu></vertcialMenu>
  </el-aside>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { computed } from 'vue'
import { useLayoutConfigStore } from '@/stores/layoutConfig'

const store = useLayoutConfigStore()

const isCollapse = computed(() => {
  return store.isCollapse
})

const Logo = defineAsyncComponent(() => import('./logo.vue'))
const vertcialMenu = defineAsyncComponent(() => import('./vertcialMenu.vue'))
</script>

<style lang="scss" scoped></style>
