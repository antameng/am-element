<script setup lang="ts">
import { computed, inject, ref } from 'vue';
import type { ButtonProps, ButtonInstance, ButtonEmits } from './types';
import { throttle } from 'lodash-es';
import AmIcon from '../Icon/Icon.vue'
import { BUTTON_GROUP_CTX_KEY } from './constants';
defineOptions({
  name: 'AmButton'
})
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
  useThrottle: true,
  throttleDuration: 1000,
})
const slots = defineSlots()
const emits = defineEmits<ButtonEmits>()
const iconStyle = computed(() => ({ marginRight: slots.default ? "6px" : "0px" }))
const _ref = ref<HTMLButtonElement>()

const ctx = inject(BUTTON_GROUP_CTX_KEY, void 0)
const size = computed(() => ctx?.size ?? props?.size ?? '')
const type = computed(() => ctx?.type ?? props?.type ?? '')
const disabled = computed(() => ctx?.disabled || props?.disabled || false)
const handleBtnClick = (e: MouseEvent) => emits('click', e)
const handleClickThrottle = throttle(handleBtnClick, props.throttleDuration)
defineExpose<ButtonInstance>({
  ref: _ref
})


</script>

<template>
  <component :is="tag" class="am-button" :type="tag === 'button' ? nativeType : void 0" :ref="_ref" :class="{
    [`am-button--${type}`]: type,
    [`am-button--${size}`]: size,
    'is-disabled': disabled || loading ? true : false,
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-loading': loading
  }" :autofocus="autofocus" :disable="props.disabled"
    @click="(e: MouseEvent) => useThrottle ? handleClickThrottle(e) : handleBtnClick(e)">
    <template v-if="loading">
      <slot name="loading">
        <am-icon size="1x" class="loading-icon" :icon="loadingIcon ?? 'spinner'" :style="iconStyle" spin></am-icon>
      </slot>
    </template>
    <am-icon :style="iconStyle" v-if="icon && !loading" :icon="icon"></am-icon>
    <slot></slot>
  </component>
</template>

<style scoped>
@import url('./style.css');
</style>
