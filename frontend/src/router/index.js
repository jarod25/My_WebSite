import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/fr'
    },
    {
        path: '/fr',
        name: 'fr',
        component: () => import('../views/HomeView.vue'),
    },
    {
        path: '/fr/a-propos',
        name: 'A propos',
        component: () => import('../views/AboutMeView.vue')
    },
    {
        path: '/fr/cv',
        name: 'cv français',
        component: () => import('../views/CvView.vue')
    },
    {
        path: '/fr/portfolio',
        name: 'portfolio français',
        component: () => import('../views/PortfolioView.vue')
    },
    {
        path: '/fr/contact',
        name: 'contact français',
        component: () => import('../views/ContactView.vue')
    },
    {
        path: '/en',
        name: 'en',
        component: () => import('../views/HomeView.vue'),
    },
    {
        path: '/en/about',
        name: 'about',
        component: () => import('../views/AboutMeView.vue')
    },
    {
        path: '/en/cv',
        name: 'cv english',
        component: () => import('../views/CvView.vue')
    },
    {
        path: '/en/portfolio',
        name: 'portfolio english',
        component: () => import('../views/PortfolioView.vue')
    },
    {
        path: '/en/contact',
        name: 'contact english',
        component: () => import('../views/ContactView.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
