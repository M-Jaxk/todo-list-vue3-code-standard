import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/pending',
      name: 'pending',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PendingTodoView.vue'),
    },
    {
      path: '/done',
      name: 'done',
      component: () => import('../views/DoneTodoView.vue'),
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/CreateTodoView.vue'),
    },
  ],
})

export default router
