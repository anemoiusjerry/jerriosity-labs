<script>
export default {
  name: 'DarkModeToggleButton',
  props: {
    size: String
  },
  data() {
    return {
      isDark: false
    }
  },
  methods: {
    toggleMode() {
      if (this.isDark) {
        document.body.classList.remove('dark')
      }
      else {
        document.body.classList.add('dark')
      }
      this.isDark = !this.isDark
    }
  }
}
</script>

<template>
  <div @click="toggleMode" class="toggle-button" :class="{ day: !isDark }" :style="{ fontSize: size }"
    style="cursor: pointer;">
    <div class="moon" :class="{ sun: !isDark }"></div>
  </div>
</template>

<style scoped>
.toggle-button {
  --toggleHeight: 16em;
  --toggleWidth: 30em;
  --toggleBtnRadius: 10em;
  --bgColor--night: var(--dark-gray);
  --mooncolor: var(--off-white);

  /*change size of toggle with font-size*/
  font-size: 30%;
  position: relative;
  height: var(--toggleHeight);
  width: var(--toggleWidth);
  border-radius: var(--toggleHeight);
  transition: all 500ms ease-in-out;
  background: var(--bgColor--night);
}

.moon {
  position: absolute;
  display: block;
  border-radius: 50%;
  transition: all 400ms ease-in-out;

  top: 3em;
  left: 3em;
  transform: rotate(-75deg);
  width: var(--toggleBtnRadius);
  height: var(--toggleBtnRadius);
  background: var(--bgColor--night);
  box-shadow:
    3em 2.5em 0 0em var(--mooncolor) inset,
    rgba(255, 255, 255, 0.5) 0em -7em 0 -4.5em,
    rgba(255, 255, 255, 0.5) 3em 7em 0 -4.5em,
    rgba(255, 255, 255, 0.5) 2em 13em 0 -4em,
    rgba(255, 255, 255, 0.5) 6em 2em 0 -4.1em,
    rgba(255, 255, 255, 0.5) 8em 8em 0 -4.5em,
    rgba(255, 255, 255, 0.5) 6em 13em 0 -4.5em,
    rgba(255, 255, 255, 0.5) -4em 7em 0 -4.5em,
    rgba(255, 255, 255, 0.5) -1em 10em 0 -4.5em;
}

.sun {
  top: 4.5em;
  left: 18em;
  transform: rotate(0deg);
  width: 7em;
  height: 7em;
  background: var(--light-trim);
  box-shadow: 3em 3em 0 5em var(--light-trim) inset,
    0 -5em 0 -2.7em var(--light-trim),
    3.5em -3.5em 0 -3em var(--light-trim),
    5em 0 0 -2.7em var(--light-trim),
    3.5em 3.5em 0 -3em var(--light-trim),
    0 5em 0 -2.7em var(--light-trim),
    -3.5em 3.5em 0 -3em var(--light-trim),
    -5em 0 0 -2.7em var(--light-trim),
    -3.5em -3.5em 0 -3em var(--light-trim);
}

.day {
  background: var(--off-white);
}
</style>