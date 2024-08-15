<script>
export default {
  name: 'FullPageScroll',
  props: {
    sections: {
      type: Array,
      required: true,
    },
    sendSectionNumber: Function,
  },
  data() {
    return {
      currentPage: 0,
      scrolling: false,
    };
  },
  methods: {
    handleScroll(event) {
      if (this.scrolling) {
        return;
      }

      const ySens = 5; // change sensitivity
      const delta = event.deltaY;
      if (delta > ySens) {
        this.nextPage();
      }
      else if (delta < -ySens) {
        this.prevPage();
      }
    },
    // change timeout period to control sensitivtiy
    nextPage() {
      if (this.currentPage < this.sections.length - 1) {
        this.scrolling = true;
        this.scrollToPage(this.currentPage + 1)
        setTimeout(() => {
          this.scrolling = false;
        }, 1500);
      }
    },
    prevPage() {
      if (this.currentPage > 0) {
        this.scrolling = true;
        this.scrollToPage(this.currentPage - 1)
        setTimeout(() => {
          this.scrolling = false;
        }, 1500);
      }
    },
    scrollToPage(index) {
      this.currentPage = index;
      this.sendSectionNumber(index);
    },
  },
  mounted() {
    window.addEventListener('wheel', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('wheel', this.handleScroll);
  },
};
</script>


<template>
  <div class="full-page-scroll">
    <div class="page" v-for="(section, index) in sections" :key="index"
      :style="{ transform: `translateY(${(index - currentPage) * 100}%)` }">
      <slot :name="'section-' + index"></slot>
    </div>
    <div class="indicators">
      <span v-for="(section, index) in sections" :key="index" :class="{ active: currentPage === index }"
        @click="scrollToPage(index)"></span>
    </div>
  </div>
</template>

<style scoped>
.full-page-scroll {
  height: 100vh;
  overflow-y: hidden;
  position: relative;
}

.page {
  width: 100%;
  height: 100vh;
  position: absolute;
  transition: transform 1s ease;
  margin-top: 4em;
}

.indicators {
  position: absolute;
  top: 70%;
  left: 50px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
}

.indicators span {
  width: 11px;
  height: 11px;
  border-width: 2px;
  border-color: var(--dark-gray);
  border-top: hidden;
  border-right: hidden;
  background-color: transparent;
  margin: 8px 0;
  cursor: pointer;
  transform: rotate(45deg);
  transition: all 0.5s;
}

.indicators span:hover {
  border-color: var(--light-trim);
  border-top: solid 2px;
  border-right: solid 2px;
}

.indicators .active {
  background: var(--light-trim);
  border-width: 0px;
}

body.dark .indicators span {
  border-color: var(--off-white);
}
body.dark .indicators span:hover {
  border-color: var(--sky-blue);
}
body.dark .indicators .active {
  background-color: var(--sky-blue);
}
</style>