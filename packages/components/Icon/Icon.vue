<script setup lang="ts">
import type { IconProps } from "./types.ts"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { omit } from 'lodash-es'
import { computed } from "vue";

defineOptions({
  name: 'AmIcon',
  inheritAttrs: false
})
const props = defineProps<IconProps>()

const customStyles = computed(() => ({ color: props.color ?? void 0 }))

const filterProps = computed(() => {
  return omit(props, ['type', 'color'])
})

</script>

<template>
  <i class="am-icon" :style="customStyles" :class="[`am-icon-${props.type}`]" v-bind="$attrs">
    <font-awesome-icon v-bind="filterProps" />
  </i>
</template>

<style scoped>
.am-icon {
  --am-icon-color: inherit;
  display: inline-block;
  justify-content: center;
  align-items: center;
  position: relative;
  fill: currentColor;
  color: var(--am-icon-color);
  font-size: inherit;
}

@each $val in primary, info, success, warning, danger {
  .am-icon-$(val) {
    --am-icon-color: var(--am-color-$(
        val))
  }
}
</style>
