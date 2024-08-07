<script>
import ExpandableCard from './components/ExpandableCard.vue';

export default {
  name: 'ProjectSection',
  data() {
    return {
      projects: [
        {
          title: 'Streamwise D.I.', 
          summary: 'Website for monitoring and controlling wastewater treatment process',
          imgSrc: '/src/assets/streamwisedi_cover.jpeg'
        },
        {title: 'Restored To Eden', summary: 'MacOS app that selects and calculates ingredient mixtures for custom skin care creams'},
        {title: 'Rhombus AI', summary: 'Website where users can perform data type inference on large CSV files'},
        {title: 'Travel Buddy', summary: 'Mobile app that connects solo travellers with similar itineraries'},
        {title: 'This website!', summary: 'Completely coded and hosted from scratch by me!'}
      ]
    }
  },
  components: {
    ExpandableCard
  }
}
</script>

<template>
  <section>
    <div class="mx-auto flex flex-col justify-center items-center">
      <h1 class="text-2xl mb-5">My Projects</h1>
        <div class="flex flex-wrap justify-center">
        <expandable-card v-for="proj in projects" :title="proj.title" :summary="proj.summary" :imgSrc="proj.imgSrc"/>
      </div>
     
    </div>
  </section>
</template>

<style scoped></style>