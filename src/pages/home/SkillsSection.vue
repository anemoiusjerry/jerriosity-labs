<script setup>
import { onMounted } from 'vue'
import CardDeck from '../../components/CardDeck.vue'
import StickyNote from '../../components/StickyNote.vue';

const ICON_PATH = '/brands'

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
  //flipCards();
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
    <div id="skills-section" class="flex">
      <div id="left-content">
        <h3 class="font-bold mb-16">My Skills</h3>
        <div id="left-text" class="flex mb-20">
          <div class="relative">
            <div class="top-0 left-0 absolute p-5 border-t-2 border-l-2 border-blood-orange dark:border-sky-blue">
            </div>
          </div>
          <p class="p-6 text-dark-gray dark:text-off-white">Looking for an engineer to develop or maintain your
            software
            services? I am familiar with many frameworks and technologies. Hover over the cards to see my experience!
          </p>

          <p class="p-6 text-right text-dark-gray dark:text-off-white">
            My main stack is React, .NET, MySQL all hosted in Azure. However, for my side projects
            I like to test out a variety of frameworks so I can stay update with the latest technologies.
          </p>
          <div class="relative">
            <div class="absolute p-5 border-b-2 border-r-2 border-blood-orange dark:border-sky-blue"
              style="bottom: 0px; right: 0px"></div>
          </div>
        </div>

        <sticky-note text="This website for example, was designed and coded entirely from scratch using Vue,
          styled with Tailwind CSS and hosted using Cloudflare."/>
      </div>

      <div class="flex flex-col">
        <div class="flex flex-col items-center mb-2">
          <span class="text-2xl">Frontend</span>
          <card-deck :cardProps="frontendCards" />
        </div>

        <div class="flex flex-col items-center mb-2">
          <span class="text-2xl">Backend</span>
          <card-deck :cardProps="backendCards"/>
        </div>

        <div class="flex flex-col items-center">
          <span class="text-2xl">Other</span>
          <card-deck :cardProps="otherCards"/>
        </div>

      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.card.flip {
  transform: rotateY(360deg);
  transition: transform 1.5s;
}

h3 {
  @include breakpoint-down(small) {
    text-align: center;
  }
}

#skills-section {
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @include breakpoint-down(small) {
    margin-left: 5%;
    margin-right: 5%;
    flex-direction: column;
  }
}

#left-content {
  margin-right: 10%;
  @include breakpoint-down(small) {
    margin-bottom: 3em;
    margin-right: 0;
  }
}

#left-text {
  @include breakpoint-down(small) {
    flex-direction: column;
  }
}
</style>