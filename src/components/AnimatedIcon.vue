<script>
export default {
  name: 'AnimatedIcon',
  props: {
    iconName: String,
    iconSize: String,
    urlLink: String
  },
  data() {
    return {
      hovering: false
    }
  }
}
</script>

<template>
  <a :href="urlLink" target="_blank" style="cursor: pointer;">
    <font-awesome-icon :icon="iconName" :size="iconSize" :class="{ 'fa-beat-fade': hovering }"
      @mouseover="hovering = true" @mouseleave="hovering = false" />
  </a>
</template>

<style scoped>

</style>