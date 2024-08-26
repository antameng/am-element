<script setup lang="ts">
import type { IconProps } from "./types.ts"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { omit } from 'lodash-es'
import { computed } from "vue";

defineOptions({
  name: 'AmIcon',
  inheritAttrs: false  //把透传关了
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

<style>
@import url('./style.css');
</style>
