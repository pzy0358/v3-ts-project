<template>
    <!-- 右侧主区域 -->
    <el-main class="layout-main">
        <el-scrollbar class="layout-main-warp">
            <router-view v-slot="{Component}">
                <transition mode="out-in" name="fade-transform">
                    <keep-alive :include="['Home']">
                        <component :is="Component" />
                    </keep-alive>
                </transition>
            </router-view>
        </el-scrollbar>
    </el-main>
</template>