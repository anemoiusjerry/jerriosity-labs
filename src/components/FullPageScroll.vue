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
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 1s ease;
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
  border-color: #fff;
  border-top: hidden;
  border-right: hidden;
  background-color: transparent;
  margin: 8px 0;
  cursor: pointer;
  transform: rotate(45deg);
  transition: all 0.5s;
}

.indicators span:hover {
  border-color: var(--sand);
}


.indicators .active {
  background: var(--sand);
  border-width: 0px;
}
</style>