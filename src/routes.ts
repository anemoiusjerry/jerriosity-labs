import { createRouter, createWebHistory } from 'vue-router'
// project pages
import Home from './pages/home/Home.vue'
import StreamwiseDesc from './pages/projects/StreamwiseDesc.vue'
import RestoredToEdenDesc from './pages/projects/RestoredToEdenDesc.vue'
import RhombusAI from './pages/projects/RhombusAI.vue'
import JerriosityLabs from './pages/projects/JerriosityLabs.vue'
// article pages
import KoganDevBlog from './pages/articles/KoganDevBlog.vue'

// route pages
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '', component: Home},
    {path: '/projects/streamwise-di', component: StreamwiseDesc},
    {path: '/projects/restored-to-eden', component: RestoredToEdenDesc},
    {path: '/projects/rhombus-ai', component: RhombusAI},
    {path: '/projects/jerriosity-labs', component: JerriosityLabs},
    {path: '/articles/kgn-dev-blog', component: KoganDevBlog}
  ]
})