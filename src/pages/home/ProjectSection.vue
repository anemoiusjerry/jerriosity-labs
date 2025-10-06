<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import TimelineCard from '../../components/TimelineCard.vue';
import { ProjectInfo } from '../../interfaces.ts';

const resPath = '/projects'
const projectsProfessional = ref<ProjectInfo[]>([
  {
    title: 'Streamwise D.I.',
    summary: 'First professional role as a Systems Engineer and then Engineering Manager at an Industrial IoT startup.',
    date: 'Dec 2019',
    image: `${resPath}/streamwise.png`,
    link: 'projects/streamwise-di'
  },
  {
    title: 'Restored To Eden',
    summary: 'Freelance work creating an automated formulation system for custom skin care products.',
    date: 'Apr 2020',
    image: `${resPath}/rte.png`,
    link: 'projects/restored-to-eden'
  },
  {
    title: 'Kogan.com',
    summary: 'Software Engineer at Australian eCommerce giant - Order & Dispatch Management team.',
    date: 'Mar 2025',
    image: `${resPath}/kogan.png`,
    link: ''
  },
  {
    title: 'Netwealth',
    summary: 'Fullstack Developer for a leading fintech specialising in superannuation and portfolio management.',
    date: 'Oct 2025',
    image: `${resPath}/netwealth.png`,
    link: ''
  },
])

const projectsPersonal = ref<ProjectInfo[]>([
  {
    title: 'Rhombus AI',
    summary: 'Recruitment project where I made a website for users to perform data type inference on large CSV files.',
    date: 'Apr 2024',
    image: `${resPath}/rhombus.jpg`,
    link: 'projects/rhombus-ai'
  },
    {
    title: 'This website!',
    summary: 'Website to showcase my skills and experience. Yes I also designed the logo too!',
    date: 'Aug 2024',
    image: `${resPath}/jerriositylabs.png`,
    link: 'projects/jerriosity-labs'
  },
])

const timelineRef = ref<HTMLDivElement | null>(null)
const timelineWidth = ref(1000)
const cardWidth = ref(1)

const options = ['Professional', 'Personal']
const selected = ref('Professional')

onMounted(() => {
  if (timelineRef.value !== null) {
    const card: HTMLDivElement | null = timelineRef.value.querySelector('.snap-start')
    if (card !== null) {
      cardWidth.value = card.offsetWidth
      scaleTimeline()
    }
  }
  window.addEventListener('resize', scaleTimeline)
})

onUnmounted(() => {
  window.removeEventListener('resize', scaleTimeline)
})

// Calculate how many full cards to show when window shrinks
const scaleTimeline = () => {
  const maxCards = 5
  let nCards = Math.floor(window.innerWidth / cardWidth.value)
  nCards = Math.min(nCards, maxCards)
  timelineWidth.value = nCards * cardWidth.value
}
</script>

<template>
  <section>
    <div id="project-section" class="flex flex-col items-center">
      <div class="my-8 flex title">
        <h3 class="font-bold">My Experience</h3>
        <div class="relative">
          <div class="p-4 absolute border-t-2 border-r-2 border-blood-orange dark:border-sky-blue"
            style="margin-left:-5px; margin-top: 5px;"></div>
          <div class="p-2 absolute bg-blood-orange dark:bg-sky-blue" style="margin-left:32px; margin-top: -12px;"></div>
        </div>
      </div>

      <div id="project-content" class="flex w-full">
        <!-- Timeline Cards (scrollable) -->
        <div id="timeline" ref="timelineRef" class="flex-1 flex justify-center overflow-x-auto snap-x snap-mandatory"
          :style="{ maxWidth: `${timelineWidth}px` }">
          <ol v-if="selected === 'Personal'" class="flex p-5">
             <timeline-card v-for="(item, index) in projectsPersonal" 
            :project="item" :hideLineLeft="index === 0" :hideLineRight="index === projectsPersonal.length - 1" 
            class="snap-start" />
          </ol>
          <ol v-if="selected === 'Professional'" class="flex p-5">
             <timeline-card v-for="(item, index) in projectsProfessional" 
            :project="item" :hideLineLeft="index === 0" :hideLineRight="index === projectsProfessional.length - 1" 
            class="snap-start" />
          </ol>
        </div>

        <!-- Selector (fixed on the right) -->
        <div class="flex-shrink-0 self-center mb-14">
          <button
            v-for="option in options" :key="option" @click="selected = option"
            class="flex items-center my-2"
            :class="{
              'text-primary': selected === option,
              'text-dark-gray dark:text-off-white': selected !== option
            }"
          >
            <div class="w-24 text-right">{{ option }}</div>
            <font-awesome-icon v-show="selected === option" icon="fa-solid fa-minus" class="ml-2"/>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.title {
  align-self: end;
  margin-right: 7em;

  @include breakpoint-down(small) {
    align-self: center;
    margin-right: 0em;
  }
}

#project-section {
  width: 80vw;

  @include breakpoint-down(small) {
    width: auto;
  }
}

#timeline {
  -ms-overflow-style: none;
  /* IE, Edge */
  scrollbar-width: none;
  /* Firefox */
}

#timeline::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari, Opera */
}

#project-content {
  flex-direction: row;
  @include breakpoint-down(small) {
    flex-direction: column;
  }
}
</style>