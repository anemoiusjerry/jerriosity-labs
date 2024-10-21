<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import TimelineCard from '../../components/TimelineCard.vue';
import { ProjectInfo } from '../../interfaces.ts';

const resPath = '/projects'
const projects = ref<ProjectInfo[]>([
  {
    title: 'Streamwise D.I.',
    summary: 'First professional role as a Systems Engineer at an IIoT startup.',
    date: 'Dec 2019',
    image: `${resPath}/streamwise.png`,
    link: 'projects/streamwise-di'
  },
  {
    title: 'Restored To Eden',
    summary: 'Freelance work creating an automated formulation system for custom skin care products.',
    date: 'Apr 2020',
    image: `${resPath}/rte.jpg`,
    link: 'projects/restored-to-eden'
  },
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
  }
])

const timelineRef = ref<HTMLDivElement | null>(null)
const timelineWidth = ref(1000)
const cardWidth = ref(1)

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
  const maxCards = 4
  let nCards = Math.floor(window.innerWidth / cardWidth.value)
  nCards = Math.min(nCards, maxCards)
  timelineWidth.value = nCards * cardWidth.value
}
</script>

<template>
  <section>
    <div id="project-section" class="mt-10 flex flex-col items-center">
      <div class="flex title">
        <h3 class="font-bold">My Experience</h3>
        <div class="relative">
          <div class="p-4 absolute border-t-2 border-r-2 border-blood-orange dark:border-sky-blue"
            style="margin-left:-5px; margin-top: 5px;"></div>
          <div class="p-2 absolute bg-blood-orange dark:bg-sky-blue" style="margin-left:32px; margin-top: -12px;"></div>
        </div>
      </div>

      <div id="timeline" ref="timelineRef" class="overflow-x-auto snap-x snap-mandatory"
        :style="{ maxWidth: `${timelineWidth}px` }">
        <ol class="flex p-5">
          <timeline-card class="snap-start" v-for="(item, index) in projects" :project="item"
            :hideLineLeft="index === 0" :hideLineRight="index === projects.length - 1" />
        </ol>
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
</style>