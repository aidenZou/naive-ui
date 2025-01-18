<markdown>
# 手动 focus & blur
</markdown>

<template>
  <n-space item-style="display: flex; align-item: center;">
    <n-button @click="handleClick">
      聚焦，一秒后失效
    </n-button>
    <n-date-picker ref="datePickerInstRef" style="width: 200px" />
  </n-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { DatePickerInst } from '@q-labs/naive-ui-plus'

export default defineComponent({
  setup () {
    const datePickerInstRef = ref<DatePickerInst | null>(null)
    return {
      handleClick () {
        datePickerInstRef.value?.focus()
        setTimeout(() => {
          datePickerInstRef.value?.blur()
        }, 1000)
      },
      datePickerInstRef
    }
  }
})
</script>
