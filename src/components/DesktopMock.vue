<script lang="ts" setup>
const props = defineProps({
  size: {
    type: Number,
    default: 1
  },
  imageUrl: String,
  darkImageUrl: String
})
</script>

<template>
  <div class="relative mx-auto bg-gray-200 border-gray-200 dark:border-gray-700 dark:bg-gray-700 rounded-t-xl"
    :style="{borderWidth: `${16 * props.size}px`, height: `${294 * props.size}px`, maxWidth: `${512 * props.size}px`}">
    <div class="rounded-xl overflow-hidden" :style="{height: `${262 * props.size}px`}">
      <img :src="imageUrl" alt="report-desktop-image" class="dark:hidden w-auto rounded-xl"
        :style="{height: `${262 * props.size}px`}">
      <img :src="darkImageUrl ? darkImageUrl : imageUrl" alt="report-desktop-image-dark"
        class="hidden dark:block w-auto rounded-xl" :style="{height: `${262 * props.size}px`}">
    </div>
  </div>
  <div class="relative mx-auto bg-gray-400 dark:bg-gray-900 rounded-b-xl"
    :style="{height: `${42 * props.size}px`, maxWidth: `${512 * props.size}px`}"></div>
  <div class="relative mx-auto bg-gray-300 dark:bg-gray-700 rounded-b-xl"
    :style="{height: `${95 * props.size}px`, maxWidth: `${142 * props.size}px`}"></div>
</template>