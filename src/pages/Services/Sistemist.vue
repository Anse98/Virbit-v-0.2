<template>
    <section class="min-h-[85vh]">

        <HeaderServices></HeaderServices>

        <div class="container mx-auto">
            <!-- titolo iniziale -->
            <div class="text-4xl sm:text-5xl flex flex-col items-center lg:items-start gap-2 tracking-tighter">
                <span class="title-gradient show-title me-10" :style="{ 'opacity': titleShow ? '1' : '0' }">
                    Un po di chiarezza<span class="text-[#2c2c2c]">.</span>
                </span>

                <div class="w-[90%] flex justify-end lg:justify-start lg:ps-10">
                    <span class="text-[#2c2c2c] show-title" :style="{ 'opacity': titleShow ? '1' : '0' }">
                        Chi sono i <span>sistemisti</span>
                    </span>
                    <span class="question-mark flex justify-end">?</span>
                </div>
            </div>
        </div>

        <!-- chi è il sistemista -->
        <div class="flex flex-col items-center py-6">


            <div class="flex flex-col lg:flex-col-reverse lg:items-center">

                <!-- image -->
                <div class="ps-12 lg:ps-0 lg:pe-40 pt-12 ">
                    <img src="../../img/services/sistemists/software-engineer.png" alt=""
                        class="w-[200px] sm:w-[250px]">
                </div>

                <!-- text -->
                <div class="container text-lg mx-auto flex justify-end tracking-tighter color-black text-center pr-16 sm:text-[20px] lg:text-3xl opacity-0 pt-14"
                    ref="whoIsSistemist">
                    <p class="w-[90%] lg:w-[70%]">
                        Il sistemista non è altro che un <span class="color-black font-medium">professionista</span>
                        che si occupa
                        della <span class="color-black font-medium">progettazione,
                            installazione
                            e configurazione</span>
                        di un sistema informatico.
                    </p>
                </div>

            </div>

            <div
                class="container mx-auto flex justify-center lg:justify-end  tracking-tighter color-black text-lg text-center pt-4 pb-10 who-sistemist-2text sm:text-[20px] lg:text-3xl lg:pt-20 lg:pb-28">
                <p class="lg:w-[70%] px-2" ref="whoIsSistemist2">
                    Il suo compito fondamentale è quindi assicurare la <span
                        class="font-medium color-black">qualità</span> e il
                    <span class="color-black font-medium">funzionamento
                        dell'infrastruttura</span>
                    digitale.
                </p>
            </div>
        </div>

        <!-- software che utilizziamo -->
        <div class="text-[#2c2c2c] text-3xl sm:text-4xl tracking-tighter container mx-auto mb-2 soft-title text-center lg:text-start px-2 font-semibold"
            ref="titleSoftware">
            <h2>
                Alcuni dei software che utilizziamo per te e la tua azienda
            </h2>
        </div>

        <!-- cards dei software -->
        <div class="bg-[#FAFAFA] py-12 flex justify-center gap-10 flex-wrap px-2">
            <BigSlotLight v-for="(soft, index) in software " class="softCards w-[300px] sm:w-[400px]">
                <!-- img -->
                <div class="w-full mb-12">
                    <img :src="soft.img" alt="Immagine Software che utilizziamo">
                </div>

                <!-- description -->
                <div class="text-center">
                    <p>
                        {{ soft.description }}
                    </p>
                </div>

                <!-- link -->
                <div class="pt-10 flex justify-end w-full text-[#4790D9] text-[18px]">
                    <a :href="soft.siteUrl" class="flex items-center gap-1 hover:underline">
                        Scopri di più
                        <span class="pt-1 text-[12px]">
                            <font-awesome-icon icon="fa-solid fa-caret-right" />
                        </span>
                    </a>
                </div>
            </BigSlotLight>
        </div>

    </section>
</template>

<script>
import BigSlotLight from '../../components/slots/BigSlotLight.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeaderServices from '../../components/HeaderServices.vue';


export default {

    components: {
        BigSlotLight,
        HeaderServices
    },

    data() {
        return {
            titleShow: false,
            software: [
                {
                    img: '/img/services/sistemists/dolibarr.png',
                    description: "Dolibarr è un software open source di gestione aziendale (ERP) e CRM (Customer Relationship Management) che offre una vasta gamma di funzionalità per la gestione di una piccola o media impresa.",
                    visible: false,
                    siteUrl: "https://www.dolibarr.org/"
                },

                {
                    img: '/img/services/sistemists/odoo.png',
                    description: " Odoo è una vasta raccolta di applicazioni aziendali tra cui CRM, gestione delle vendite, eCommerce, gestione del magazzino, gestione degli acquisti, suite di contabilità, gestione della produzione e risorse umane.",
                    visible: false,
                    siteUrl: "https://www.odoo.com/it_IT"
                },

                {
                    img: '/img/services/sistemists/openkm.png',
                    description: "OpenKM è un software di gestione dei documenti che integra tutte le funzionalità essenziali di gestione dei documenti, collaborazione e ricerca avanzata in un'unica soluzione facile da usare.",
                    visible: false,
                    siteUrl: "https://www.openkm.it/"
                }
            ]
        };
    },

    methods: {
        // animazione titolo iniziale
        showTitle() {
            setTimeout(() => {
                this.titleShow = true
                const questionMark = document.querySelector('.question-mark');
                questionMark.classList.add('animate-question');
            }, 500)
        },

        // animazione primo testo chi è il sistemista
        showWhoSistemistIs() {
            const whoIsSistemist = this.$refs.whoIsSistemist;
            gsap.to(whoIsSistemist, {
                autoAlpha: 1,
                y: -30,
                duration: 1.2,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: whoIsSistemist,
                    start: 'top 80%', // Avvia l'animazione quando l'elemento è a 80% dall'inizio della viewport
                    end: '+=100', // La fine dell'animazione è dopo uno scroll di 100px
                    toggleActions: "play none none none",
                },
            });
        },

        // animazione secondo testo chi è il sistemista
        showWhoSistemistIs2() {
            const whoIsSistemist2 = this.$refs.whoIsSistemist2;
            gsap.from(whoIsSistemist2, {
                autoAlpha: 0,
                y: 30,
                duration: 1.3,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: whoIsSistemist2,
                    start: 'top 80%', // Avvia l'animazione quando l'elemento è a 80% dall'inizio della viewport
                    end: '+=100', // La fine dell'animazione è dopo uno scroll di 100px
                    toggleActions: "play none none none",
                },
            });
        },

        // animazione titolo software
        ShowTitleSoftware() {
            const titleSoftware = this.$refs.titleSoftware;
            gsap.from(titleSoftware, {
                scrollTrigger: {
                    trigger: titleSoftware,
                    toggleActions: "play none none none"
                },
                autoAlpha: 0,
                y: -40,
                duration: 1,
                ease: "power1.inOut",
            });
        },

        // animazioni card software
        ShowSoftCards() {
            const softCards = document.querySelectorAll('.softCards');
            gsap.from(softCards, {
                opacity: 0,
                y: 40,
                duration: 1.5,
                stagger: 0.35,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: softCards,
                    start: "top 90%",
                    end: "top center",
                    toggleActions: "play none none none",
                },
            });
        },
    },

    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        this.showTitle();
        this.showWhoSistemistIs();
        this.showWhoSistemistIs2();
        this.ShowTitleSoftware();
        this.ShowSoftCards();
    },
}
</script>


<style scoped>
/* anmazione titolo iniziale */
@keyframes moveQuestion {
    0% {
        transform: translateY(-100%);
    }

    100% {
        transform: translateY(0);
    }
}

.show-title {
    opacity: 0;
    transition: opacity 2s ease;
}

.question-mark {
    animation: moveQuestion 2s ease forwards;
}
</style>