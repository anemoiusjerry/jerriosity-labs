<script>
export default {
  props: {
    text: String
  },
  data() {
    return {
      displayedText: []
    };
  },
  mounted() {
    this.typeText();
  },
  methods: {
    async typeText() {
      for (let i = 0; i < this.text.length; i++) {
        this.displayedText.push(this.text[i]);
        await this.sleep(100);  // Adjust the speed of typing here
      }
    },
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  }
}
</script>

<template>
  <div class="font-light text-white mb-8">
    <div class="text-2xl tracking-tight font-mono">
      <span v-for="(char, index) in displayedText" :key="index">{{ char }}</span>
      <span class="border-r-2 border-white animate-blink">&nbsp;</span>
    </div>
  </div>
</template>

<style>
@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

.animate-blink {
  animation: blink 1s step-start infinite;
}
</style>