<script setup>
const props = defineProps({
  projName: String,
  projDate: String,
  projBlurb: String
});
</script>

<template>
  <li class="relative">
    <div class="flex items-center">
      <!-- timeline icon -->
      <div class="z-10 flex items-center justify-center w-6 h-6 bg-white rounded-full shrink-0"></div>
      <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
    </div>


    <div class="mt-3 sm:pe-8 w-96" style=" height: 200px;">
      <div class="w-48 p-2 rounded-lg hover:border cursor-pointer">
        <h3 class="text-lg font-semibold text-sand">{{ props.projName }}</h3>
      <time class="block mb-2 text-sm font-normal leading-none text-white">{{ props.projDate }}</time>
      <p class="font-normal text-gray-500 block">{{ props.projBlurb }}</p>
      </div>


    </div>

  </li>
</template>

<style scoped></style>