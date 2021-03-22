import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Reviews from '../views/Reviews.vue'
import Review from '../views/Review.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: Reviews
  },
  {
    path: '/reviews/:id',
    name: 'Review',
    component: Review
  },
  {
    path: '/about',
    name: 'About',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
//  base: process.env.BASE_URL,
  routes
})

export default router
