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
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto grid-cols-12">
      <div class="mr-auto place-self-center col-span-7">
        <h1 class="max-w-2xl mb-4 text-6xl font-extrabold">
          Hi, Im Jerry
        </h1>
        <type-text-area text="Fullstack and mobile developer." />

        <div>
          <span class="absolute flex h-4 w-4" style="margin-left: 188px; margin-top: -5px;">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
              style="margin-left: -2px; margin-top: -2px;"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <a href="/src/assets/resume.pdf" download="Jerry's CV.pdf" class="inline-flex items-center justify-center border rounded-lg px-5 py-3 
        font-medium text-center text-white hover:text-secondary-dark hover:border-secondary-dark">
            Download my CV &nbsp; &nbsp;
            <font-awesome-icon icon="fa-solid fa-file-arrow-down" />
          </a>
        </div>

        <p class="p-5 bg-gray-900 border rounded-lg mt-3 w-11/12">With 5+ years of professional coding
          experience in web, cloud, mobile and hardware IoT, I can bring any project to life. I have worked with
          clients from Australia, India and Singapore, so why not flick me a message?
        </p>
      </div>

      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup">
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