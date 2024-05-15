<script setup lang="ts">
import { ref } from 'vue';
import type { ButtonProps, ButtonInstance, ButtonEmits } from './types';
import { throttle } from 'lodash-es';
defineOptions({
  name: 'AmButton'
})
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
  useThrottle: true,
  throttleDuration: 1000
})
const slots = defineSlots()
const emits = defineEmits<ButtonEmits>()

const _ref = ref<HTMLButtonElement>()

const handleBtnClick = (e: MouseEvent) => emits('click', e)
const handleClickThrottle = throttle(handleBtnClick, props.throttleDuration)
defineExpose<ButtonInstance>({
  ref: _ref
})


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
  }" :disable="props.disabled" @click="(e: MouseEvent) => useThrottle ? handleClickThrottle(e) : handleBtnClick(e)">
    <slot></slot>
  </component>
</template>

<style scoped>
@import url('./style.css');
</style>
