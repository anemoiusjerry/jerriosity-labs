<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import TimelineCard from '../../components/TimelineCard.vue';

const resPath = '/public/projects'
const projects = ref([
  {
    title: 'Streamwise D.I.',
    date: 'Dec 2019',
    summary: 'First professional role as a Systems Engineer at an IIoT startup.',
    image: `${resPath}/streamwise.png`,
    borderColour: '#002c4e'
  },
  {
    title: 'Restored To Eden',
    date: 'Apr 2020',
    summary: 'Freelance work creating an automated formulation system for custom skin care products.',
    image: `${resPath}/rte.jpg`,
    borderColour: '#eac9ba'
  },
  {
    title: 'Rhombus AI',
    date: 'Apr 2024',
    summary: 'Recruitment project where I made a website for users to perform data type inference on large CSV files.',
    image: `${resPath}/rhombus.jpg`,
    borderColour: '#15b7cb'
  },
  {
    title: 'This website!',
    date: 'Aug 2024',
    summary: 'Website to showcase my skills and experience. Yes I also designed the logo too!',
    image: `${resPath}/jerriositylabs.png`
  }
])

const timelineRef = ref(null)
const cardWidth = ref(0);
const timelineWidth = ref(1000)

onMounted(() => {
  const card = timelineRef.value.querySelector('.snap-start')
  cardWidth.value = card.offsetWidth
  scaleTimeline()
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
  timelineWidth.value  = nCards * cardWidth.value
}

</script>

<template>
  <section>
    <div id="project-section" class="mt-10 flex flex-col items-center">
      <div class="flex title">
        <h3 class="font-bold">My Projects</h3>
        <div class="relative">
          <div class="p-4 absolute border-t-2 border-r-2 border-blood-orange dark:border-sky-blue" style="margin-left:-5px; margin-top: 5px;"></div>
          <div class="p-2 absolute bg-blood-orange dark:bg-sky-blue" style="margin-left:32px; margin-top: -12px;"></div>
        </div>
      </div>

      <div id="timeline" ref="timelineRef" class="overflow-x-auto snap-x snap-mandatory" :style="{maxWidth: `${timelineWidth}px`}">
        <ol class="flex p-5">
          <timeline-card v-for="(item, index) in projects" :projName="item.title" :projDate="item.date"
            :projBlurb="item.summary" :bgImage="item.image" :borderColour="item.borderColour" :hideLineLeft="index === 0" :hideLineRight="index === projects.length - 1"
            class="snap-start" />
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