<script lang="ts" setup>
import { onMounted, onUnmounted, provide, ref } from 'vue'
import NavHeader from './components/NavHeader.vue';
import { useRoute } from 'vue-router';

const route = useRoute
const homeSection = ref(0)
const isMobile = ref(false)
provide('isMobile', isMobile)
let mediaQuery: MediaQueryList | null = null

function updateHomeSection(sectionNumber: number) {
  homeSection.value = sectionNumber
}

function checkMobile(e: MediaQueryListEvent) {
  isMobile.value = e.matches
}

function floatNavBar() {
  if (isMobile.value) {
    return false
  }
  return !(route().path === '/' && homeSection.value === 0)
}

onMounted(() => {
  mediaQuery = window.matchMedia('(max-width: 39.3975em)');
  mediaQuery.addEventListener('change', checkMobile);
  isMobile.value = mediaQuery.matches
});

onUnmounted(() => {
  if (mediaQuery) {
    mediaQuery.removeEventListener('change', checkMobile);
  }
})
</script>

<template>
  <nav-header :float="floatNavBar()" />
  <router-view @update-home-section="updateHomeSection"></router-view>
</template>