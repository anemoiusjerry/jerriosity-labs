<script setup>
import { ref, onBeforeMount, onUnmounted, onMounted } from 'vue'
import NavHeader from "./components/NavHeader.vue"
import FullPageScroll from './components/FullPageScroll.vue'

import HeroSection from "./pages/home/HeroSection.vue"
import SkillsSection from "./pages/home/SkillsSection.vue"
import ProjectSection from "./pages/home/ProjectSection.vue"
import AboutSection from './pages/home/AboutSection.vue'
import ContactSection from './pages/home/ContactSection.vue'

// number of sections (no other use)
const sections = ref([1, 2, 3, 4])
const curSection = ref(0)
const isMobile = ref(false)
let mediaQuery = null

function getSectionNumber(num) {
  curSection.value = num
}

function checkMobile(e) {
  isMobile.value = e.matches
}

onMounted(() => {
  mediaQuery = window.matchMedia('(max-width: 39.3975em)');
  checkMobile(mediaQuery);
  mediaQuery.addEventListener('change', checkMobile);
});

onUnmounted(() => {
  if (mediaQuery) {
    mediaQuery.removeEventListener('change', checkMobile);
  }
})
</script>

<template>
  <nav-header :float="curSection !== 0 && !isMobile" />

  <full-page-scroll :sections="sections" :sendSectionNumber="getSectionNumber">
    <template #section-0>
      <HeroSection />
    </template>
    <template #section-1>
      <SkillsSection />
    </template>
    <template #section-2>
      <ProjectSection />
    </template>
    <template #section-3>
      <AboutSection />
    </template>
    <template #section-4>
      <ContactSection />
    </template>
  </full-page-scroll>
</template>