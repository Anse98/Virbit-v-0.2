<template>
    <section>
        <div class="container mx-auto tracking-tighter">
            <HeaderServices></HeaderServices>
            <!-- title -->
            <div class=" text-4xl md:text-5xl text-[#2c2c2c]">
                <h1 class="main-title ps-2">
                    Trasforma le tue idee
                </h1>
                <h1 class="flex justify-end pe-4 text-[#9c9a9a] sub-title opacity-0">
                    In realtà.
                </h1>
            </div>

            <!-- jumbo img -->
            <div class="md:flex md:justify-center md:pb-8">
                <div class="w-[250px] md:w-[400px] jumboAnalyst">
                    <img src="../../img/jumboAnalyst.png" alt="">
                </div>
            </div>

            <!-- first text -->
            <div class="px-2 text-[16px] leading-8 first-text opacity-0 pb-6 md:text-center">
                <p>
                    Parla con un nostro Analista che ti proporrà piani di sviluppo a misura per te
                </p>
            </div>

            <!-- secondary title -->
            <div class="pt-12 ps-2 tracking-tighter">
                <h3 class="font-semibold text-3xl md:text-4xl text-[#2c2c2c]">
                    I nostri Analisti
                </h3>
            </div>
        </div>

        <div class="bg-[#FAFAFA] py-6">
            <div class="flex flex-col flex-wrap items-center gap-8 md:flex-row md:justify-center">
                <!-- cards -->
                <BigSlotLight v-for="(analyst, index) in analystCards" :key="index"
                    class="w-[350px] analyst-card h-[350px]">
                    <!-- card title -->
                    <div class="text-2xl text-center pb-10 text-slate-700">
                        <h5>
                            {{ analyst.title }}
                        </h5>

                        <h6 class="text-[#9c9a9a]">
                            (<small class="text-[16px]">
                                {{ analyst.subTitle }}
                            </small>)
                        </h6>
                    </div>

                    <!-- card img -->
                    <div class="w-[250px]">
                        <img :src=analyst.img alt="">
                    </div>
                </BigSlotLight>
            </div>
        </div>
    </section>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BigSlotLight from '../../components/slots/BigSlotLight.vue';
import HeaderServices from '../../components/HeaderServices.vue';

export default {

    components: {
        BigSlotLight,
        HeaderServices
    },

    data() {
        return {
            analystCards: [
                {
                    title: 'Analisti di Processi Aziendali',
                    subTitle: 'Processes Analyst',
                    img: '/img/services/analyst/processAnalyst.png'
                },

                {
                    title: 'Analisti di Sicurezza Informatica',
                    subTitle: 'Cybersecurity Analyst',
                    img: '/img/services/analyst/analystCybersecurity.png'
                },

                {
                    title: 'Analisti di Dati',
                    subTitle: 'Data Analyst',
                    img: '/img/services/analyst/dataAnalyst.png'
                },
            ]
        };
    },

    methods: {
        // animazione titolo
        animateTitle() {
            gsap.from('.main-title', {
                scrollTrigger: {
                    trigger: '.main-title',
                    toggleActions: "play none none none"
                },
                autoAlpha: 0,
                y: 20,
                duration: 0.5,
                ease: "power1.inOut",
                onComplete: this.animateSubTitle,
            });
        },

        // animazione sottotitolo
        animateSubTitle() {
            gsap.to('.sub-title', {
                scrollTrigger: {
                    trigger: '.sub-title',
                    toggleActions: "play none none none"
                },
                autoAlpha: 1,
                ease: "power1.inOut",
                onComplete: this.animateFirstText()
            });
        },

        // animazione primo testo
        animateFirstText() {
            gsap.to('.first-text', {
                scrollTrigger: {
                    trigger: '.first-text',
                    toggleActions: "play none none none"
                },
                autoAlpha: 1,
                y: 16,
                duration: 0.8,
                ease: "power1.inOut",
            });
        },

        // animazione card analyst
        animateAnalystCards() {
            gsap.from('.analyst-card', {
                opacity: 0,
                y: 40,
                duration: 2,
                stagger: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.analyst-card',
                    start: "top 60%",
                    end: "top center",
                    toggleActions: "play none none none",
                },
            });
        },
    },

    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        this.animateTitle();
        this.animateAnalystCards();
    },
}
</script>


<style scoped></style>