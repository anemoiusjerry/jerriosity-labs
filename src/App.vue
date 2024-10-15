<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import NavHeader from './components/NavHeader.vue';

const homeSection = ref(0)
const isMobile = ref(false)
let mediaQuery = null

function updateHomeSection(sectionNumber: number) {
  homeSection.value = sectionNumber
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
  <nav-header :float="homeSection !== 0" />
  <router-view @update-home-section="updateHomeSection"></router-view>
</template>