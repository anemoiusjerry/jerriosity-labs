<script>
export default {
  name: 'ExpandableCard',
  props: {
    title: String,
    summary: String,
    imgSrc: String
  }
};
</script>

<template>
  <div class="flex flex-row bg-gray-900 rounded-xl max-w-xl m-2">
    <img class="w-56 h-40 rounded-s-xl" :src="imgSrc"/>
    <div class="flex flex-col justify-between p-5">
      <div>
        <h2 class="font-bold text-white ">{{ title }}</h2>
        <p class="text-gray-400">{{ summary }}</p>
      </div>
      <div class="cursor-pointer">
        Learn more
        <font-awesome-icon icon="fa-solid fa-angle-right"/>
      </div>
    </div>
  </div>
</template>

<style scoped></style>