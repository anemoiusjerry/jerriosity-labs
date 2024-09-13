<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SkillCard from './SkillCard.vue'

const props = defineProps({
  scrollThreshold: {
    type: Number,
    default: 0
  },
  cardProps: Array,
})

const scrollRef = ref(null)
const deckWidth = ref(0)

onMounted(() => {
  deckWidth.value = 3 * getCardWidth()
  window.addEventListener('resize', resizeDeck)
  resizeDeck()
})
onUnmounted(() => {
  window.removeEventListener('resize', resizeDeck)
})

function scrollLeft() {
  const cardWidth = getCardWidth()
  scrollRef.value.scrollBy({
    left: -cardWidth,
    behavior: 'smooth'
  })
}

function scrollRight() {
  const cardWidth = getCardWidth()
  scrollRef.value.scrollBy({
    left: cardWidth,
    behavior: 'smooth'
  })
}

function getCardWidth() {
  const cardElmt = scrollRef.value.querySelector('.card')
  const cardStyle = getComputedStyle(cardElmt)
  return cardElmt.offsetWidth + parseInt(cardStyle.marginLeft) + parseInt(cardStyle.marginRight)
}

function resizeDeck() {
  if (window.innerWidth < 640) {
    deckWidth.value = 2 * getCardWidth()
  }
  else {
    deckWidth.value = 3 * getCardWidth()
  }
}
</script>

<template>
  <div class="flex">
    <button v-if="props.cardProps.length >= scrollThreshold" @click="scrollLeft">
      <font-awesome-icon icon="fa-solid fa-angle-left" size="2xl" />
    </button>

    <div id='slide-deck' ref="scrollRef" class="overflow-x-auto snap-x snap-mandatory flex"
      :style="{maxWidth: `${deckWidth}px`}">

        <skill-card v-for="props in cardProps" v-bind="props" :key="props.imgAlt" class="p-2"/>

    </div>

    <button v-if="props.cardProps.length >= scrollThreshold" @click="scrollRight">
      <font-awesome-icon icon="fa-solid fa-angle-right" size="2xl" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
#slide-deck {
  -ms-overflow-style: none;
  /* IE, Edge */
  scrollbar-width: none;
  /* Firefox */
}
#slide-deck::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari, Opera */
}
</style>
