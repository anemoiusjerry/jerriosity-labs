<script setup>
import { defineProps, reactive, ref } from 'vue'
import { EMAIL, NUMBER } from '../constants'
import AnimatedIcon from './AnimatedIcon.vue'
import DarkModeToggleButton from './DarkModeToggleButton.vue'

const props = defineProps(['float'])
const contactEmail = ref(EMAIL)
const contactNumber = ref(NUMBER)
</script>

<!-- Toggles between floating and full -->
<template>
  <div class="flex justify-center">
    <nav class="fixed z-20 transition duration-700 ease-in-out"
      :class="float ? 'float bg-dark-gray/85 dark:bg-off-white/75' : 'full'">

      <div class="flex items-center justify-between">
        <div class="flex items-center w-max">
          <img src="/public/jlabs-logo.svg" :class="float ? 'ml-3 mr-1.5 w-9' : 'mx-2.5 w-12'" />
          <h1 class="tracking-tight text-off-white dark:text-dark-gray"
            :class="float ? 'mr-3 font-bold text-lg' : 'mr-6 text-2xl'">{{ float ? 'J-Labs' : 'Jerriosity Labs' }}</h1>
          <dark-mode-toggle-button size="1.5px" />
        </div>

        <div>
          <animated-icon iconName="fa-brands fa-github" :iconSize="float ? 'xl' : '2xl'"
            urlLink="https://github.com/anemoiusjerry" class="text-off-white dark:text-dark-gray"
            :class="float ? 'mx-1.5' : 'mx-2.5'" />

          <animated-icon iconName="fa-brands fa-linkedin" :iconSize="float ? 'xl' : '2xl'"
            urlLink="https://www.linkedin.com/in/anemoiusjerry/" class="text-off-white dark:text-dark-gray"
            :class="float ? 'mx-1.5' : 'mx-2.5'" />

          <animated-icon iconName="fa-solid fa-envelope" :iconSize="float ? 'xl' : '2xl'"
            class="text-off-white dark:text-dark-gray" :class="float ? 'mx-1.5' : 'mx-2.5'" tooltipId="email-tooltip"
            :tooltipMsg="contactEmail" />

          <animated-icon iconName="fa-brands fa-whatsapp" :iconSize="float ? 'xl' : '2xl'"
            class="text-off-white dark:text-dark-gray" :class="float ? 'ml-1.5 mr-2.5' : 'mx-2.5'" tooltipId="whatsapp-tooltip"
            :tooltipMsg="contactNumber" />
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
nav.full {
  width: 100%;
  top: 0px;
  inset-inline-start: 0px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: var(--off-white);
  background-color: var(--dark-gray);
}

body.dark nav.full {
  color: var(--dark-gray);
  background-color: var(--off-white);
}

nav.float {
  width: 450px;
  padding: 8px;
  margin-top: 20px;
  backdrop-filter: blur(4px);
  border-radius: 100px;
  color: var(--off-white);
}

body.dark nav.float {
  color: var(--dark-gray);
}
</style>