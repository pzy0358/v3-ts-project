<template>
  <div class="layout-header-user">
    <!-- 全屏切换-->
    <div class="layout-header-user-icon mr5" @click="toggle">
        <svg-icon v-if="!isFullscreen" name="ele-FullScreen"></svg-icon>
        <svg-icon v-else name="ele-Aim"></svg-icon>
    </div>
    <!--主题切换-->
    <div class="mr5">
      <el-switch
        v-model="active"
        active-icon="ele-Moon"
        inactive-icon="ele-Sunny"
        inline-prompt
        style="--el-switch-on-color: #333"
      ></el-switch>
    </div>
    <!--下拉菜单-->
    <el-dropdown>
      <span class="user-dropdown-link">
        <el-avatar
          class="mr3"
          :size="30"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        />
        罗军
        <svg-icon name="ele-ArrowDown"></svg-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>首页</el-dropdown-item>
          <el-dropdown-item>404</el-dropdown-item>
          <el-dropdown-item>401</el-dropdown-item>
          <el-dropdown-item divided>退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, toggle } = useFullscreen()

const active = ref<boolean>(false)
</script>

<style lang="scss" scoped></style>
