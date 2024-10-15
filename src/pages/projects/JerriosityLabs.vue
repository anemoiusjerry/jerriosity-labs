<script lang="ts" setup>
import TypeTextArea from '../../components/TypeTextArea.vue';
</script>

<template>
  <div class="flex flex-col items-center p-36">
    <type-text-area text='< Jerriosity Labs />' class="text-2xl mb-10" />
    <p>
      Started out as a passion project to learn Vue3 but then turned into a fully fledged portfolio website. I designed
      the entire thing myself including the logo. The styling is done is using Tailwind CSS, giving much more
      customisation
      something than the traditional component based Bootstrap library. This also made me implement a lot of my desired
      javascript functionalities and animation myself.
    </p>

    <div class="flex items-center mt-10">
      <img src="/jlabs-logo-outline.svg" width="250" class="m-5" />
      <img src="/jlabs-logo.svg" width="250" class="m-5" />
      <p class="">
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
  </div>
</template>