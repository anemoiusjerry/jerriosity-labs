<script setup>
import { watch, ref, onMounted, onUnmounted, inject, nextTick } from 'vue'
import NavHeader from '../../components/NavHeader.vue'
import FullPageScroll from '../../components/FullPageScroll.vue'

import HeroSection from "./HeroSection.vue"
import SkillsSection from "./SkillsSection.vue"
import ProjectSection from "./ProjectSection.vue"
import AboutSection from './AboutSection.vue'
import ContactSection from './ContactSection.vue'
import LiteratureSection from './LiteratureSection.vue'

// number of sections (no other use)
const sections = ref([0, 1, 2, 3, 4])
const isMobile = inject('isMobile')

const emit = defineEmits(['update-home-section'])
function getSectionNumber(num) {
  emit('update-home-section', num)
}
</script>

<template>
  <full-page-scroll :isMobile="isMobile" :sections="sections"
    :sendSectionNumber="getSectionNumber">
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
      <LiteratureSection />
    </template>
    <template #section-4>
      <AboutSection />
    </template>
  </full-page-scroll>
</template>