<script>
import TypeTextArea from './components/TypeTextArea.vue';
export default {
  name: 'HeroSection',
  components: {
    TypeTextArea
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
    <div class="max-w-screen-xl px-4 py-8 mx-auto flex flex-row justify-center">
      <div>
        <div class="absolute w-full left-52 top-52">
          <h1 class="mb-5 text-6xl font-extrabold">Ciao, Im Jerry</h1>
          <div>
            <span class="absolute flex h-4 w-4" style="margin-left: 188px; margin-top: -5px;">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
                style="margin-left: -2px; margin-top: -2px;"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <a href="/src/assets/resume.pdf" download="Jerry's CV.pdf" class="inline-flex items-center justify-center border rounded-lg px-5 py-3 
        font-medium text-center text-white hover:text-sand hover:border-sand">
              Download my CV &nbsp; &nbsp;
              <font-awesome-icon icon="fa-solid fa-file-arrow-down" />
            </a>
          </div>
        </div>
      </div>

      <div class="w-6/12 h-auto">
        <img src="./assets/profile-shot.PNG" alt="my-headshot" class="max-w-full max-h-full object-contain">
      </div>

      <div>
        <div class="absolute flex flex-col w-auto top-52">
          <type-text-area text="< Fullstack Developer />" />
          <p class="p-5 bg-gray-800 mt-3 w-8/12 text-white">
            A coder that blends engineering best principles with elegant creative solutions.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.flip-container {
  text-align: center;
  margin-top: 50px;
}

.flip-enter-active,
.flip-leave-active {
  transition: transform 0.6s;
  transform-origin: top;
}

.flip-enter,
.flip-leave-to

/* .flip-leave-active in <2.1.8 */
  {
  transform: rotateX(90deg);
}

.flip-box {
  background-color: #f3f4f6;
  padding: 20px;
  margin: 20px auto;
  width: 300px;
  border: 1px solid #e5e7eb;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backface-visibility: hidden;
}
</style>