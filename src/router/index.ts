import AddTripPage from '@/views/AddTripPage.vue';
import GeolocationPage from '@/views/GeolocationPage.vue';
import LoginPage from '@/views/LoginPage.vue';
import SignUpPage from '@/views/SignUpPage.vue';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUpPage
  },
  {
    path: '/geolocation',
    name: 'Geolocation',
    component: GeolocationPage
  },
  {
    path: '/addTrip',
    name: 'AddTrip',
    component: AddTripPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
