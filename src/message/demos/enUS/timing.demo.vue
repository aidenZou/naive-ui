<markdown>
# Timing

Specify the duration of messages.
</markdown>

<template>
  <n-button @click="createMessage">
    Last for 5 second
  </n-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useMessage } from '@q-labs/naive-ui-plus'

export default defineComponent({
  setup () {
    const message = useMessage()
    return {
      createMessage () {
        message.info(
          "I don't know why nobody told you how to unfold your love",
          { duration: 5000 }
        )
      }
    }
  }
})
</script>
