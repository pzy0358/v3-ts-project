<template>
    <el-container class="layout-container">
    <!--左侧菜单区域-->
    <LayoutAside></LayoutAside>
    <el-container direction="vertical">
      <!--右侧头部区域-->
      <LayoutHeader></LayoutHeader>
      <!--右侧主区域-->
      <LayoutMain></LayoutMain>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import {defineAsyncComponent} from 'vue'

const LayoutAside = defineAsyncComponent(() => import('./layoutAside/index.vue'))
const LayoutHeader = defineAsyncComponent(() => import('./layoutHeader/index.vue'))
const LayoutMain = defineAsyncComponent(() => import('./layoutMain/index.vue'))
</script>

<style lang="scss" scoped></style>