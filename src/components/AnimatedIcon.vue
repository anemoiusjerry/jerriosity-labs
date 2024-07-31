<script>
export default {
  name: 'AnimatedIcon',
  props: {
    iconName: String,
    iconSize: String,
    urlLink: String,
    popupMsg: String
  },
  data() {
    return {
      hovering: false
    }
  }
}
</script>

<template>
  <a :href="urlLink" target="_blank" class="icon" style="cursor: pointer;" data-tooltip-target="icon-tooltip" data-tooltip-trigger="click" data-tooltip-placement="bottom">
    <font-awesome-icon :icon="iconName" :size="iconSize" :class="{ 'fa-beat-fade': hovering }"
      @mouseover="hovering = true" @mouseleave="hovering = false" />
  </a>

  <div id="icon-tooltip" role="tooltip" class="absolute z-10 inline-block px-3 py-2 text-sm font-medium text-primary-dark transition-opacity duration-300 bg-white rounded-lg shadow-sm opacity-0 tooltip">
    {{ popupMsg }}
    <div class="tooltip-arrow" data-popper-arrow></div>
  </div>

</template>

<style scoped>
.icon {
  margin-left: 10px;
  margin-right: 10px;
}
</style>