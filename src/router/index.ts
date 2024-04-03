import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search_plant',
      name: 'search_plant',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Search_Plant.vue')
    },
    {
      path: '/search_herbarium',
      name: 'search_herbarium',
      component: () => import('../views/Search_Herbarium.vue')
    }
  ]
})

export default router
