<script setup>
import { ref } from 'vue'
import NavHeader from "./components/NavHeader.vue"
import FloatingNav from './components/FloatingNav.vue'
import FullPageScroll from './components/FullPageScroll.vue'

import HeroSection from "./HeroSection.vue"
import SkillsSection from "./SkillsSection.vue"
import ProjectSection from "./ProjectSection.vue"
import AboutSection from './AboutSection.vue'
import ContactSection from './ContactSection.vue'

// number of sections (no other use)
const sections = ref([1, 2, 3, 4, 5])

const curSection = ref(0)
function getSectionNumber(sec) {
  curSection.value = sec
}
</script>

<template>
  <nav-header v-if="curSection === 0" class='navbar'/>
  <floating-nav v-else class="navbar"/>

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
      <template #section-4>
        <ContactSection class="section" />
      </template>
    </full-page-scroll>
</template>

<style>
.section {
  display: flex;
  align-items: center;
  height: 100vh;
}

.navbar {
  transition: all 1s ease
}
</style>