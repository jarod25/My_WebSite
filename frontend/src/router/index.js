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
        children: [
            {
                path: '/moi',
                name: 'moi',
                component: () => import('../views/FrAboutMeView.vue')
            },
            {
                path: '/cv',
                name: 'cv',
                component: () => import('../views/FrCvView.vue')
            },
            {
                path: '/portfolio',
                name: 'portfolio',
                component: () => import('../views/FrPortfolioView.vue')
            }
        ],
    },
    {
        path: '/en',
        name: 'en',
        component: () => import('../views/EnView.vue'),
        children: [
            {
                path: '/moi',
                name: 'moi',
                component: () => import('../views/EnAboutMeView.vue')
            },
            {
                path: '/cv',
                name: 'cv',
                component: () => import('../views/EnCvView.vue')
            },
            {
                path: '/portfolio',
                name: 'portfolio',
                component: () => import('../views/EnPortfolioView.vue')
            }
        ],
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
