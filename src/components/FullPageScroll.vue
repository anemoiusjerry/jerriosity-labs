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
      if (this.scrolling || window.innerWidth < 640) {
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
    <div class="page border-b-dark-gray dark:border-b-off-white" v-for="(section, index) in sections" :key="index"
      :style="{ transform: `translateY(${(index - currentPage) * 100}%)` }">
      <slot :name="'section-' + index"></slot>
    </div>
    <div class="indicators">
      <span v-for="(section, index) in sections" :key="index" :class="{ active: currentPage === index }"
        @click="scrollToPage(index)"></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.full-page-scroll {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;

  @include breakpoint-down(small) {
    overflow-y: auto;
  }
}

.page {
  height: 100vh;
  position: absolute;
  margin-left: 10%;
  margin-right: 7%;
  margin-top: 7%;
  transition: transform 1s ease;

  @include breakpoint-down(small) {
    height: max-content;
    position: relative;
    margin-left: 5%;
    margin-right: 5%;
    padding-bottom: 10%;
    transform: none !important;
    border-bottom-width: 1px;
  }
}

.indicators {
  position: absolute;
  top: 70%;
  left: 3%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1.2em;

  @include breakpoint-down(small) {
    display: none;
  }
}

.indicators span {
  width: 11px;
  height: 11px;
  border-width: 2px;
  border-color: $darkGray;
  border-top: hidden;
  border-right: hidden;
  background-color: transparent;
  cursor: pointer;
  transform: rotate(45deg);
  transition: all 0.5s;
}

.indicators span:hover {
  border-color: $bloodOrange;
  border-top: solid 2px;
  border-right: solid 2px;
}

.indicators .active {
  background: $bloodOrange;
  border-width: 0px;
}

body.dark .indicators span {
  border-color: $offWhite;
}
body.dark .indicators span:hover {
  border-color: $skyBlue;
}
body.dark .indicators .active {
  background-color: $skyBlue;
}
</style>