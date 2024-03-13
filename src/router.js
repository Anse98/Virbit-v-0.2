import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Service from './pages/Services.vue';
import Product from './pages/Products.vue';
import About from './pages/About.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },

        {
            path: '/services',
            name: 'services',
            component: Service
        },

        {
            path: '/products',
            name: 'products',
            component: Product
        },

        {
            path: '/about-us',
            name: 'about',
            component: About
        },

        //MODO PER DEFINIRE PATH NOT FOUND, SEMPRE IN FONDO
        // {
        //     path: '/:patchMatch(.*)*',
        //     name: 'not-found',
        //     component: Page404
        // }
    ]
})

export { router }

