<template>
    <!-- 左侧菜单区域 -->
    <el-aside class="layout-aside-menu-200 layout-aside">
        <Logo></Logo>
        <vertcialMenu></vertcialMenu>
    </el-aside>
</template>
<script setup lang="ts">
import {defineAsyncComponent} from 'vue'

const Logo = defineAsyncComponent(() => import('./logo.vue'))
const vertcialMenu = defineAsyncComponent(() => import('./vertcialMenu.vue'))
</script>

<style lang="scss" scoped>

</style>