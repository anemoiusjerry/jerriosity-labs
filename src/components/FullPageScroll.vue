<script>
import { useRouter } from 'vue-router';

export default {
  name: 'FullPageScroll',
  props: {
    isMobile: Boolean,
    sendSectionNumber: Function,
    sections: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      currentPage: 0,
      scrolling: false,
      resizing: false,
      timeoutID: null,
      backNav: false
    };
  },
  watch: {
    isMobile(newVal, oldVal) {
      this.handleScreenSize(newVal)
    },
    backNav(newVal, oldVal) {
      console.log("fewfewefw")
      this.backNav = newVal
      if (newVal) {
        this.currentPage = 2
      }
    }
  },
  methods: {
    // Mobile vs Desktop screen changes
    handleScreenSize(isMobile) {
      if (isMobile) {
        window.removeEventListener('wheel', this.scrollDesktop)

        // calculate scroll position based on page
        const sectionHeights = this.getSectionHeights()
        const scrollHeight = this.calculateMobileScroll(sectionHeights)
        // set scroll bar position to correct section
        const scrollContainer = document.getElementById('fullPageScroll')
        scrollContainer.scrollTop = scrollHeight

        scrollContainer.addEventListener('scroll', this.scrollMobile)
        // detect on resize end
        window.addEventListener('resize', this.handleResize)
      }
      else {
        const scrollContainer = document.getElementById('fullPageScroll')
        scrollContainer.removeEventListener('scroll', this.scrollMobile)
        window.removeEventListener('resize', this.handleResize)

        /* need to reset scrollTop otherwise theres visual bug
        where entire pages are shifted upward */
        scrollContainer.scrollTop = 0
        window.addEventListener('wheel', this.scrollDesktop)
      }
    },
    // snap scrolling page shifts
    scrollDesktop(event) {
      // change sensitivity
      const ySens = 10;
      if (!this.scrolling) {
        if (event.deltaY > ySens) {
          this.nextPage();
        }
        else if (event.deltaY < -ySens) {
          this.prevPage();
        }
      }
    },
    // continuous smooth scrolling
    scrollMobile() {
      // only calculate the new page for desktop mode when not resizing!
      if (!this.resizing) {
        const scrollPos = document.getElementById('fullPageScroll').scrollTop
        const sectionHeights = this.getSectionHeights()
        this.scrollToPage(this.calculatePageIndex(scrollPos, sectionHeights))
      }
    },
    // change timeout period to control sensitivtiy
    nextPage() {
      if (this.currentPage < this.sections.length - 1) {
        this.scrolling = true;
        this.scrollToPage(this.currentPage + 1)
        setTimeout(() => this.scrolling = false, 1000);
      }
    },
    prevPage() {
      if (this.currentPage > 0) {
        this.scrolling = true;
        this.scrollToPage(this.currentPage - 1)
        setTimeout(() => this.scrolling = false, 1000);
      }
    },
    scrollToPage(index) {
      this.currentPage = index;
      this.sendSectionNumber(index);
    },

    getSectionHeights() {
      let heights = []
      document.querySelectorAll('.page').forEach(p => heights.push(p.offsetHeight))
      return heights
    },

    calculateMobileScroll(sectionHeights) {
      let scrollHeight = 0
      for (const sectionHeight of sectionHeights.slice(0, this.currentPage))
        scrollHeight += sectionHeight
      return scrollHeight
    },

    // calculate which section scrolled to
    calculatePageIndex(scrollHeight, sectionHeights) {
      let lowerBound = 0
      for (let i = 0; i < sectionHeights.length; i++) {
        const upperBound = lowerBound + sectionHeights[i]
        if (scrollHeight >= lowerBound && scrollHeight < upperBound)
          return i
        else
          lowerBound = upperBound
      }
    },

    // marks the resize flag. IMPORTANT as resizing window triggers scroll event
    // causing incorrect updating of new page calculation
    handleResize() {
      this.resizing = true

      // block simulates on resize end
      clearTimeout(this.timeoutID)
      this.timeoutID = setTimeout(() => {
        this.resizing = false
      }, 200)
    }
  },
  mounted() {
    // initial setup for screen
    this.handleScreenSize(this.isMobile)
  },
  beforeDestroy() {
    const scrollContainer = document.getElementById('fullPageScroll')
    scrollContainer.removeEventListener('scroll', this.scrollMobile)
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('wheel', this.scrollDesktop)
  }
};
</script>


<template>
  <div id="fullPageScroll" class="full-page-scroll">
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
  margin-top: 8%;
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