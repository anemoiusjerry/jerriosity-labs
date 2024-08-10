<script setup>
const props = defineProps(['text', 'iconCode'])
</script>

<template>
  <button class="outline-button">
    <font-awesome-icon v-if="props.iconCode !== undefined" :icon="props.iconCode" />
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
  border-color: var(--sky-blue);
  color: var(--sky-blue);
}
</style>