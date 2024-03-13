<template>
  <div class="layout-header-breadcrumb">
    <svg-icon
      @click="handleCollapse"
      class="layout-header-expand-icon"
      :name="isCollapse ? 'ele-Expand' : 'ele-Fold'"
    ></svg-icon>
    <el-breadcrumb separator="/">
      <transition-group name="breadcrumb">
        <template v-for="(item, index) in breadcrumbList" :key="index">
          <el-breadcrumb-item v-if="index === breadcrumbList.length - 1">
            <span class="flex-center">
              <svg-icon
                v-if="item.meta.icon"
                :name="item.meta.icon"
                :size="14"
                class="mr5"
              ></svg-icon>
              {{ item.meta.title }}
            </span>
          </el-breadcrumb-item>
          <el-breadcrumb-item v-else :to="item.path">{{ item.meta.title }}</el-breadcrumb-item>
        </template>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>
<script setup lang="ts">
import { useLayoutConfigStore } from '../../stores/layoutConfig'

import { computed, onMounted, ref } from 'vue'
import {
  onBeforeRouteUpdate,
  type RouteLocationNormalized,
  type RouteRecordNormalized,
  useRoute
} from 'vue-router'

const route = useRoute()

const breadcrumbList = ref<RouteRecordNormalized[]>([])

const getBreadcrumb = (to: RouteLocationNormalized) => {
  const matched = to.matched.filter((item: RouteRecordNormalized) => {
    if (item.meta && item.meta.title && item.meta.isBreadcrumb !== false) {
      return item
    }
  })

  breadcrumbList.value = matched
}

onBeforeRouteUpdate((to: RouteLocationNormalized) => {
  getBreadcrumb(to)
})

onMounted(() => {
  getBreadcrumb(route)
})

const store = useLayoutConfigStore()

const isCollapse = computed(() => {
  return store.isCollapse
})

const handleCollapse = () => {
  store.isCollapse = !store.isCollapse
}
</script>

<style lang="scss" scoped></style>
