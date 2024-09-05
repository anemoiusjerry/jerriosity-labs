<script>
import TypeTextArea from '../../components/TypeTextArea.vue';
import OutlineButton from '../../components/OutlineButton.vue';
import StickyNote from '../../components/StickyNote.vue';

export default {
  name: 'HeroSection',
  components: {
    TypeTextArea, OutlineButton, StickyNote
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
    <div id="word-sections">
      <div id="hero-image">
        <img src="/jerry.png" alt="my-headshot">
        <div class="relative">
          <div class="absolute trimmed-box border-blood-orange dark:border-sky-blue"></div>
        </div>
      </div>

      <div id="left-section" class="">
        <h1 class="mb-7 font-bold">Hi, Im Jerry</h1>
        <sticky-note text="Seemlessly blending engineering best principles with elegant creative design." />
      </div>

      <div id="right-section">
        <type-text-area id="type-text" text="< Fullstack Developer. />" class="mb-5" />
        <a href="/resume.pdf" download="Jerry's CV.pdf">
          <outline-button text="Download my CV" iconCode="fa-solid fa-file-arrow-down" />
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.trimmed-box {
  padding: 3vw;
  bottom: -3vw;
  left: -3vw;
  border-left-width: 0.6vw;
  border-bottom-width: 0.6vw;
}

#type-text {
  font-size: 1.6rem;
  @include breakpoint-down(small) {
    font-size: 1.2em;
  }
}


#word-sections {
  height: 28vw;
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));

  @include breakpoint-down(small) {
    grid-template-columns: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 80vh;
  }
}

#left-section {
  grid-column: span 2 / span 2;
  @include breakpoint-down(small) {
    width: 80%;
    text-align: center;
    margin-top: 2.5em;
  }
}

#right-section {
  align-self: flex-end;
  grid-column: span 3 / span 3;
  grid-column-start: 8;

  @include breakpoint-down(small) {
    grid-column: unset;
    grid-column-start: unset;
    align-self: center;
    text-align: center;
  }
}

#hero-image {
  position: absolute;
  max-width: 45%; left: 24%; top: 5%;
  @include breakpoint-down(small) {
    left: 0%;
    position: relative;
  }
}

h1 {
  width: max-content;
  @include breakpoint-down(small) {
    // centers text
    width: 100%;
  }
}
</style>