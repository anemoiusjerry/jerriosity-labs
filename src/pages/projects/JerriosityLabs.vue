<script lang="ts" setup>
import TypeTextArea from '../../components/TypeTextArea.vue';
import StickyNote from '../../components/StickyNote.vue';
import { onMounted, onUnmounted } from 'vue';

function handlePopState() {
  console.log('Back button detected on About Page');
}
onMounted(() => {
  window.addEventListener('popstate', handlePopState);
})

onUnmounted(() => {
  window.removeEventListener('popstate', handlePopState);
})
</script>

<template>
  <div class="project-page flex flex-col items-center">
    <type-text-area text='< Jerriosity Labs />' class="type-title" />
    <div>
      <a href="https://jerriositylabs.com" class="hover:underline me-4">https://jerriositylabs.com</a>
      <a data-popover-target="popover-default" data-popover-placement="right"
        href="https://github.com/anemoiusjerry/jerriosity-labs" target="_blank">
        <font-awesome-icon icon="fa-solid fa-laptop-code" size="lg" />
      </a>

      <div data-popover id="popover-default" role="tooltip"
        class="absolute z-10 invisible inline-block text-sm transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:border-gray-600 dark:bg-light-gray">
        <div class="px-3 py-2">
          <p>See code on GitHub</p>
        </div>
        <div data-popper-arrow></div>
      </div>
    </div>

    <p class="my-10">
      Started out as a passion project to learn Vue3 but then turned into a fully fledged portfolio website. I designed
      the entire thing myself including the logo. The styling is done is using Tailwind CSS, giving much more
      customisation
      something than the traditional component based Bootstrap library. This also made me implement a lot of my desired
      javascript functionalities and animation myself.
    </p>

    <div class="vertical items-center mb-10">
      <img src="/jlabs-logo-outline.svg" class="m-5 max-w-44" />
      <img src="/jlabs-logo.svg" class="m-5 max-w-44" />

      <p class="ms-10">
        The name came about from combining my name with curioisty and development labs, shortened to Jerrisoity Labs.
        <br><br>
        I wanted the logo to resemble a chemist flask but also references to coding. Thus I cut the flask in half
        to allow the closing html bracket act as the other half of base while the remaining flask itself also resembled
        a J.
        <br><br>
        Next thing after the coding was learning how to host my website without the over engineering of cloud service
        providers as well as obtaining and managing a domain name. I quickly decided to use cloudflare since it had its
        own integrated domain registrar too.
      </p>
    </div>

    <StickyNote
      text="So give my website a whirl! If you like what you see, why not reach out and flick me a message?" />
  </div>
</template>

<style lang="scss" scoped>
.vertical {
  display: flex;

  @include breakpoint-down(small) {
    flex-direction: column;
  }
}
</style>