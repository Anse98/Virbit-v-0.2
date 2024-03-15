<template>
    <section class="min-h-[100vh]">
        <div class="container mx-auto py-12">
            <!-- titolo iniziale -->
            <div class="text-6xl flex flex-col gap-2 tracking-tighter">
                <span class="text-gray-300 show-title" :style="{ 'opacity': titleShow ? '1' : '0' }">
                    Un pò di chiarezza<span class="text-[#2c2c2c]">.</span>
                </span>

                <div class="w-[60%] flex justify-end">
                    <span class="text-[#2c2c2c] show-title" :style="{ 'opacity': titleShow ? '1' : '0' }">
                        Chi sono i sistemisti
                    </span>
                    <span class="question-mark flex justify-end">?</span>
                </div>
            </div>
        </div>

        <!-- chi è il sistemista -->
        <div class="flex flex-col items-center py-6" ref="whoSistemistSection">
            <!-- image -->
            <div class="w-[350px] pb-12">
                <img src="../../img/services/sistemists/software-engineer.png" alt="">
            </div>

            <!-- text -->
            <div
                class="container mx-auto flex justify-end tracking-tighter text-2xl text-gray-500 text-center pr-16 who-sistemist-text">
                <p class="w-[40%]">
                    I sistemisti non sono altro che professionisti che si occupano della progettazione, installazione
                    e configurazione
                    di un sistema informatico.
                </p>
            </div>

            <div
                class="container mx-auto flex justify-center tracking-tighter text-2xl text-[#2c2c2c] text-center pt-28 pb-20 who-sistemist-2text">
                <p class="w-[40%]">
                    Il suo compito fondamentale è quindi assicurare la qualità e il funzionamento dell'infrastruttura
                    digitale.
                </p>
            </div>
        </div>

        <!-- software che utilizziamo -->
        <div class="text-[#2c2c2c] text-4xl tracking-tighter container mx-auto mb-2" ref="titleWrapper">
            <h2>
                Alcuni dei software che utilizziamo per te e la tua azienda <span class="text-5xl text-gradient"
                    ref="dots">...</span>
            </h2>
        </div>

        <!-- cards dei software -->
        <div class="bg-[#FAFAFA] py-12 flex justify-center gap-10 flex-wrap">
            <BigSlotLight v-for="(soft, index) in  software " class="slide-item"
                :style="{ 'transition-delay': index * 100 + 'ms', 'opacity': soft.visible ? '1' : '0' }">
                <!-- img -->
                <div class="w-full mb-12">
                    <img :src="soft.img" alt="">
                </div>

                <!-- description -->
                <div class="text-center">
                    <p>
                        {{ soft.description }}
                    </p>
                </div>

                <!-- link -->
                <div class="pt-10 flex justify-end w-full text-[#4790D9] text-[18px]">
                    <a :href="soft.siteUrl" target="_blank" class="flex items-center gap-1 hover:underline">
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

export default {

    components: {
        BigSlotLight,
    },

    data() {
        return {
            titleShow: false,
            whoSistemistisInView: false,
            dotsVisible: false,
            software: [
                {
                    img: '../src/img/services/sistemists/dolibarr.png',
                    description: "Dolibarr è un software open source di gestione aziendale (ERP) e CRM (Customer Relationship Management) che offre una vasta gamma di funzionalità per la gestione di una piccola o media impresa.",
                    visible: false,
                    siteUrl: "https://www.dolibarr.org/"
                },

                {
                    img: '../src/img/services/sistemists/odoo.png',
                    description: " Odoo è una vasta raccolta di applicazioni aziendali tra cui CRM, gestione delle vendite, eCommerce, gestione del magazzino, gestione degli acquisti, suite di contabilità, gestione della produzione e risorse umane.",
                    visible: false,
                    siteUrl: "https://www.odoo.com/it_IT"
                },

                {
                    img: '../src/img/services/sistemists/openkm.png',
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


        handleScroll() {
            // animazione testo chi è il sistemista
            const whoSistemistSection = this.$refs.whoSistemistSection;
            if (whoSistemistSection) {
                const bounding = whoSistemistSection.getBoundingClientRect();
                const whoSistemistIsInView = (
                    bounding.top <= 50 &&
                    bounding.bottom >= 0
                )

                if (whoSistemistIsInView) {
                    whoSistemistSection.classList.add('show-who-sistemist')
                }
            }

            //animazione card software
            const scrollPosition = window.innerHeight + window.scrollY;
            const fullHeight = document.documentElement.scrollHeight;
            const threshold = 200; // Imposta la soglia per quanto vicino al fondo vuoi arrivare prima di chiamare la funzione
            if (scrollPosition >= fullHeight - threshold) {
                this.showAllSoftware();
            }
        },

        // mostrami le card dei software
        showSoftware(index) {
            setTimeout(() => {
                this.software[index].visible = true;
            }, index * 200); //delay dell'animazione
        },

        showAllSoftware() {
            this.software.forEach((soft, index) => {
                this.showSoftware(index);
            });
        },
    },

    mounted() {
        // animazione titolo iniziale
        this.showTitle();

        // animazione testo chi è il sistemista
        window.addEventListener('scroll', this.handleScroll);
    },

    beforeDestroy() {
        // rimuovi l'ascoltatore dell'evento prima di distruggere l'istanza
        window.removeEventListener('scroll', this.checkWhoSistemistVisibility);
    }
}
</script>


<style scoped>
/* anmazione titolo iniziale */
@keyframes moveQuestion {
    0% {
        transform: translateY(-300%);
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

.who-sistemist-text {
    opacity: 0;
    transition: opacity 0, 2s ease;
}

.show-who-sistemist .who-sistemist-text {
    animation: falling 2s forwards;
    opacity: 0;
}

/* comparsa delle card */
.slide-item {
    opacity: 0;
    transition: opacity 2.5s ease;
}
</style>