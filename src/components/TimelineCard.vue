<script setup>
const props = defineProps({
  projName: String, 
  projDate: String, 
  projBlurb: String, 
  hideLineLeft: Boolean, 
  hideLineRight: Boolean
  })

</script>

<template>
  <li class="relative">
    <!-- timeline card -->
    <div class="m-8 flex justify-center" style="height: 300px;">
      <div class="w-52 p-5 rounded-xl border-2 bg-black/50 cursor-pointer">
        <h3 class="mb-2 text-lg font-semibold">{{ props.projName }}</h3>
        <p class="font-normal text-off-white block">{{ props.projBlurb }}</p>
      </div>
    </div>

    <div class="flex items-center">
      <div class="w-full bg-off-white" :class="hideLineLeft ? 'h-0' : 'h-0.5'"></div>
      <!-- timeline indicator -->
      <div class="w-5 h-5 bg-off-white shrink-0 rotate-45 flex items-center justify-center">
        <div class="w-2 h-2 bg-dark-gray"></div>
      </div>
      <div class="w-full bg-off-white" :class="hideLineRight ? 'h-0' : 'h-0.5'"></div>
    </div>

    <div class="flex justify-center mt-5">
      <time class="block mb-2 text-sm text-white">{{ props.projDate }}</time>
    </div>
  </li>
</template>

<style scoped>

</style>