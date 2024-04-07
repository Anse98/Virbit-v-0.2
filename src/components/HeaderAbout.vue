<template>
    <div
        class="bg-[#414141] px-2 tracking-tight flex justify-between text-[#faf8f8] mb-3 text-[15px] sm:text-[16px] sm:px-10 sticky top-0 left-0 right-0 z-20">
        <span class="font-semibold ">
            About
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
                    :style="{ 'transition-delay': index * 100 + 'ms', 'opacity': info.visible ? '1' : '0' }">
                    <div>
                        <img :src="info.img" alt="">
                    </div>

                    <div class="text-[#4d4c4c]">
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
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger);

        this.showAllInformations();
        this.checkCardVisibility();
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