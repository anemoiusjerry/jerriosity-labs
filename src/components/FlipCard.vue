<script setup lang="ts">
import { CSSProperties, ref } from 'vue'

const props = defineProps<{
  frontStyle?: CSSProperties,
  backStyle?: CSSProperties,
  frontClass?: string,
  backClass?: string
}>()

const isActive = ref(false)

function toggleCard(flip: boolean) {
  isActive.value = flip
}
</script>

<template>
  <div class="card flex justify-center" :class="isActive && 'active'" 
  @click="() => toggleCard(!isActive)" @mouseenter="() => toggleCard(true)" @mouseleave="() => toggleCard(false)">
    <div class="card-body">
      <!-- front face -->
      <div class="card-front shadow-lg bg-white dark:bg-light-gray" :class="props.frontClass" :style="props.frontStyle">
        <slot name="front-face"></slot>
      </div>
      <!-- back face -->
      <div class="card-back shadow-lg bg-white dark:bg-light-gray" :class="props.backClass" :style="props.backStyle">
        <slot name="back-face"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  perspective: 750px;
}

.card-body {
  transition: transform 1s;
  transform-style: preserve-3d;

  .card.active & {
    transform: rotateY(-180deg);
  }
}

.card-front,
.card-back {
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-back {
  transform: rotateY(-180deg);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>