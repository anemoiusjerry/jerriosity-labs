<script>
import {EMAIL, NUMBER} from '../constants'
import AnimatedIcon from './AnimatedIcon.vue'
import DarkModeToggleButton from './DarkModeToggleButton.vue'

export default {
  name: 'NavHeader',
  components: {
    DarkModeToggleButton,
    AnimatedIcon
  },
  data() {
    return {
      contactEmail: EMAIL,
      contactNumber: NUMBER
    }
  }
}
</script>

<template>
  <nav class="fixed w-full top-0 start-0 z-20 bg-dark-gray dark:bg-off-white">
    <div class="mx-auto max-w-8xl px-2 px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex items-center">
          <img src="../assets/jlabs-logo.svg" class="mr-2 w-12"/>
          <h1 class="mr-4 text-2xl tracking-tight text-off-white dark:text-dark-gray" style="font-family: 'Rowdies', sans-serif;">Jerriosity Labs</h1>
          <dark-mode-toggle-button size="1.5px" />
        </div>

        <div>
          <animated-icon iconName="fa-brands fa-github" iconSize="2xl" urlLink="https://github.com/anemoiusjerry"
            class="text-off-white dark:text-dark-gray mx-2.5" />

          <animated-icon iconName="fa-brands fa-linkedin" iconSize="2xl"
            urlLink="https://www.linkedin.com/in/anemoiusjerry/" class="text-off-white dark:text-dark-gray mx-2.5" />

          <animated-icon iconName="fa-solid fa-envelope" iconSize="2xl" class="text-off-white dark:text-dark-gray mx-2.5"
            tooltipId="email-tooltip" :tooltipMsg="contactEmail" />

          <animated-icon iconName="fa-brands fa-whatsapp" iconSize="2xl" class="text-off-white dark:text-dark-gray mx-2.5"
            tooltipId="whatsapp-tooltip" :tooltipMsg="contactNumber" />
        </div>
      </div>
    </div>
  </nav>
</template>