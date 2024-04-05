<template>
    <div
        class="py-1 bg-[#F5F5F7] px-2 tracking-tighter flex justify-between text-[#4d4c4c] mb-3 text-[12px] sm:text-[16px] sm:px-10">
        <span class="font-semibold ">
            Servizi
        </span>
        <span class="text-[11px] sm:text-[14px]">
            <font-awesome-icon icon="fa-solid fa-ranking-star" />
        </span>
    </div>


    <!-- container cards -->
    <div class="overflow-x-auto scrollbar mb-12" v-if="services.length > 0">
        <div class="flex justify-start gap-10 sm:justify-center sm:gap-20 relative">
            <!-- cards -->
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
            colorLittleTitle: false,
            currentIndex: 0, // Indice corrente delle card visualizzate
            cardsToShow: 3 // Numero di card da visualizzare contemporaneamente
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

        // Metodo per scorrere avanti o indietro nell'array delle card
        scroll(direction) {
            const lastIndex = this.services.length - this.cardsToShow;
            if (direction === -1 && this.currentIndex > 0) {
                this.currentIndex--;
            } else if (direction === 1 && this.currentIndex < lastIndex) {
                this.currentIndex++;
            }
        }

    },

    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        this.showAllServices();
    },

    computed: {
        // Calcola l'array delle card da visualizzare in base all'indice corrente
        visibleServices() {
            const startIndex = this.currentIndex;
            const endIndex = startIndex + this.cardsToShow;
            return this.services.slice(startIndex, endIndex);
        }
    },
}
</script>

<style scoped>
.slide-item {
    opacity: 0;
    transition: opacity 1.5s ease;
}
</style>