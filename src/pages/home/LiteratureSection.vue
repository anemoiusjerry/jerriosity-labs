<script lang="ts" setup>
import ImageCard from '../../components/ImageCard.vue';
import StickyNote from '../../components/StickyNote.vue';
</script>

<template>
  <section>
    <div class="mt-10 flex flex-row justify-between">
      <div>
        <h4 class="font-bold">I Write Articles!</h4>
        <sticky-note class="text-lg tracking-tight" text="...actually just one, but more are coming!" />
      </div>

      <!-- Article cards -->
      <div class="flex flex-row ml-10 mr-10">
        <image-card
          imgUrl="/literature/kgn-dev-blog.jpg"
          imgAlt="space-restaurant-image"
          title="Order Dispatch Systems at Scale"
          description="Written for and published on the Kogan.com developer blog. Outlines the transition to event-driven architecture my team made at the time."
          articleLink="articles/kgn-dev-blog"
          originalLink="https://devblog.kogan.com/blog/order-dispatch-systems-at-scale"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>