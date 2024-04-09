<template>
    <section>

        <HeaderServices></HeaderServices>

        <div class="container mx-auto text-center tracking-tighter">
            <!-- title -->
            <div class="pb-4 lg:pb-10">
                <h1 class="main-title text-4xl lg:text-5xl text-[#2c2c2c] font-medium">
                    Sicurezza Informatica
                </h1>
                <span class="text-[#9c9a9a] sub-title text-2xl lg:text-3xl opacity-0">
                    (Cybersecurity)
                </span>
            </div>

            <!-- jumbotron img-->
            <div class="flex justify-end lg:justify-center pe-6 jumboImage lg:pe-0">
                <img src="../../img/jumbotronSecurity.png" alt="" class="w-[150px] md:w-[200px]">
            </div>

            <!-- che cos'è la cybersecurity -->
            <div
                class="pt-12 text-start px-3 text-3xl lg:flex lg:flex-col lg:items-center lg:text-center lg:pt-24 lg:text-4xl text-[#2c2c2c]">
                <h3 class="pb-6 main-title font-semibold">Cosa sarebbe?</h3>

                <p class="text-[16px] sub-title opacity-0 lg:text-[18px] color-black font-medium">
                    La sicurezza informatica è la pratica di <span class="font-bold">proteggere</span> i
                    sistemi critici e le informazioni sensibili
                    dagli <span class="font-bold">attacchi digitali.</span> Note anche come sicurezza IT
                    (information technology), le misure della
                    sicurezza informatica sono progettate per <span class="font-bold">combattere</span> le
                    minacce contro sistemi in rete e
                    applicazioni, che hanno origine sia all'interno che all'esterno di un'organizzazione.
                </p>
            </div>

            <!-- quello che facciamo -->
            <div class="pt-12 text-start text-3xl lg:text-4xl lg:text-center lg:pt-24">
                <h3 class="px-2 cyber-cards-title lg:pb-8 text-[#2c2c2c] font-semibold">Di cosa ci occupiamo noi</h3>

                <div class="flex flex-wrap gap-24 justify-center py-8 text-center lg:gap-40 px-3">
                    <LittleSlotLight v-for="(card, index) in cyberCards" :key="index" class="cyberCards">
                        <h4 class="text-2xl pb-4 leading-7 text-slate-700">{{ card.title }}</h4>

                        <div class="w-[110px]">
                            <img :src="card.img" alt="">
                        </div>
                    </LittleSlotLight>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LittleSlotLight from '../../components/slots/LittleSlotLight.vue';
import HeaderServices from '../../components/HeaderServices.vue';

export default {

    components: {
        LittleSlotLight,
        HeaderServices
    },

    data() {
        return {
            cyberCards: [
                {
                    title: 'Controllo accesso utenti',
                    img: '/img/services/cybersecurity/access.png'
                },

                {
                    title: 'Vpn & Firewall',
                    img: '/img/services/cybersecurity/firewall.png'
                },

                {
                    title: 'Antivirus',
                    img: '/img/services/cybersecurity/antivirus.png'
                },

                {
                    title: 'Backups di tutti i tipi',
                    img: '/img/services/cybersecurity/backups.png'
                },

                {
                    title: 'Monitoraggio Sistematico',
                    img: '/img/services/cybersecurity/monitoring.png'
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
                duration: 0.7,
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
            });
        },

        // animazione titolo
        animateTitle() {
            gsap.from('.jumboImage', {
                scrollTrigger: {
                    trigger: '.jumboImage',
                    toggleActions: "play none none none"
                },
                autoAlpha: 0,
                x: 40,
                duration: 0.7,
                ease: "power1.inOut",
                onComplete: this.animateSubTitle,
            });
        },

        // animazione titolo cards cybersecurity
        animateCyberCardsTitle() {
            gsap.from('.cyber-cards-title', {
                autoAlpha: 0,
                y: 30,
                duration: 1.3,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: '.cyber-cards-title',
                    start: 'top 90%', // Avvia l'animazione quando l'elemento è a 80% dall'inizio della viewport
                    end: '+=100', // La fine dell'animazione è dopo uno scroll di 100px
                    toggleActions: "play none none none",
                },
            });
        },

        // animazione cards cybersecurity
        animateCyberCards() {
            gsap.from('.cyberCards', {
                scrollTrigger: {
                    trigger: '.cyberCards',
                    start: 'top 80%', // Avvia l'animazione quando l'elemento è a 80% dall'inizio della viewport
                    end: '+=100', // La fine dell'animazione è dopo uno scroll di 100px
                    toggleActions: "play none none none",
                },
                autoAlpha: 0,
                y: 20,
                stagger: 0.2,
                duration: 1,
                ease: "power1.inOut",
            });
        },


    },

    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        this.animateTitle();
        this.animateCyberCardsTitle();
        this.animateCyberCards();
    },
}
</script>


<style scoped></style>