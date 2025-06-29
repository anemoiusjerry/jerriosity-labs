<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue'
import FlipCard from './FlipCard.vue';
import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group';

const props = defineProps({
  scrollThreshold: {
    type: Number,
    default: 3
  },
  cardProps: Array,
})

const skillCardProps = reactive({
  width: '8em',
  padding: '1.5em', 
  borderRadius: '0.7em', 
  flexDirection: 'column',
  margin: '0.5em'
})

const scrollRef = ref(null)
const deckWidth = ref(0)

onMounted(() => {
  window.addEventListener('resize', resizeDeck)
  resizeDeck()
})
onUnmounted(() => {
  window.removeEventListener('resize', resizeDeck)
})

function scrollLeft() {
  const fontSize = parseFloat(getComputedStyle(scrollRef.value).fontSize)
  const cardWidth = getCardWidth() * fontSize
  //console.log(cardWidth)
  scrollRef.value.scrollBy({
    left: -cardWidth,
    behavior: 'smooth'
  })
}

function scrollRight() {
  const fontSize = parseFloat(getComputedStyle(scrollRef.value).fontSize)
  const cardWidth = getCardWidth() * fontSize
  scrollRef.value.scrollBy({
    left: cardWidth,
    behavior: 'smooth'
  })
}

function getCardWidth() {
  // returns em
  const cardWidth = parseFloat(skillCardProps.width) + 2 * parseFloat(skillCardProps.margin);
  return cardWidth;
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
    <button v-if="props.cardProps.length > scrollThreshold" @click="scrollLeft">
      <font-awesome-icon icon="fa-solid fa-angle-left" size="2xl" />
    </button>

    <div id='slide-deck' ref="scrollRef" class="overflow-x-auto snap-x snap-mandatory flex" 
    :style="{maxWidth: `${deckWidth}em`}">
      <flip-card v-for="props in cardProps" :key="props.imgAlt" class="snap-center"
        :frontStyle="skillCardProps" :backStyle="skillCardProps">
        <template #front-face>
          <div class="flex flex-row mb-3 justify-center items-center img-container">
            <div v-for="path in props.imgSrcs">
              <img :src="path" :alt="props.imgAlt" style="width: 4.5em;" />
            </div>
          </div>
          <span class="text-sm text-dark-gray dark:text-off-white">{{ props.title }}</span>
        </template>
        <template #back-face>
          <span class="font-bold text-dark-gray dark:text-off-white">{{ props.exp }}</span>
        </template>
      </flip-card>
    </div>

    <button v-if="props.cardProps.length > scrollThreshold" @click="scrollRight">
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

.img-container {
  width: 5em;
  height: 5em;
}
</style>
