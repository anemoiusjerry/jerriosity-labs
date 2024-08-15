<script setup>
import { ref } from 'vue'
import TimelineCard from './components/TimelineCard.vue';

const projects = ref([
  {
    title: 'Streamwise D.I.',
    date: 'Dec 2019',
    summary: 'First professional role as a Systems Engineer at an IIoT startup.'
  },
  {
    title: 'Restored To Eden',
    date: 'Apr 2020',
    summary: 'Freelance work creating an automated formulation system for custom skin care products.'
  },
  {
    title: 'Travel Buddy',
    date: 'Jun 2021',
    summary: 'Mobile app that connects solo travellers with similar itineraries'
  },
  {
    title: 'Streamwise D.I.',
    date: 'Dec 2022',
    summary: 'Promotion to Technical Engineering Manager leading the software team'
  },
  {
    title: 'Rhombus AI',
    date: 'Apr 2024',
    summary: 'Recruitment project where I made a website for users to perform data type inference on large CSV files.'
  },
  {
    title: 'This website!',
    date: 'Aug 2024',
    summary: 'Completely designed and coded from scratch by me!'
  }
])
</script>

<template>
  <section>
    <div class="flex flex-col items-center p-5 mt-10">
      <div class="relative flex">
        <div >
          <div class="p-4 absolute border-t-2 border-r-2 border-light-trim dark:border-sky-blue "></div>
          <div class="p-2 absolute bg-light-trim dark:bg-sky-blue" style="right: -56px; top: -22px"></div>
        </div>
        <h1 class="text-5xl font-bold my-4">My Projects</h1>
      </div>

      <div id="timeline" class="overflow-x-auto snap-x snap-mandatory" style="width: 1090px;">
        <ol class="items-center flex p-5">
          <timeline-card v-for="(item, index) in projects" :projName="item.title" :projDate="item.date"
            :projBlurb="item.summary" :hideLineLeft="index === 0" :hideLineRight="index === projects.length - 1"
            class="snap-start" />
        </ol>
      </div>
    </div>
  </section>
</template>

<style scoped>
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