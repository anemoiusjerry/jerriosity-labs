<script>
import SkillCard from './components/SkillCard.vue'

export default {
  name: 'SkillsSection',
  components: {
    SkillCard
  },
  data() {
    return { iconPath: '/src/assets/tech icons' }
  }
}
</script>

<template>
  <section>
    <div class="mx-auto">
      <div class="flex flex-inline">
        <div class="flex flex-col items-center mr-16">
          <h1 class="text-2xl mb-4">Frontend</h1>
          <div class="grid grid-cols-3 gap-5">
            <skill-card :imgSrcs="[`${iconPath}/react.svg`]" imgAlt="react-icon" title="React" />
            <skill-card :imgSrcs="[`${iconPath}/vue.svg`]" imgAlt="vue-icon" title="Vue.js" />
            <skill-card :imgSrcs="[`${iconPath}/html.svg`, `${iconPath}/css.svg`]" imgAlt="html-css-icon"
              title="HTML & CSS" />
            <skill-card :imgSrcs="[`${iconPath}/typescript.svg`]" imgAlt="ts-icon" title="TypeScript" />
            <skill-card :imgSrcs="[`${iconPath}/javascript.svg`]" imgAlt="js-icon" title="JavaScript" />
          </div>
        </div>

        <div class="flex flex-col items-center">
          <h1 class="text-2xl mb-4">Backend</h1>
          <div class="grid grid-cols-3 gap-5">
            <skill-card :imgSrcs="[`${iconPath}/dotnet.svg`]" imgAlt="dotnet-icon" title=".NET" />
            <skill-card :imgSrcs="[`${iconPath}/django.svg`]" imgAlt="django-icon" title="Django" />
            <skill-card :imgSrcs="[`${iconPath}/nodejs.svg`]" imgAlt="nodejs-icon" title="Node.js" />
          </div>
        </div>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
      <div class="flex flex-col items-start">
        <div class="grid grid-cols-6 gap-5">
          <skill-card :imgSrcs="[`${iconPath}/docker.svg`]" imgAlt="docker-icon" title="Docker" />
          <skill-card :imgSrcs="[`${iconPath}/azure.svg`]" imgAlt="azure-icon" title="Microsoft Azure" />
          <skill-card :imgSrcs="[`${iconPath}/react-native.svg`]" imgAlt="react-native-icon" title="React Native" />
          <skill-card :imgSrcs="[`${iconPath}/tailwind.svg`]" imgAlt="tailwind-icon" title="Tailwind CSS" />
          <skill-card :imgSrcs="[`${iconPath}/bootstrap.svg`]" imgAlt="bootstrap-icon" title="Bootstrap" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.bubble {
  border-radius: 100%;
  background-color: gainsboro;
  width: 5em;
  height: 5em;
  display: flex;
  justify-content: center;
  padding: 10px;
}
</style>