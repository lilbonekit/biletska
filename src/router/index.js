import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/pages/HomePage/HomePage.vue'
import BasicKnowledgePage from '@/pages/BasicKnowledgePage/BasicKnowledgePage.vue'
import AdaptivePage from '@/pages/AdaptivePage/AdaptivePage.vue'
import FlexGridPag from '@/pages/FlexGridPage/FlexGridPage.vue'
import TipsPage from '@/pages/TipsPage/TipsPage.vue'
import MorePageHero from '@/pages/MorePage/components/MorePageHero.vue'
import NotFoundedPage from '@/pages/NotFoundedPage/NotFoundedPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'home'
  },
  {
    path: '/basic-knowledge',
    component: BasicKnowledgePage,
    name: 'basic-knowledge'
  },
  {
    path: '/flex-grid',
    component: FlexGridPag,
    name: 'flex-grid'
  },
  {
    path: '/adaptive',
    component: AdaptivePage,
    name: 'adaptive'
  },
  {
    path: '/tips',
    component: TipsPage,
    name: 'tips'
  },
  {
    path: '/source',
    component: MorePageHero,
    name: 'source'
  },
  {
    path: '*',
    component: NotFoundedPage,
    name: 'not-founded'
  }
]

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router