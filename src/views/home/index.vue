<script lang="ts" name="Home" setup>
import { defineAsyncComponent, ref } from 'vue'
import { getCategorySalesApi, getTopApi } from '../../api/home'
import type { CategoryResType} from '../../types/home'

import staticBlock from './components/staticBlock.vue'
const pieChart = defineAsyncComponent(() => import('../../components/chart/pieChart.vue'))
const barChart = defineAsyncComponent(() => import('../../components/chart/barChart.vue'))
const gaugeChart = defineAsyncComponent(() => import('../../components/chart/gaugeChart.vue'))


const categoryData = ref<CategoryResType[]>([])
const loadCategoryData = async () => {
  try {
    const { data } = await getCategorySalesApi()
    categoryData.value = data
  } catch (e) {
    console.log(e)
  }
}
loadCategoryData()

// 获取会员消费数据

// const topData = ref<TopResType[]>([])
// x轴数据
const xAxisData = ref<string[]>([])
// y轴数据
const ydata = ref<number[]>([])

const LoadTopData = async () => {
  try {
    const { data } = await getTopApi()
    let nameArr = []
    let valueArr = []
    // topData.value = data
    // xAxisData.value = data.map((item) => item.name)
    // ydata.value = data.map((item) => item.consumeMoney)
    data.forEach((item)=>{
    nameArr.push(item.name)
    valueArr.push(item.consumeMoney)
    })
    xAxisData.value = nameArr
    ydata.value = valueArr
    console.log(xAxisData.value,ydata.value)
  } catch (e) {
    console.log(e)
  }
}
LoadTopData()
</script>

<template>
  <div>
    <staticBlock></staticBlock>
    <!-- 分类销售统计 -->
    <el-row :gutter="20">
      <el-col class="mb15" :lg="9" :md="11" :sm="24" :xs="24">
        <pieChart
        v-if="categoryData.length>0"
          :data="categoryData"
          title="分类销售统计"
          subtext="每种商品分类的近30天销售额"
          theme=""
        />
      </el-col>
      <el-col class="mb15" :lg="15" :md="13" :sm="24" :xs="24">
        <el-card shadow="hover"> 30天趋势 </el-card>
      </el-col>
    </el-row>
    <!-- 会员消费与气温仪表盘 -->
    <el-row :gutter="20">
      <el-col class="mb15" :lg="15" :md="13" :sm="24" :xs="24">
        <!-- 柱状图 -->
        <barChart
        v-if="xAxisData.length>0&&ydata.length>0"
          :data="ydata"
          :xAxisData="xAxisData"
          title="会员消费TOP10"
          subtext="单位:元"
          theme=""
        ></barChart>
      </el-col>
      <el-col class="mb15" :lg="9" :md="11" :sm="24" :xs="24">
        <gaugeChart title="气温仪表盘℃" :data="38"></gaugeChart>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped></style>
