<template>
  <el-card shadow="hover">
    <div ref="chartRef" :style="{ width: props.width, height: props.height }"></div>
  </el-card>
</template>
<script lang="ts" setup>
import { useCharts } from '@/hooks/useCharts'

let props = withDefaults(
  defineProps<{
    title?: string
    subtext?: string
    theme?: string
    bgColor?: string
    width?: string
    height?: string
    data: any[]
    xAxisData: any[]
  }>(),
  {
    width: '100%',
    height: '380px',
    data: () => [],
    xAxisData: () => []
  }
)

const option = {
  title: {
    text: props.title,
    subtext: props.subtext,
    left: 'left'
  },
  xAxis: {
    type: 'category',
    data: props.xAxisData
  },
  yAxis: {
    type: 'value'
  },
  tooltip:{
    trigger:'axis',
    axisPointer:{
      type:'shadow'
    }
  },
  series: [
    {
      data: props.data,
      type: 'bar',
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#83bff6' // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#188df0' // 100% 处的颜色
            }
          ],
          global: false // 缺省为 false
        }
      }
    }
  ]
}

const { chartRef } = useCharts({
  props,
  option
})
</script>

<style lang="scss" scoped></style>
