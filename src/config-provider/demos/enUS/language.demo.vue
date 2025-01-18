<markdown>
# Locale
</markdown>

<template>
  <n-space vertical>
    <n-space>
      <n-button
        @click="
          () => {
            locale = null
            dateLocale = null
          }
        "
      >
        en-US
      </n-button>
      <n-button
        @click="
          () => {
            locale = zhCN
            dateLocale = dateZhCN
          }
        "
      >
        zh-CN
      </n-button>
    </n-space>
    <n-config-provider :locale="locale" :date-locale="dateLocale">
      <n-date-picker />
    </n-config-provider>
  </n-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { zhCN, dateZhCN } from '@q-labs/naive-ui-plus'
import type { NLocale, NDateLocale } from '@q-labs/naive-ui-plus'

export default defineComponent({
  setup () {
    return {
      zhCN,
      dateZhCN,
      locale: ref<NLocale | null>(null),
      dateLocale: ref<NDateLocale | null>(null)
    }
  }
})
</script>
