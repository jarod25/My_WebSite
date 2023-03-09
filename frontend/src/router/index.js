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
        name: 'cv',
        component: () => import('../views/CvView.vue')
    },
    {
        path: '/fr/portfolio',
        name: 'portfolio',
        component: () => import('../views/PortfolioView.vue')
    },
    {
        path: '/fr/contact',
        name: 'contact',
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
        name: 'cv',
        component: () => import('../views/CvView.vue')
    },
    {
        path: '/en/portfolio',
        name: 'portfolio',
        component: () => import('../views/PortfolioView.vue')
    },
    {
        path: '/en/contact',
        name: 'contact',
        component: () => import('../views/ContactView.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
