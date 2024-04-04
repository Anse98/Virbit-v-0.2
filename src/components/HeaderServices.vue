<template>
    <div class="py-1 bg-[#F5F5F7] px-2 tracking-tighter flex justify-between text-[#4d4c4c] mb-3 text-[12px] sm:hidden">
        <span class="font-semibold ">
            Servizi
        </span>
        <span class="text-[11px]">
            <font-awesome-icon icon="fa-solid fa-ranking-star" />
        </span>
    </div>

    <!-- little services cards -->
    <div class="overflow-x-auto scrollbar" v-if="services.length > 0">
        <div class="flex justify-start gap-10 sm:justify-center sm:gap-20 mb-10">
            <router-link v-for="(service, index) in services" :key="index" :to="service.routeName">
                <LittleSlotLight class="slide-item h-[100%]"
                    :style="{ 'transition-delay': index * 100 + 'ms', 'opacity': service.visible ? '1' : '0' }">
                    <div>
                        <img :src="service.img" alt="">
                    </div>

                    <div>
                        <span>{{ service.title }}</span>
                    </div>
                </LittleSlotLight>
            </router-link>
        </div>
    </div>
</template>

<script>
import LittleSlotLight from '../components/slots/LittleSlotLight.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
    components: {
        LittleSlotLight,
    },
    data() {
        return {
            services: [
                {
                    title: "Sistemisti",
                    img: "/img/services/sistemist-2.png",
                    visible: false,
                    routeName: '/services/system-engineers'
                },
                {
                    title: "Integrazione",
                    img: "/img/services/integration-2.png",
                    visible: false,
                    routeName: '/services/integration'
                },
                {
                    title: "Analisti",
                    img: "/img/services/analyst.png",
                    visible: false,
                    routeName: '/services/analyst'
                },
                {
                    title: "Cybersecurity",
                    img: "/img/services/cybersecurity-2.png",
                    visible: false,
                    routeName: '/services/cybersecurity'
                },
                {
                    title: "Sviluppatori",
                    img: "/img/services/developers-2.png",
                    visible: false,
                    routeName: '/services/developers'
                },
            ],

            titleShow: false,
            subTitleShow: false,
            colorLittleTitle: false
        };
    },
    methods: {
        // animazione sui servizi
        showService(index) {
            setTimeout(() => {
                this.services[index].visible = true;
            }, index * 100); // delay animazione
        },

        showAllServices() {
            this.services.forEach((service, index) => {
                this.showService(index);
            });
        },
    },

    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        this.showAllServices();
    }
}
</script>

<style scoped>
.slide-item {
    opacity: 0;
    transition: opacity 1.5s ease;
}
</style>