import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Service from './pages/Services.vue';
import Product from './pages/Products.vue';
import About from './pages/About.vue';
import Developers from './pages/Services/Developers.vue';
import Sistemist from './pages/Services/Sistemist.vue';
import Integration from './pages/Services/Integration.vue';
import Analyst from './pages/Services/Analyst.vue';
import Cybersecurity from './pages/Services/Cybersecurity.vue';
import Gestional from './pages/Products/Gestional.vue';
import Internet from './pages/Products/Internet.vue';
import Gdpr from './pages/Products/Gdpr.vue';
import Telephony from './pages/Products/Telephony.vue';
import WhereWeAre from './pages/About/WhereWeAre.vue';
import Contact from './pages/About/Contact.vue';
import Informations from './pages/About/Informations.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        ///////////////////////////////// pagine principali
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
            path: '/about',
            name: 'about',
            component: About
        },

        //////////////////////////////// pagine secondarie

        // servizi
        {
            path: '/services/developers',
            name: 'developers',
            component: Developers
        },

        {
            path: '/services/system-engineers',
            name: 'sistemists',
            component: Sistemist
        },

        {
            path: '/services/integration',
            name: 'integration',
            component: Integration
        },

        {
            path: '/services/analyst',
            name: 'analyst',
            component: Analyst
        },

        {
            path: '/services/cybersecurity',
            name: 'cybersecurity',
            component: Cybersecurity
        },

        // prodotti
        {
            path: '/products/gestional',
            name: 'gestional',
            component: Gestional
        },

        {
            path: '/products/internet',
            name: 'internet',
            component: Internet
        },

        {
            path: '/products/gdpr',
            name: 'gdpr',
            component: Gdpr
        },

        {
            path: '/products/telephony',
            name: 'telephony',
            component: Telephony
        },

        //about
        {
            path: '/about/where-we-are',
            name: 'whereWeAre',
            component: WhereWeAre
        },

        {
            path: '/about/contact',
            name: 'contact',
            component: Contact
        },

        {
            path: '/about/informations',
            name: 'Informations',
            component: Informations
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

