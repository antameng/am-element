<script setup lang="ts">
import { provide, reactive, toRef } from "vue";
import type { ButtonGroupProps } from "./types.ts";
import { BUTTON_GROUP_CTX_KEY } from "./constants.ts";

defineOptions({
  name: "AmButtonGroup",
})
const props = defineProps<ButtonGroupProps>()

provide(BUTTON_GROUP_CTX_KEY, reactive({
  size: toRef(props, 'size'),
  type: toRef(props, 'type'),
  disabled: toRef(props, 'disabled'),
}))

</script>

<template>
  <div class="am-button-group">
    <slot />
  </div>
</template>

<style scoped>
@import url('./style.css');
</style>
