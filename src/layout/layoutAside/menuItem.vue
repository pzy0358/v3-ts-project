<template>
    <template v-for="(item, index) in data" :key="index">
      <el-menu-item v-if="!item.children || !item.children.length" :index="item.path">
        <svg-icon :name="item.meta.icon"></svg-icon>
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
      <el-sub-menu v-if="item.children && item.children.length" :index="item.path">
        <template #title>
          <svg-icon :name="item.meta.icon"></svg-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <MenuItem :data="item.children"></MenuItem>
      </el-sub-menu>
    </template>
  </template>
<script setup lang="ts">
import type {MenuItemType} from './types/verticalMenuType'

defineProps<{
   data: MenuItemType[]
}>()
</script>

<style lang="scss" scoped></style>