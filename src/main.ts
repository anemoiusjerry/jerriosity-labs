import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './index.css'
import './scss/styles.scss' // ensure this is last

import 'flowbite'
// font awesome icon install
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, fab);

// pages
import Home from './pages/home/Home.vue'
import StreamwiseDesc from './pages/projects/StreamwiseDesc.vue'
import RestoredToEdenDesc from './pages/projects/RestoredToEdenDesc.vue'
import RhombusAI from './pages/projects/RhombusAI.vue'
import JerriosityLabs from './pages/projects/JerriosityLabs.vue'

// route pages
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '', component: Home},
    {path: '/projects/streamwise-di', component: StreamwiseDesc},
    {path: '/projects/restored-to-eden', component: RestoredToEdenDesc},
    {path: '/projects/rhombus-ai', component: RhombusAI},
    {path: '/projects/jerriosity-labs', component: JerriosityLabs}
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(savedPosition)
    if (savedPosition) {
      return savedPosition
    }
    else {
      return {top:0}
    }
  }
})

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
