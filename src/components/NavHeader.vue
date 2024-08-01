<script>
import DarkModeToggleButton from './DarkModeToggleButton.vue'
import AnimatedIcon from './AnimatedIcon.vue'

export default {
  name: 'NavHeader',
  components: {
    DarkModeToggleButton,
    AnimatedIcon
  },
  data() {
    return {
      EMAIL: "anemoiusjerry@gmail.com",
      copied: false
    }
  },
  methods: {
    copyEmail() {
      navigator.clipboard.writeText(this.EMAIL)
      this.copied = true
    }
  }
}
</script>

<template>
  <nav class="fixed w-full top-0 start-0 z-20 bg-primary-dark">
    <div class="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex">
          <h1 class="font-bold">Jerriosity Labs</h1>
          <dark-mode-toggle-button style="margin-left: 10px;" size="1.5px" />
        </div>

        <div>
          <animated-icon iconName="fa-brands fa-github" iconSize="xl" urlLink="https://github.com/anemoiusjerry" />
          <animated-icon iconName="fa-brands fa-linkedin" iconSize="xl"
            urlLink="https://www.linkedin.com/in/anemoiusjerry/" />

          <animated-icon iconName="fa-solid fa-envelope" iconSize="xl" data-tooltip-target="tooltip-email"
            data-tooltip-placement="bottom" @click="copyEmail" @mouseleave="copied=false"/>
          <div id="tooltip-email" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-full opacity-0 tooltip">
            {{EMAIL}}
            <font-awesome-icon :icon="copied ? 'fa-solid fa-check' : 'fa-regular fa-copy'" class="ml-1" :class="copied && 'text-green-400'" />
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>
    </div>


  </nav>
</template>

<style scoped>
.icon {
  margin-left: 10px;
  margin-right: 10px;
}
</style>