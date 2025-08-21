<script setup lang="ts">
const props = defineProps({
  imgUrl: {
    type: String,
    default: ''
  },
  imgAlt: {
    type: String,
    default: 'card image'
  },
  title: {
    type: String,
    default: 'Stay Tuned'
  },
  description: {
    type: String,
    default: 'More content coming soon!'
  },
  articleUrl: {
    type: String,
    default: '#'
  }
})
</script>

<template>
  <a :href="props.articleUrl" target="_blank" class="max-w-sm bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-300 hover:scale-105">
    <img class="rounded-t-lg" :src="props.imgUrl" :alt="props.imgAlt" />
    <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{props.title}}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 hide-for-mobile">{{props.description}}</p>
        <span class="text-left">
          Learn More <font-awesome-icon icon="fa-solid fa-angle-right" />
        </span>
    </div>
  </a>
</template>

<style lang="scss" scoped>
</style>