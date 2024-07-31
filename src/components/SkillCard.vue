<script>
export default {
  name: 'SkillCard',
  props: {
    imgSrcs: Array,
    imgAlt: String,
    title: String
  }
}
</script>

<template>
  <div class="bg-gray-900 rounded-lg p-5 pl-7 pr-7 flex flex-col items-center">
    <div class="flex flex-row">
      <div v-for="path in imgSrcs" class="relative w-20 h-20 mb-2">
        <img class="absolute w-full h-full" :src="path" :alt="imgAlt" />
      </div>
    </div>
    <h5 class="text-sm text-white font-medium">{{ title }}</h5>
  </div>
</template>

<style></style>