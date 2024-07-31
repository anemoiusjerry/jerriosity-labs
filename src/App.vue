<script setup lang="ts">
import { ref } from 'vue'
import NavHeader from "./components/NavHeader.vue"
import HeroSection from "./HeroSection.vue"
import SkillsSection from "./SkillsSection.vue"
import ProjectSection from "./ProjectSection.vue"
import FullPageScroll from './components/FullPageScroll.vue';

// number of sections (no other use)
const sections = ref([1, 2, 3])
</script>

<template>
  <nav-header />

  <full-page-scroll :sections="sections">
      <template #section-0>
        <HeroSection class="section" />
      </template>
      <template #section-1>
        <SkillsSection class="section" />
      </template>
      <template #section-2>
        <ProjectSection class="section" />
      </template>
    </full-page-scroll>
</template>

<style>
.section {
  display: flex;
  align-items: center;
  height: 100vh;
}
</style>