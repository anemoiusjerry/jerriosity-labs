<script>
export default {
  name: 'SkillCard',
  props: {
    imgSrcs: Array,
    imgAlt: String,
    title: String,
    exp: String
  }
}
</script>

<template>
  <div class="card">
    <div class="card-body">
      <div class="card-front shadow-lg bg-white/50 dark:bg-light-gray">
        <div class="flex flex-row mb-3 justify-center items-center img-container">
          <div v-for="path in imgSrcs">
            <img :src="path" :alt="imgAlt" />
          </div>
        </div>
        <span class="text-sm text-dark-gray dark:text-off-white">{{ title }}</span>
      </div>

      <div class="card-back shadow-lg bg-white/50 dark:bg-light-gray">
        <span class="font-bold text-dark-gray dark:text-off-white">{{ exp }}</span>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
img {
  width: 4.5em;
}
.img-container {
  width: 5em;
  height: 5em;

}

.card {
  perspective: 800px;
  scroll-snap-align: center;
  @include breakpoint-down(small) {
    scroll-snap-align: start;
  }
}

.card-body {
  transition: transform 1s;
  transform-style: preserve-3d;

  .card:hover & {
    transform: rotateY(-180deg);
  }
}

.card-front, .card-back {
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10em;
  padding: 1.5em;
  border-radius: 0.7em;
}

.card-back {
  transform: rotateY(-180deg);
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
}
</style>