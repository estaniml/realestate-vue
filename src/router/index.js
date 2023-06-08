import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogIn from '../views/LogIn.vue'
import SignIn from '../views/SignIn.vue'
import CurrentProperty from '../components/CurrentProperty.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/property/:id',
        name: 'Property',
        component: CurrentProperty,
    },
    {
        path: '/login',
        name: 'Login',
        component: LogIn,
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: SignIn,
    },
  
  ]
})

export default router