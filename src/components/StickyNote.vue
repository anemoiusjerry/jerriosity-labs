<script setup>
import { computed } from 'vue'
const props = defineProps(["text"])
</script>

<template>
  <div>
    <p class="p-5 text-dark-gray bg-white shadow-lg dark:text-off-white dark:bg-light-gray">
    {{ props.text }}
  </p>
  </div>

</template>

<style lang="scss" scoped>
p {
  white-space: pre-line;
  @include breakpoint-down(small) {
    text-align: center;
    font-weight: normal;
  }
}
</style>