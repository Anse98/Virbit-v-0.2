<template>
    <div class="bg-[#414141] px-2 tracking-tight flex justify-between text-[#faf8f8] mb-3 text-[15px] sm:text-[16px] sm:px-10 sticky top-0 left-0 right-0 z-20 items-center"
        id="headerAbout">
        <span class="font-semibold flex gap-4 items-center" id="containerHeaderSticky">
            <span>About</span>
            <span class="font-normal text-[14px] sm:text-[15px] text-[#dcdcdc] md:hidden" id="currentPageTitleAbout">
                {{ currentPageAbout }}
            </span>
        </span>
        <span class="text-[13px] sm:text-[14px]">
            <font-awesome-icon icon="fa-solid fa-tower-broadcast" />
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
            v-if="informations.length > 0" ref="scrollContainer" @scroll="checkCardVisibility">

            <!-- cards -->
            <router-link v-for="(info, index) in informations" :key="index" :to="info.routeName" class="card-item">
                <LittleSlotLight class="slide-item h-[100%]"
                    :style="{ 'transition-delay': index * 100 + 'ms', 'opacity': info.visible ? '1' : '0' }"
                    @click="setCurrentPage(info.title)">
                    <div class="w-[60px]">
                        <img :src="info.img" alt="">
                    </div>

                    <div class="text-[#4d4c4c] text-center">
                        <span>{{ info.title }}</span>
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
            informations: [
                {
                    title: "Dove Siamo",
                    img: "/img/About/where-we-are.png",
                    visible: false,
                    routeName: '/about/where-we-are'
                },

                {
                    title: "Contatti",
                    img: "/img/About/contact-us.png",
                    visible: false,
                    routeName: '/about/contact'
                },

                {
                    title: "Informazioni",
                    img: "/img/About/information.png",
                    visible: false,
                    routeName: '/about/informations'
                },
            ],

            firstCardVisible: true,
            lastCardVisible: false,
            currentPageAbout: '',
        };
    },
    methods: {

        showInfo(index) {
            setTimeout(() => {
                this.informations[index].visible = true;
            }, index * 100); //delay dell'animazione
        },

        showAllInformations() {
            this.informations.forEach((info, index) => {
                this.showInfo(index);
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
            this.currentPageAbout = title

            // Salva la variabile currentPage nell'LocalStorage del browser
            localStorage.setItem('currentPageAbout', title);
        },

        animateHeaderAbout() {
            const headerAbout = document.getElementById('headerAbout');
            const headerAboutTitle = document.getElementById('currentPageTitleAbout')
            if (headerAbout) {
                if (window.scrollY > 300) {
                    headerAbout.classList.add('scrolled-sticky-header');
                    headerAboutTitle.classList.add('color-black', 'page-current-title');
                    containerHeaderSticky.classList.add('flex-col');
                    containerHeaderSticky.classList.remove('gap-4');
                } else {
                    headerAbout.classList.remove('scrolled-sticky-header');
                    headerAbout.classList.add('restore-sticky-header');
                    headerAboutTitle.classList.remove('color-black', 'page-current-title');
                    containerHeaderSticky.classList.remove('flex-col');
                    containerHeaderSticky.classList.add('gap-4');
                }
            }

        }
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger);

        this.showAllInformations();
        this.checkCardVisibility();

        // eventlistener per animare barra header-service
        window.addEventListener('scroll', this.animateHeaderAbout)

        // Controlla se la variabile currentPage è già stata salvata nell'LocalStorage
        const savedPage = localStorage.getItem('currentPageAbout');
        if (savedPage) {
            // Se presente, imposta la variabile currentPage al valore salvato
            this.currentPageAbout = savedPage;
        } else {
            // Altrimenti, imposta la variabile currentPage al valore predefinito
            this.currentPageAbout = '';
        }

    }
}
</script>

<style scoped>
/* comparsa delle card */
.slide-item {
    opacity: 0;
    transition: opacity 1.5s ease;
}

.scrollbar::-webkit-scrollbar {
    display: none;
}

.scrolling-effect {
    transition: transform 0.5s ease-in-out;
}
</style>