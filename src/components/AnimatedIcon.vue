<script setup>
import { onMounted, ref, reactive } from 'vue'

const props = defineProps(['iconName', 'iconSize', 'urlLink', 'tooltipMsg', 'tooltipId'])
const hovering = ref(false)
const copied = ref(false)

function resetIcon() {
  hovering.value = false;
  copied.value = false;
}

function copyMsg() {
  navigator.clipboard.writeText(props.tooltipMsg)
  copied.value = true
}
</script>

<template>
  <a :href="urlLink" target="_blank" style="cursor: pointer;">
    <font-awesome-icon :icon="iconName" :size="iconSize" :class="[{ 'fa-beat-fade': hovering }, $attrs.class]"
      :data-tooltip-target="tooltipId" data-tooltip-placement="bottom" @mouseover="hovering = true"
      @mouseleave="resetIcon" @click="copyMsg"/>
  </a>

  <!-- tooltip message to show on hover and copied on click -->
  <div :id="tooltipId" role="tooltip"
    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-off-white bg-light-gray transition-opacity duration-300 rounded-full opacity-0 tooltip">
    {{ tooltipMsg }}

    <font-awesome-icon v-if="copied" icon="fa-solid fa-check" class="ml-1 text-blood-orange dark:text-sky-blue"/>
    <font-awesome-icon v-else icon="fa-regular fa-copy" class="ml-1"/>
    <div class="tooltip-arrow" data-popper-arrow></div>
  </div>
</template>

<style scoped></style>