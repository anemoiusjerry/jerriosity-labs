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
    <div id="hero-section" class="max-w-screen-xl px-4 py-8 mx-auto flex flex-row justify-between">
      <div class="relative flex items-center justify-center">
        <div id="left-content" class="absolute top-24 left-10">
          <h1 class="mb-5 text-6xl font-extrabold w-max" style="font-family: 'Rowdies', sans-serif;">Hi, Im Jerry</h1>
          <p class="p-5 mt-7 w-9/12 text-off-white bg-light-gray">
            A Coder that blends engineering best principles with elegant creative solutions.
          </p>
        </div>
      </div>

      <div id="prof-img" class="w-6/12 h-auto">
        <img src="./assets/jerry.png" alt="my-headshot" class="max-w-full max-h-full object-contain">
        <div class="relative">
          <div class="absolute trimmed-box"></div>
        </div>
      </div>

      <div class="relative flex items-center justify-center">
        <div class="absolute right-0 bottom-40">
          <type-text-area text="< Fullstack Developer />" class="w-96 mb-9" />
          <a href="/src/assets/resume.pdf" download="Jerry's CV.pdf">
            <outline-button text="Download my CV" iconCode="fa-solid fa-file-arrow-down" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.trimmed-box {
  padding: 35px;
  bottom: -45px;
  left: -45px;
  border-left-width: 6px;
  border-bottom-width: 6px;
  border-color: var(--sky-blue);
}

@media (max-width: 800px) {
  #hero-section {
    flex-direction: column;
    align-items: center;
  }

  .trimmed-box {
    padding: 20px;
    bottom: -20px;
    left: -20px;
    border-left-width: 4px;
    border-bottom-width: 4px;
  }

  #prof-img {
    max-width: 30%;
  }

  #left-content {
    top: 350px;
    left: -195px;
  }

  h1 {
    font-size:xx-large;
  }
}
</style>