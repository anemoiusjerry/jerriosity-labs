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
      <div class="card-front bg-black/50">
        <div class="flex flex-row mb-3">
          <div v-for="path in imgSrcs">
            <img class="w-20 h-20" :src="path" :alt="imgAlt" />
          </div>
        </div>
        <h1 class="text-sm text-off-white">{{ title }}</h1>
      </div>

      <div class="card-back bg-black/50">
        <h1 class="font-bold text-off-white">{{ exp }}</h1>
      </div>
    </div>
  </div>

</template>

<style scoped>
.card {
  perspective: 800px;
  margin: 10px;
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
  padding: 25px;
  border-radius: 10px;
}

.card-back {
  transform: rotateY(-180deg);
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
}
</style>