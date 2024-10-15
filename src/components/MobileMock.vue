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
  <div class="relative mx-auto border-gray-200 dark:border-gray-700 bg-gray-200 shadow-xl"
    :style="{ borderWidth: `${14 * props.size}px`, borderRadius: `${2.5 * props.size}rem`, height: `${600 * props.size}px`, width: `${300 * props.size}px` }">
    <div class="bg-gray-200 dark:bg-gray-700 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"
      :style="{ width: `${148 * props.size}px`, height: `${18 * props.size}px`, borderBottomLeftRadius: `${props.size}rem`, borderBottomRightRadius: `${props.size}rem` }">
    </div>
    <div class="bg-gray-300 dark:bg-gray-600 absolute rounded-s-lg"
      :style="{ width: `${3 * props.size}px`, height: `${46 * props.size}px`, left: `${-17 * props.size}px`, top: `${124 * props.size}px` }">
    </div>
    <div class="bg-gray-300 dark:bg-gray-600 absolute rounded-s-lg"
      :style="{ width: `${3 * props.size}px`, height: `${46 * props.size}px`, left: `${-17 * props.size}px`, top: `${178 * props.size}px` }">
    </div>
    <div class="bg-gray-300 dark:bg-gray-600 absolute rounded-e-lg"
      :style="{ width: `${3 * props.size}px`, height: `${64 * props.size}px`, right: `${-17 * props.size}px`, top: `${142 * props.size}px` }">
    </div>

    <div class="overflow-hidden bg-white dark:bg-gray-800"
      :style="{ width: `${272 * props.size}px`, height: `${572 * props.size}px`, borderRadius: `${2 * props.size}rem` }">
      <img :src="imageUrl" alt="mobile-screen" class="dark:hidden"
        :style="{ width: `${272 * props.size}px`, height: `${572 * props.size}px` }">
      <img :src="darkImageUrl ? darkImageUrl : imageUrl" alt="mobile-screen-dark" class="hidden dark:block"
        :style="{ width: `${272 * props.size}px`, height: `${572 * props.size}px` }">
    </div>
  </div>
</template>