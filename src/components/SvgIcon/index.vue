<template>
  <render />
</template>

<script lang="ts" setup>
import { h, resolveComponent } from 'vue'

const render = () => {
  if (props.name && props.name?.startsWith('ele-')) {
    return h(resolveComponent('el-icon'), { color: props.color, size: props.size }, () => {
      return h(resolveComponent(props.name))
    })
  } else {
    return h('i')
  }
}

const props = withDefaults(
  defineProps<{
    color?: string
    size?: string | number
    name?: string
  }>(),
  {
    name: '',
    size: 20
  }
)
</script>

<style scoped></style>
