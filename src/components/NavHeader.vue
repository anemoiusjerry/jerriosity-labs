<script setup>
import { ref } from 'vue'
import { EMAIL, NUMBER, GITHUB_URL, LINKEDIN_URL } from '../constants'
import AnimatedIcon from './AnimatedIcon.vue'
import DarkModeToggleButton from './DarkModeToggleButton.vue'

const props = defineProps(['float'])
const github = ref(GITHUB_URL)
const linkedin = ref(LINKEDIN_URL)
const contactEmail = ref(EMAIL)
const contactNumber = ref(NUMBER)

const copiedEmail = ref(false);
const copiedNumber = ref(false);

function copyEmail() {
  copiedEmail.value = true;
  navigator.clipboard.writeText(contactEmail.value);
  setTimeout(() => {
    copiedEmail.value = false;
  }, 1200);
}

function copyNumber() {
  copiedNumber.value = true;
  navigator.clipboard.writeText(contactNumber.value);
  setTimeout(() => {
    copiedNumber.value = false;
  }, 1200);
}

</script>

<!-- Toggles between floating and full -->
<template>
  <div class="flex justify-center">
    <nav class="fixed z-20 transition duration-700 ease-in-out"
      :class="float ? 'navbar-float bg-dark-gray/85 dark:bg-off-white/75' : 'navbar-full'">

      <div class="flex flex-wrap items-center justify-between mx-auto">
        <div class="flex items-center w-max">
          <a href="/" class="inline-flex">
            <img src="/jlabs-logo.svg" :class="float ? 'logo-float' : 'logo-full'" />
            <h5 class="hide-for-mobile tracking-tight text-off-white dark:text-dark-gray"
              :class="float ? 'mr-3 font-bold text-lg' : 'mr-6'">
              {{ float ? 'J-Labs' : 'Jerriosity Labs' }}
            </h5>
          </a>
          <dark-mode-toggle-button size="1.5px" />
        </div>

        <div class="hide-for-mobile">
          <animated-icon iconName="fa-brands fa-github" :iconSize="float ? 'xl' : '2xl'" :urlLink="GITHUB_URL"
            class="text-off-white dark:text-dark-gray" :class="float ? 'mx-1.5' : 'mx-2.5'" />

          <animated-icon iconName="fa-brands fa-linkedin" :iconSize="float ? 'xl' : '2xl'" :urlLink="LINKEDIN_URL"
            class="text-off-white dark:text-dark-gray" :class="float ? 'mx-1.5' : 'mx-2.5'" />

          <animated-icon iconName="fa-solid fa-envelope" :iconSize="float ? 'xl' : '2xl'"
            class="text-off-white dark:text-dark-gray" :class="float ? 'mx-1.5' : 'mx-2.5'" tooltipId="email-tooltip"
            :tooltipMsg="contactEmail" />

          <animated-icon iconName="fa-brands fa-whatsapp" :iconSize="float ? 'xl' : '2xl'"
            class="text-off-white dark:text-dark-gray" :class="float ? 'ml-1.5 mr-2.5' : 'mx-2.5'"
            tooltipId="whatsapp-tooltip" :tooltipMsg="contactNumber" />
        </div>

        <!-- hamburger menu for mobile -->
        <button class="hide-for-desktop" data-collapse-toggle="navbar-hamburger" type="button"
          aria-controls="navbar-hamburger" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <font-awesome-icon icon="fa-solid fa-bars" size="xl"
            class="hover:text-blood-orange dark:hover:text-sky-blue" />
        </button>

        <div class="hide-for-desktop hidden w-full" id="navbar-hamburger">
          <ul class="flex flex-col mt-4 text-off-white dark:text-dark-gray">
            <li class="hover:bg-light-gray dark:hover:bg-white rounded-lg">
              <a :href="GITHUB_URL" target="_blank" class="block py-2 px-3">
                <font-awesome-icon icon="fa-brands fa-github" size="lg" class="mr-2" />
                GitHub
              </a>
            </li>
            <li class="hover:bg-light-gray dark:hover:bg-white rounded-lg">
              <a :href="LINKEDIN_URL" target="_blank" class="block py-2 px-3">
                <font-awesome-icon icon="fa-brands fa-linkedin" size="lg" class="mr-2" />
                LinkedIn
              </a>
            </li>
            <li class="hover:bg-light-gray dark:hover:bg-white rounded-lg">
              <div @click="copyEmail" class="py-2 px-3 flex justify-between cursor-pointer">
                <div>
                  <font-awesome-icon icon="fa-solid fa-envelope" size="lg" class="mr-2" />
                  Email
                </div>
                <transition enter-active-class="transition-opacity duration-500 ease-in-out"
                  leave-active-class="transition-opacity duration-500 ease-in-out" enter-from-class="opacity-0"
                  enter-to-class="opacity-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                  <span v-if="copiedEmail">copied!</span>
                </transition>
              </div>
            </li>
            <li class="hover:bg-light-gray dark:hover:bg-white rounded-lg">
              <div @click="copyNumber" class="py-2 px-3 flex justify-between cursor-pointer">
                <div>
                  <font-awesome-icon icon="fa-brands fa-whatsapp" size="lg" class="mr-2" />
                  WhatsApp
                </div>
                <transition enter-active-class="transition-opacity duration-500 ease-in-out"
                  leave-active-class="transition-opacity duration-500 ease-in-out" enter-from-class="opacity-0"
                  enter-to-class="opacity-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                  <span v-if="copiedNumber">copied!</span>
                </transition>
              </div>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.logo-full {
  margin-left: 0.6em;
  margin-right: 1em;
  width: 3em;

  @include breakpoint-down(small) {
    margin-left: 0;
  }
}

.logo-float {
  margin-left: 0.75em;
  margin-right: 0.5em;
  width: 2em;
}
</style>