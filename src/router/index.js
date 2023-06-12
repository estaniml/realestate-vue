import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/property/:slug',
        name: 'Property',
        component: () => import(/* webpackChunkName: "AddProperty" */ '../components/CurrentProperty.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "AddProperty" */ '../views/LoginView.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "AddProperty" */ '../views/RegisterView.vue'),
    },
    {
        path: '/add-property',
        name: 'AddProperty',
        component: () => import(/* webpackChunkName: "AddProperty" */ '../components/AddProperty.vue'),
    },
  
  ]
})

export default router