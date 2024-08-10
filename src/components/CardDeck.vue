<script setup>
import { ref, reactive } from 'vue'
import SkillCard from './SkillCard.vue'

const props = defineProps({
  areaWidth: {
    type: String,
    default: '100%'
  },
  scrollThreshold: {
    type: Number,
    default: 0
  },
  cardProps: Array,
})

const scrollRef = ref(null)

const scrollStyle = reactive({
  maxWidth: props.areaWidth,
})

function scrollLeft() {
  const scrollContainer = scrollRef.value;
  const cardWidth = scrollContainer.querySelector('.snap-center').offsetWidth;
  scrollContainer.scrollBy({
    left: -(cardWidth + 15),
    behavior: 'smooth'
  })
}

function scrollRight() {
  const scrollContainer = scrollRef.value;
  const cardWidth = scrollContainer.querySelector('.snap-center').offsetWidth;
  scrollContainer.scrollBy({
    left: cardWidth + 15,
    behavior: 'smooth'
  })
}
</script>

<template>
  <div class="flex">
    <button v-if="props.cardProps.length >= scrollThreshold" @click="scrollLeft">
      <font-awesome-icon icon="fa-solid fa-angle-left" size="2xl" />
    </button>
    
    <div id='slide-deck' class="w-full overflow-x-auto snap-x snap-mandatory" :style="scrollStyle" ref="scrollRef">
      <div class="flex">
        <skill-card v-for="props in cardProps" v-bind="props" class="snap-center flex-shrink-0" />
      </div>
    </div>

    <button v-if="props.cardProps.length >= scrollThreshold" @click="scrollRight">
      <font-awesome-icon icon="fa-solid fa-angle-right"size="2xl" />
    </button>
  </div>
</template>

<style scoped>
#slide-deck {
  -ms-overflow-style: none;  /* IE, Edge */
  scrollbar-width: none;  /* Firefox */
}
#slide-deck::-webkit-scrollbar {
  display: none;  /* Chrome, Safari, Opera */
}
</style>
