<script setup>
const props = defineProps(['type', 'id', 'label'])
</script>

<template>
  <div class="relative z-0 w-full mb-5 group">
    <input :type="type" :name="id" :id="id" placeholder=" " required
      class="block py-2.5 px-0 w-full text-sm appearance-none peer floating-input" />

    <label :for="id"
      class="peer-focus:font-medium absolute text-sm text-dark-gray dark:text-off-white peer-focus:text-light-trim dark:peer-focus:text-sky-blue
      duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
      {{ label }}
    </label>
  </div>
</template>

<style scoped>
.floating-input {
  color: var(--dark-gray);
  caret-color: var(--light-trim);
  border-color: var(--dark-gray);
  background-color: transparent;
  border-width: 0px;
  border-bottom-width: 2px;
}

.floating-input:hover, .floating-input:focus {
  outline: none;
  box-shadow: none;
  border-color: var(--light-trim);
}

body.dark .floating-input {
  color: var(--off-white);
  caret-color: var(--sky-blue);
  border-color: var(--off-white);
}

body.dark .floating-input:hover {
  border-color: var(--sky-blue);
}

body.dark .floating-input:focus {
  border-color: var(--sky-blue);
}
</style>