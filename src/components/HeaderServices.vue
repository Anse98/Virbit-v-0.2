<template>

    <!-- container cards -->
    <div class="flex mb-12 justify-center relative">

        <!-- freccetta sinistra -->
        <div class="flex items-center border-r-[1px] border-[#343434] px-2 sm:hidden fade-opacity"
            @click="scrollCards('left')" ref="leftArrow" id="leftArrow" :class="{ 'opacity-0': firstCardVisible }">
            <font-awesome-icon icon="fa-solid fa-chevron-left" />
        </div>

        <div class="overflow-x-auto scrollbar flex gap-10 sm:justify-center sm:gap-16 relative"
            v-if="services.length > 0" ref="scrollContainer" @scroll="checkCardVisibility">

            <!-- cards -->
            <router-link v-for="(service, index) in services" :key="index" :to="service.routeName" class="card-item">
                <LittleSlotLight class="slide-item h-[100%]"
                    :style="{ 'transition-delay': index * 100 + 'ms', 'opacity': service.visible ? '1' : '0' }">
                    <div class="w-[60px]">
                        <img :src="service.img" alt="">
                    </div>

                    <div class="text-[#4d4c4c]">
                        <span>{{ service.title }}</span>
                    </div>
                </LittleSlotLight>
            </router-link>

        </div>

        <!-- freccetta destra -->
        <div class="flex items-center border-l-[1px] border-[#343434] px-2 sm:hidden fade-opacity"
            @click="scrollCards('right')" :class="{ 'opacity-0': lastCardVisible }" ref="rightArrow">
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
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
            firstCardVisible: true,
            lastCardVisible: false,
            currentPageService: '',
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

        scrollCards(direction) {
            const container = document.querySelector('.scrollbar ');
            const scrollAmount = 200; // Change this value as per your requirement

            if (direction === 'left') {
                const currentScroll = container.scrollLeft;
                gsap.to(container,
                    {
                        scrollLeft: Math.max(currentScroll - scrollAmount, 0),
                        duration: 0.5,
                    });

            } else if (direction === 'right') {
                gsap.to(container,
                    {
                        scrollLeft: '+=' + scrollAmount,
                        duration: 0.5,
                    });
            }
        },

        checkCardVisibility() {
            const containerRect = this.$refs.scrollContainer.getBoundingClientRect();
            const lastCardRect = this.$refs.scrollContainer.querySelector('.card-item:last-child').getBoundingClientRect();

            // ho aggiunto il piu 1 per calcolare un po di margine prima di far sparire la freccia
            if (lastCardRect.right <= containerRect.right + 1) {
                this.lastCardVisible = true;
            } else {
                this.lastCardVisible = false;
            }

            const firstCardRect = this.$refs.scrollContainer.querySelector('.card-item:first-child').getBoundingClientRect();

            if (firstCardRect.left >= containerRect.left) {
                this.firstCardVisible = true;
            } else {
                this.firstCardVisible = false;
            }
        },

    },

    mounted() {
        gsap.registerPlugin(ScrollTrigger);

        this.showAllServices();

        this.checkCardVisibility();
    },
}
</script>

<style scoped>
.slide-item {
    opacity: 0;
    transition: opacity 1.5s ease;
}

.scrolling-effect {
    transition: transform 0.5s ease-in-out;
}
</style>