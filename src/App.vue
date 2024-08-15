<script setup>
import { ref } from 'vue'
import NavHeader from "./components/NavHeader.vue"
import FullPageScroll from './components/FullPageScroll.vue'

import HeroSection from "./HeroSection.vue"
import SkillsSection from "./SkillsSection.vue"
import ProjectSection from "./ProjectSection.vue"
import AboutSection from './AboutSection.vue'
import ContactSection from './ContactSection.vue'

// number of sections (no other use)
const sections = ref([1, 2, 3, 4])
const curSection = ref(0)

function getSectionNumber(num) {
  console.log(num)
  curSection.value = num
}
</script>

<template>
  <nav-header :float="curSection !== 0" />

  <full-page-scroll :sections="sections" :sendSectionNumber="getSectionNumber">
      <template #section-0>
        <HeroSection class="section" />
      </template>
      <template #section-1>
        <SkillsSection class="section" />
      </template>
      <template #section-2>
        <ProjectSection class="section" />
      </template>
      <template #section-3>
        <AboutSection class="section" />
      </template>
      <!-- <template #section-4>
        <ContactSection class="section" />
      </template> -->
    </full-page-scroll>
</template>

<style>
.section {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>