<script lang="ts" setup>
const props = defineProps({
  images: {
    type: Array<string>,
    default: []
  }
})
</script>

<template>
  <div id="default-carousel" class="z-0 relative w-full" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-full overflow-hidden rounded-lg">
      <div v-for="(url, index) in props.images" class="hidden duration-700 ease-in-out" data-carousel-item>
        <img :src="url" :alt="`carousel image ${index}`"
          class="absolute block h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
      </div>
    </div>

    <!-- Slider indicators -->
    <div class="z-30 absolute flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
      <button v-for="(url, index) in props.images" type="button" class="w-3 h-3 rounded-full" aria-current="true"
        :aria-label="`Slide ${index}`" :data-carousel-slide-to="index"></button>
    </div>
  </div>
</template>