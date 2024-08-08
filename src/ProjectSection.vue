<script setup>
import { ref } from 'vue'
import TimelineItem from './components/TimelineItem.vue';
import ExpandableCard from './components/ExpandableCard.vue';

const projects = ref([
  {
    title: 'Streamwise D.I.',
    date: 'Dec 2019',
    summary: 'First professional role as a Systems Engineer at an IIoT startup.',
    imgSrc: '/src/assets/streamwisedi_cover.jpeg'
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
    <div class="mx-auto flex flex-col items-center">
      <h1 class="text-2xl mb-5 self-start">My Projects</h1>

      <div class="flex">
        <font-awesome-icon icon="fa-solid fa-angle-left" class="mt-6" />

        <div class="overflow-x-auto p-5" style="width: 1200px;">
          <ol class="items-center flex">
            <timeline-item v-for="item in projects" :projName="item.title" :projectDate="item.date" :projBlurb="item.summary" />
          </ol>
        </div>
        <font-awesome-icon icon="fa-solid fa-angle-right" class="mt-6" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>