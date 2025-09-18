<script setup lang="ts">
import { ref } from 'vue';

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
  articleLink: {
    type: String,
    required: true
  },
  originalLink: {
    type: String
  }
})

const readOriginal = ref(false);
function setReadOriginal(value: boolean) {
  readOriginal.value = value;
}
</script>

<template>
  <div class="max-w-sm bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-300 hover:scale-105">
    <img class="rounded-t-lg" :src="props.imgUrl" :alt="props.imgAlt" />
    <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{props.title}}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 hide-for-mobile">{{props.description}}</p>

        <div class="flex items-center justify-between">
          <a v-if="readOriginal" :href="props.originalLink" target="_blank">
            See Original <font-awesome-icon icon="fa-solid fa-angle-right" />
          </a>

          <router-link v-else :to="props.articleLink">
            Read Here <font-awesome-icon icon="fa-solid fa-angle-right" />
          </router-link>

          <label class="cursor-pointer">
            <input type="checkbox" :value="readOriginal" :onclick="() => setReadOriginal(!readOriginal)" class="sr-only peer">
            <div class="relative w-9 h-5 bg-dark-gray rounded-full dark:bg-light-gray peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blood-orange dark:peer-checked:bg-sky-blue"></div>
          </label>
        </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
</style>