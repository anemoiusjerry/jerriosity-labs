<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavHeader from '../../components/NavHeader.vue'
import FullPageScroll from '../../components/FullPageScroll.vue'

import HeroSection from "./HeroSection.vue"
import SkillsSection from "./SkillsSection.vue"
import ProjectSection from "./ProjectSection.vue"
import AboutSection from './AboutSection.vue'
import ContactSection from './ContactSection.vue'

const emit = defineEmits(['update-home-section'])

// number of sections (no other use)
const sections = ref([1, 2, 3, 4])

function getSectionNumber(num) {
  emit('update-home-section', num)
}
</script>

<template>
  <!-- <nav-header :float="curSection !== 0 && !isMobile" /> -->
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