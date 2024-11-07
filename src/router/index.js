import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Jobs from '../views/Jobs/Jobs.vue'
import Jobdetails from '../views/Jobs/Jobdetails.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '../views/Jobs/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/job',
    name: 'job',
    component: Jobs
  },
  {
    path: '/jobdetails/:id',
    name: 'jobdetail',
    component: Jobdetails,
    props: true
  },
  {
    path: '/all-jobs',
    redirect: 'job'
  },
  {
    path: '/lphome',
    // name: lphome,
    redirect: "/"
  },
  // catchAll
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
