<script setup lang="ts">
import { ref } from 'vue';
import type { ButtonProps } from './types';

defineOptions({
  name: 'AmButton'
})
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',

})
const slots = defineSlots()
const _ref = ref<HTMLButtonElement>()
</script>

<template>
  <component :is="props.tag" class="am-button" :type="tag === 'button' ? nativeType : void 0" :ref="_ref" :class="{
    [`am-button--${type}`]: type,
    [`am-button--${size}`]: size,
    'is-disabled': disabled || loading ? true : false,
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-loading': loading
  }" :disable="props.disabled">
  <slot></slot>
  </component>
</template>

<style scoped></style>
