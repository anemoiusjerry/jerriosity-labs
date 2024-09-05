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
  created() {
    // detect user prefered theme
    const lastTheme = localStorage.getItem('theme')
    // local storage only meant to be read by browser
    if (lastTheme) {
      this.isDark = lastTheme === 'dark'
    }
    // check system setting
    else {
      this.isDark = window.matchMedia('prefers-color-scheme:dark').matches
    }
    this.toggleMode()
  },
  methods: {
    toggleMode() {
      if (this.isDark) {
        document.body.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
      else {
        document.body.classList.add('dark')
        localStorage.setItem('theme', 'dark')
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

<style lang="scss" scoped>
$toggleHeight: 16em;
$toggleWidth: 30em;
$toggleBtnRadius: 10em;
$bgNight: $darkGray;
$moonColor: $offWhite;
$starColor: $offWhite;
$sunColor: $bloodOrange;

.toggle-button {

  /* change size of toggle with font-size */
  font-size: 30%;
  position: relative;
  height: $toggleHeight;
  width: $toggleWidth;
  border-radius: $toggleHeight;
  transition: all 500ms ease-in-out;
  background: $bgNight;
}

.moon {
  position: absolute;
  display: block;
  border-radius: 50%;
  transition: all 400ms ease-in-out;

  top: 3em;
  left: 3em;
  transform: rotate(-75deg);
  width: $toggleBtnRadius;
  height: $toggleBtnRadius;
  background: $bgNight;
  box-shadow:
    3em 2.5em 0 0em $moonColor inset,
    $starColor 0em -7em 0 -4.5em,
    $starColor 3em 7em 0 -4.5em,
    $starColor 2em 13em 0 -4em,
    $starColor 6em 2em 0 -4.1em,
    $starColor 8em 8em 0 -4.5em,
    $starColor 6em 13em 0 -4.5em,
    $starColor -4em 7em 0 -4.5em,
    $starColor -1em 10em 0 -4.5em;
}

.sun {
  top: 4.5em;
  left: 18em;
  transform: rotate(0deg);
  width: 7em;
  height: 7em;
  background: $sunColor;
  box-shadow: 3em 3em 0 5em $sunColor inset,
    0 -5em 0 -2.7em $sunColor,
    3.5em -3.5em 0 -3em $sunColor,
    5em 0 0 -2.7em $sunColor,
    3.5em 3.5em 0 -3em $sunColor,
    0 5em 0 -2.7em $sunColor,
    -3.5em 3.5em 0 -3em $sunColor,
    -5em 0 0 -2.7em $sunColor,
    -3.5em -3.5em 0 -3em $sunColor;
}

.day {
  background: $offWhite;
}
</style>