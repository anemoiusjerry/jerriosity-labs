<script setup lang="ts">
import { computed, CSSProperties } from 'vue'
import { ProjectInfo } from '../interfaces';
import FlipCard from './FlipCard.vue';

const props = defineProps<{
  project: ProjectInfo,
  hideLineLeft: Boolean,
  hideLineRight: Boolean
}>()

const cardStyle: CSSProperties = {
  height: '18em',
  width: '13em',
  borderRadius: '1em',
  borderWidth: '3px',
  margin: '1.5em'
}

const frontfaceStyle = computed<CSSProperties>(() => ({
  ...cardStyle,
  backgroundImage: `url("${props.project.image}")`,
  backgroundSize: 'cover'
}))

const backfaceStyle = computed<CSSProperties>(() => ({
  ...cardStyle,
  display: 'flex',
  flexDirection: 'column' as 'column',
  justifyContent: 'space-between',
  transform: 'rotateY(-180deg)',
  position: 'absolute' as 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  padding: '1.5em'
}))
</script>

<template>
  <!-- timeline card -->
  <li>
    <flip-card frontClass="border-dark-gray" backClass="border-dark-gray" 
    :frontStyle="frontfaceStyle" :backStyle="backfaceStyle">
      <template #front-face>
        <div>
        </div>
      </template>
      <template #back-face>
        <div>
          <span class="mb-2 text-lg font-bold">{{ props.project.title }}</span>
          <p class="font-normal block text-dark-gray dark:text-off-white">{{ props.project.summary }}</p>
        </div>
        <router-link v-if="props.project.link != ''" :to="props.project.link" class="text-left">
          Learn More <font-awesome-icon icon="fa-solid fa-angle-right" />
        </router-link>
      </template>
    </flip-card>

    <div class="flex items-center">
      <div class="w-full bg-dark-gray dark:bg-off-white" :class="hideLineLeft ? 'h-0' : 'h-0.5'"></div>
      <!-- timeline indicator -->
      <div class="w-5 h-5 shrink-0 rotate-45 flex items-center justify-center bg-dark-gray dark:bg-off-white">
        <div class="w-2 h-2 bg-off-white dark:bg-dark-gray"></div>
      </div>
      <div class="w-full bg-dark-gray dark:bg-off-white" :class="hideLineRight ? 'h-0' : 'h-0.5'"></div>
    </div>

    <div class="flex justify-center mt-5">
      <time class="block mb-2 text-sm text-dark-gray dark:text-off-white">{{ props.project.date }}</time>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.card {
  perspective: 750px;
}

.card-body {
  transition: transform 1s;
  transform-style: preserve-3d;

  .card:hover & {
    transform: rotateY(-180deg);
  }
}

.card-front,
.card-back {
  backface-visibility: hidden;
  height: 18em;
  width: 13em;
  border-radius: 1em;
  border-width: 3px;
  border: 3px solid $darkGray;
}

body.dark .card-front,
body.dark .card-back {
  border-color: $offWhite;
}

.card-back {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: rotateY(-180deg);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5em;
}
</style>