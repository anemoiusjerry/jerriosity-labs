<script setup>
import { ref, onMounted } from 'vue'
import SkillCard from './components/SkillCard.vue'
import CardDeck from './components/CardDeck.vue'

const ICON_PATH = '/brandlogos'

const frontendCards = [
  {
    imgSrcs: [`${ICON_PATH}/react.svg`],
    imgAlt: 'react-icon',
    title: 'React',
    exp: '5+ years'
  },
  {
    imgSrcs: [`${ICON_PATH}/vue.svg`],
    imgAlt: "vue-icon",
    title: "Vue.js",
    exp: "1+ years"
  },
  {
    imgSrcs: [`${ICON_PATH}/typescript.svg`],
    imgAlt: "ts-icon",
    title: "TypeScript",
    exp: "3+ years"
  },
  {
    imgSrcs: [`${ICON_PATH}/tailwind.svg`],
    imgAlt: "tailwind-icon",
    title: "Tailwind CSS",
    exp: "1+ years"
  },
  {
    imgSrcs: [`${ICON_PATH}/bootstrap.svg`],
    imgAltz: "bootstrap-icon",
    title: "Bootstrap",
    exp: "4+ years"
  }
]

const backendCards = [
  {
    imgSrcs: [`${ICON_PATH}/dotnet.svg`],
    imgAlt: "dotnet-icon",
    title: ".NET",
    exp: "5+ years"
  },
  {
    imgSrcs: [`${ICON_PATH}/django.svg`],
    imgAlt: "django-icon",
    title: "Django",
    exp: "3+ years"
  },
  {
    imgSrcs: [`${ICON_PATH}/nodejs.svg`],
    imgAlt: "nodejs-icon",
    title: "Node.js",
    exp: "2+ years"
  }
]

const otherCards = [
  {
    imgSrcs: [`${ICON_PATH}/docker.svg`],
    imgAlt: "docker-icon",
    title: "Docker",
    exp: "3+ years"
  },
  {
    imgSrcs: [`${ICON_PATH}/azure.svg`],
    imgAlt: "azure-icon",
    title: "Azure Cloud",
    exp: "5+ years"
  },
  {
    imgSrcs: [`${ICON_PATH}/mysql.svg`],
    imgAlt: 'mysql-icon',
    title: 'MySQL',
    exp: '5+ years'
  },
  {
    imgSrcs: [`${ICON_PATH}/react-native.svg`],
    imgAlt: "react-native-icon",
    title: "React Native",
    exp: "3+ years"
  },
]

onMounted(() => {
  flipCards();
})

async function flipCards() {
  const cards = this.$el.querySelectorAll('.card');
  for (var i = 0; i < cards.length; i++) {
    cards[i].classList.add('flip');
    await new Promise(resolve => setTimeout(resolve, 50));
  }
}
</script>

<template>
  <section>
    <div class="flex flex-row justify-evenly items-center">
      <div class="ml-44">
        <h1 class="text-5xl font-bold mb-16">My Skills</h1>

        <div class="flex">
          <div class="absolute p-5 border-t-2 border-l-2 border-light-trim dark:border-sky-blue"></div>

          <p class="p-6 text-dark-gray dark:text-off-white">Looking for an engineer to improve or maintain your software stack? I am
            familiar with many frameworks and
            technologies. Hover over the cards to see my experience!
          </p>

          <p class="p-6 text-right text-dark-gray dark:text-off-white">
            My main stack is React, .NET, MySQL all hosted in Azure. However, for my side projects
            I like to test out a variety of frameworks so I can stay update with the latest technologies.
          </p>
          
          <div class="relative">
            <div class="absolute p-5 border-b-2 border-r-2 border-light-trim dark:border-sky-blue" style="bottom: 0px; right: 0px"></div>
          </div>
        </div>

        <p class="p-5 mt-20 shadow-lg bg-white text-dark-gray dark:bg-light-gray dark:text-off-white">
          This website for example, was coded entirely from scratch using Vue,
          styled with Tailwind CSS and hosted using Netlify.
        </p>
      </div>

      <div class="mx-24 flex flex-col">
        <div class="flex flex-col items-center mb-2">
          <h1 class="text-2xl">Frontend</h1>
          <card-deck :cardProps="frontendCards" areaWidth="450px" />
        </div>

        <div class="flex flex-col items-center mb-2">
          <h1 class="text-2xl">Backend</h1>
          <card-deck :cardProps="backendCards" areaWidth="450px" />
        </div>

        <div class="flex flex-col items-center">
          <h1 class="text-2xl">Other</h1>
          <card-deck :cardProps="otherCards" areaWidth="450px" />
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.card.flip {
  transform: rotateY(360deg);
  transition: transform 1.5s;
}
</style>