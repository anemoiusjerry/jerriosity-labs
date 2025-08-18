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
  <div class="max-w-sm bg-off-white rounded-lg shadow-lg dark:bg-gray-800">
    <a href="#">
        <img class="rounded-t-lg" :src="props.imgUrl" :alt="props.imgAlt" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{props.title}}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{props.description}}</p>
        <!-- <router-link v-if="props.project.link != ''" :to="props.project.link" class="text-left">
          Learn More <font-awesome-icon icon="fa-solid fa-angle-right" />
        </router-link> -->
        <a :href="props.articleUrl" target="_blank" class="text-left">
          Learn More <font-awesome-icon icon="fa-solid fa-angle-right" />
        </a>
    </div>
  </div>
</template>