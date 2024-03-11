<template>
  <svg-icon color="red" size="20" name="ele-Edit"></svg-icon>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import { getList } from '@/api/test.ts'

const color = ref<string>('red')
const size = ref<number>(10)

const list = ref()

const init = async () => {
  try {
    const res = await getList({
      current: 1,
      size: 10
    })

    console.log('res=>', res.data)
    list.value = res.data.records
  } catch (e) {
    console.log(e)
  }
}
init()
</script>

<style scoped lang="scss"></style>
