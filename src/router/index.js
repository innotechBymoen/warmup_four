import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CartPage from '@/views/CartPage.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage
  }
]

const router = new VueRouter({
  routes
})

export default router
