<template>
    <div class="bg-[#414141] px-2  tracking-tight flex justify-between items-center text-[#faf8f8] mb-3 text-[15px] sm:text-[16px] sm:px-10 z-20"
        id="headerService">
        <span class="font-semibold flex gap-4 items-center" id="containerHeaderSticky">
            <span>Servizi</span>
            <span class="font-normal text-[14px] sm:text-[15px] text-[#dcdcdc] md:hidden" id="currentPageTitle">
                {{ currentPageService }}
            </span>
        </span>
        <span class="text-[13px] sm:text-[14px]">
            <font-awesome-icon icon="fa-solid fa-ranking-star" />
        </span>
    </div>

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
            <router-link v-for="(service, index) in services" :key="index" :to="service.routeName" class="card-item"
                @click="setCurrentPage(service.title)">
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

        setCurrentPage(title) {
            this.currentPageService = title

            // Salva la variabile currentPage nell'LocalStorage del browser
            localStorage.setItem('currentPageService', title);
        },

        animateHeaderService() {
            const headerService = document.getElementById('headerService');
            const headerServiceTitle = document.getElementById('currentPageTitle')
            const containerHeaderSticky = document.getElementById('containerHeaderSticky')
            if (headerService) {
                if (window.scrollY > 300) {
                    headerService.classList.add('scrolled-sticky-header');
                    headerServiceTitle.classList.add('color-black', 'page-current-title');
                    containerHeaderSticky.classList.add('flex-col');
                    containerHeaderSticky.classList.remove('gap-4');
                } else {
                    headerService.classList.remove('scrolled-sticky-header');
                    headerService.classList.add('restore-sticky-header');
                    headerServiceTitle.classList.remove('color-black', 'page-current-title');
                    containerHeaderSticky.classList.remove('flex-col');
                    containerHeaderSticky.classList.add('gap-4');
                }
            }
        }

    },

    mounted() {
        gsap.registerPlugin(ScrollTrigger);

        this.showAllServices();

        this.checkCardVisibility();

        // eventlistener per animare barra header-service
        window.addEventListener('scroll', this.animateHeaderService)

        // Controlla se la variabile currentPage è già stata salvata nell'LocalStorage
        const savedPage = localStorage.getItem('currentPageService');
        if (savedPage) {
            // Se presente, imposta la variabile currentPage al valore salvato
            this.currentPageService = savedPage;
        } else {
            // Altrimenti, imposta la variabile currentPage al valore predefinito
            this.currentPageService = '';
        }
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