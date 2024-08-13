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
  <nav class="fixed w-full top-0 start-0 z-20 bg-off-white">
    <div class="mx-auto max-w-8xl px-2 px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex">
          <h1 class="font-bold text-dark-gray">Jerriosity Labs</h1>
          <dark-mode-toggle-button style="margin-left: 10px;" size="1.5px" />
        </div>

        <div>
          <animated-icon iconName="fa-brands fa-github" iconSize="2xl" urlLink="https://github.com/anemoiusjerry"
            class="text-dark-gray mx-3" />

          <animated-icon iconName="fa-brands fa-linkedin" iconSize="2xl"
            urlLink="https://www.linkedin.com/in/anemoiusjerry/" class="text-dark-gray mx-3" />

          <animated-icon iconName="fa-regular fa-envelope" iconSize="2xl" class="text-dark-gray mx-3"
            tooltipId="email-tooltip" :tooltipMsg="contactEmail" />

          <animated-icon iconName="fa-brands fa-whatsapp" iconSize="2xl" class="text-dark-gray mx-3"
            tooltipId="whatsapp-tooltip" :tooltipMsg="contactNumber" />
        </div>
      </div>
    </div>
  </nav>
</template>