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
        component: () => import('../views/FrView.vue'),
    },
    {
        path: '/fr/a-propos',
        name: 'A propos',
        component: () => import('../views/FrAboutMeView.vue')
    },
    {
        path: '/fr/cv',
        name: 'cv',
        component: () => import('../views/FrCvView.vue')
    },
    {
        path: '/fr/portfolio',
        name: 'portfolio',
        component: () => import('../views/FrPortfolioView.vue')
    },
        {
            path: '/en',
            name: 'en',
            component: () => import('../views/EnView.vue'),
        },
        {
            path: '/en/about',
            name: 'about',
            component: () => import('../views/EnAboutMeView.vue')
        },
        {
            path: '/en/cv',
            name: 'cv',
            component: () => import('../views/EnCvView.vue')
        },
        {
            path: '/en/portfolio',
            name: 'portfolio',
            component: () => import('../views/EnPortfolioView.vue')
        }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
