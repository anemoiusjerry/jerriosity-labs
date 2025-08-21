<script lang="ts" setup>
import ImageCard from '../../components/ImageCard.vue';
import StickyNote from '../../components/StickyNote.vue';
</script>

<template>
  <section>
    <div class="mt-10 flex flex-row justify-between">
      <div>
        <h4 class="font-bold">I Write Articles!</h4>
        <sticky-note class="text-lg tracking-tight" text="Every now and then - From tech guides 
        to just musings, why not check it out." />
      </div>

      <!-- Article cards -->
      <div class="flex flex-row ml-10 mr-10">
        <image-card
          imgUrl="/literature/kogan-dev-blog.jpg"
          imgAlt="space-restaurant-image"
          title="Order Dispatch Systems at Scale"
          description="Written for and published on the Kogan.com developer blog. Outlines the transition to event-driven architecture my team made at the time."
          articleUrl="https://devblog.kogan.com/blog/order-dispatch-systems-at-scale"
        />
      </div>


    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>