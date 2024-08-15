<script>
import TypeTextArea from './components/TypeTextArea.vue';
import OutlineButton from './components/OutlineButton.vue';

export default {
  name: 'HeroSection',
  components: {
    TypeTextArea, OutlineButton
  },
  data() {
    return { show: false }
  },
  methods: {
    toggle() {
      this.show = !this.show;
    }
  }
}
</script>

<template>
  <section>
    <div id="hero-section" class="px-5 py-8 flex flex-row justify-between">
      <div class="relative flex items-start justify-end">
        <div class="absolute left-32">
          <h1 class="mb-5 w-max font-extrabold" style="font-size: 4vw;">Hi, Im Jerry</h1>
          <p class="p-5 mt-7 w-10/12 text-dark-gray bg-white shadow-lg dark:text-off-white dark:bg-light-gray"
            style="font-size: 1.1vw;">
            A Coder that blends engineering best principles with elegant creative solutions.
          </p>
        </div>
      </div>

      <!-- relative class on image makes it appear over the words - looks cool! -->
      <div id="prof-img" class="relative" style="max-width: 40vw;">
        <img src="/public/jerry.png" alt="my-headshot" class="w-auto h-auto object-scale-down">
        <div class="relative">
          <div class="absolute trimmed-box border-light-trim dark:border-sky-blue"></div>
        </div>
      </div>

      <div class="relative flex items-center justify-end mt-36" style="left:-3vw">
        <div class="absolute" style="min-width: 24vw;">
          <type-text-area text="< Fullstack Developer />" class="mb-5" style="font-size: 1.6vw;"/>
          <a href="/public/resume.pdf" download="Jerry's CV.pdf">
            <outline-button text="Download my CV" iconCode="fa-solid fa-file-arrow-down" style="font-size: 1.1vw;"/>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.trimmed-box {
  padding: 3vw;
  bottom: -3vw;
  left: -3vw;
  border-left-width: 0.6vw;
  border-bottom-width: 0.6vw;
}
</style>