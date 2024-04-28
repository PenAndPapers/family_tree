import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/pilagan-dukey-clan',
      name: 'Pilagan Dukey Clan',
      component: () => import('../views/PilaganDukeyClan.vue')
    },
    {
      path: '/awigan-clan',
      name: 'Awigan Clan',
      component: () => import('../views/AwiganClan.vue')
    }
  ]
})

export default router
