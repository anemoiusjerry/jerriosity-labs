<script>
import DarkModeToggleButton from './DarkModeToggleButton.vue'
import AnimatedIcon from './AnimatedIcon.vue'

export default {
  name: 'NavHeader',
  components: {
    DarkModeToggleButton,
    AnimatedIcon
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
          <animated-icon iconName="fa-brands fa-linkedin" iconSize="xl" urlLink="https://www.linkedin.com/in/anemoiusjerry/" />
          <animated-icon iconName="fa-solid fa-envelope" iconSize="xl" popupMsg="anemoiusjerry@gmail.comefwfewewf" />


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