<template>
    <section>

        <HeaderServices></HeaderServices>

        <div class="container mx-auto tracking-tighter">
            <!-- title -->
            <div class=" text-4xl md:text-5xl text-[#2c2c2c]">
                <h1 class="main-title ps-2">
                    Trasforma le tue idee
                </h1>
                <h1 class="flex justify-end pe-4 title-gradient sub-title opacity-0">
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
            <div
                class="px-2 text-[18px] leading-8 first-text opacity-0 pb-6 md:text-center md:text-[20px] color-black font-medium">
                <p>
                    Parla con un nostro Analista che ti proporrà piani di sviluppo a <span
                        class="color-black font-semibold">misura per te.</span>
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
                    class="analyst-card relative w-[300px] lg:w-[450px] md:min-h-[400px] cursor-pointer bg-cover bg-center"
                    @click="openModal(analyst)">
                    <!-- card title -->

                    <div class="text-2xl text-center pb-10 color-black font-medium">
                        <h5>
                            {{ analyst.title }}
                        </h5>

                        <h6 class="text-[#acacac]">
                            (<small class="text-[16px]">
                                {{ analyst.subTitle }}
                            </small>)
                        </h6>
                    </div>

                    <!-- card img -->
                    <div class="w-[250px] pb-6">
                        <img :src=analyst.img alt="">
                    </div>

                    <!-- icona fondo card -->
                    <div class="flex justify-end w-full px-3">
                        <CardButton>
                            <font-awesome-icon icon="fa-brands fa-wpexplorer" />
                        </CardButton>
                    </div>
                </BigSlotLight>
            </div>
        </div>

        <!------------ Modale se clicchi analyst card --------------->
        <div v-if="showModal"
            class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm">
            <div
                class="bg-white p-3 rounded-2xl w-[95vw] h-[88vh] lg:w-[60vw] tracking-tighter overflow-y-auto scrollbar font-medium ">

                <!-- close btn -->
                <div class="flex justify-end pb-4 first-letter: z-50">
                    <span @click="closeModal"
                        class="border absolute z-50 rounded-full w-[30px] h-[30px] flex justify-center items-center bg-[#353535] text-[#e3e3e3] hover:text-white cursor-pointer">
                        <font-awesome-icon icon="fa-solid fa-xmark" />
                    </span>
                </div>

                <div class="px-2">
                    <!-- titolo del modale -->
                    <div class="flex justify-center mt-10 modal-title">
                        <h2 class="text-4xl lg:text-6xl  text-center font-semibold">
                            {{ selectedAnalyst.title }}
                        </h2>
                    </div>

                    <!-- gif del modale-->
                    <div class="flex justify-center modal-gif">
                        <component :is="selectedAnalyst.component" />
                    </div>

                    <!-- descrizione chi è process analyst -->
                    <div
                        class="text-[18px] md:text-[20px] lg:text-[20px] p-4 font-medium text-[#2f2f2f] mb-12 md:text-center modal-first-descr">
                        <p>
                            {{ selectedAnalyst.description[0] }}
                        </p>
                    </div>

                    <!-- img -->
                    <div class="md:flex md:justify-center">
                        <img :src="selectedAnalyst.modalImg" alt="">
                    </div>

                    <!-- seconda descrizione -->
                    <div
                        class="text-[16px] md:text-[18px] lg:text-[20px] p-4 font-medium text-[#2f2f2f] mt-12 md:text-center modal-second-descr">
                        <p>
                            {{ selectedAnalyst.description[1] }}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BigSlotLight from '../../components/slots/BigSlotLight.vue';
import HeaderServices from '../../components/HeaderServices.vue';
import ProcessAnalystGif from '../../components/gif/analyst/ProcessAnalystGif.vue';
import DataAnalystGif from '../../components/gif/analyst/DataAnalystGif.vue';
import CybersecurityAnalystGif from '../../components/gif/analyst/CybersecurityAnalystGif.vue';
import CardButton from '../../components/slots/CardButton.vue';

export default {

    components: {
        BigSlotLight,
        HeaderServices,
        ProcessAnalystGif,
        DataAnalystGif,
        CybersecurityAnalystGif,
        CardButton
    },

    data() {
        return {
            analystCards: [
                {
                    title: 'Analisti di Processi Aziendali',
                    subTitle: 'Processes Analyst',
                    img: '/img/services/analyst/processAnalyst.png',
                    modalImg: '/img/services/analyst/processAnalystModal.png',
                    component: 'ProcessAnalystGif',
                    description: [
                        " Il principale compito di un Analista di Processo consiste nel garantire che un'azienda sia agile, competitiva e performante. In pratica, la sua mission è quella di migliorare il modo di lavorare attraverso soluzioni tecnologiche mirate e di coordinare l'intero iter aziendale, suggerendo miglioramenti procedurali e produttivi.",

                        "Il process analyst supporta l'intero processo aziendale in termini di business, valutando le operazioni e i sistemi, perché rispondano esponenzialmente agli obiettivi prefissati."
                    ]
                },

                {
                    title: 'Analisti di Sicurezza Informatica',
                    subTitle: 'Cybersecurity Analyst',
                    img: '/img/services/analyst/analystCybersecurity.png',
                    component: 'CybersecurityAnalystGif',
                    modalImg: '/img/services/analyst/cybersecurityAnalystModal.png',
                    description: [
                        "Il Cyber Security Analyst è un professionista fondamentale nel panorama tecnologico attuale, e si occupa di prevenire gli attacchi informatici e di proteggere l'azienda su diversi fronti: dati, software, hardware e reti.",

                        "L'obiettivo di questo professionista è quello di implementare continuamente miglioramenti nella sicurezza della rete aziendale e salvaguardare dati sensibili da minacce esterne."
                    ]
                },

                {
                    title: 'Analisti di Dati',
                    subTitle: 'Data Analyst',
                    img: '/img/services/analyst/dataAnalyst.png',
                    component: 'DataAnalystGif',
                    modalImg: '/img/services/analyst/dataAnalystModal.png',
                    description: [

                        "La mansione principale, intorno alla quale ruota l'intera attività di data analisi, è la traduzione. Il profilo potrebbe essere definito un traduttore di numeri, il quale si occupa di trasformare i dati grezzi in informazioni di valore, ovvero in informazioni utili per le decisioni aziendali.",

                        "Attraverso il valore generato dai dati le aziende hanno la possibilità di prendere decisioni in maniera tempestiva e di ottenere un vantaggio notevole in termini di competitività."
                    ]
                },
            ],

            showModal: false,
            selectedAnalyst: {}
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

        ///////////////////////////////////////////// MODALE
        openModal(analyst) {
            this.selectedAnalyst = analyst;
            this.showModal = true;
            this.disableBodyScroll();

            /////// animazioni modale
            this.$nextTick(() => {
                gsap.from('.modal-title', {
                    autoAlpha: 0,
                    y: -20,
                    duration: 1,
                    ease: 'power3.out'
                });
            });

            this.$nextTick(() => {
                gsap.from('.modal-gif', {
                    autoAlpha: 0,
                    y: -20,
                    delay: 0.2,
                    duration: 1,
                    ease: 'power3.out'
                });
            });

            this.$nextTick(() => {
                gsap.from('.modal-first-descr', {
                    autoAlpha: 0,
                    y: -20,
                    delay: 0.4,
                    duration: 1,
                    ease: 'power3.out'
                });
            });
        },

        closeModal() {
            this.showModal = false;
            this.enableBodyScroll();
        },

        disableBodyScroll() {
            document.body.classList.add('overflow-y-hidden');
        },

        enableBodyScroll() {
            document.body.classList.remove('overflow-y-hidden');
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