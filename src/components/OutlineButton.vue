<script setup>
import { reactive, defineProps, computed } from 'vue';

const props = defineProps(['text', 'colour', 'iconCode', 'iconSize', 'iconColour'])

const buttonColour = computed(() => {
  return { '--button-colour': props.colour }
})
</script>

<template>
  <button class="outline-button" :style="buttonColour">
    <font-awesome-icon v-if="props.iconCode !== undefined" :icon="props.iconCode" :size="props.iconSize"
      :style="{color: props.iconColour}" />
    &nbsp; {{ props.text }}
  </button>
</template>

<style scoped>
.outline-button {
  display: inline-flex;
  align-items: center;
  padding: 12px;
  border-width: 1px;
  border-radius: 10px;
  border-color: var(--off-white);
  color: var(--off-white);
}

.outline-button:hover {
  border-color: var(--button-colour);
  color: var(--button-colour);
}
</style>