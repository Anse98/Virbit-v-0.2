<template>
    <section class="min-h-[85vh]">
        <!-- title -->
        <div class="container mx-auto text-6xl tracking-tighter text-[#2c2c2c] flex flex-col justify-center py-8">
            <h1 class="pb-6 show-title font-semibold" :style="{ 'opacity': titleShow ? '1' : '0' }">Sviluppatori</h1>
            <h1 class="pl-16 title-gradient of-what-title font-semibold" id="ofWhat">
                Ma di cosa
                <span class="text-[#2c2c2c]">?</span>
            </h1>
        </div>

        <!-- prima section, cosa sviluppiamo -->
        <div class="bg-[#FAFAFA] min-h-[60vh] tracking-tighter">

            <!-- cards -->
            <div class="flex justify-center gap-10 flex-wrap py-10">
                <BigSlotLight class="w-[350px] dev-card" v-for="(card, index) in devCards">
                    <!-- title -->
                    <div class="text-3xl mb-10 text-slate-700">
                        <h2>{{ card.name }}</h2>
                    </div>

                    <!-- img -->
                    <div class="w-full mb-12">
                        <img :src="card.img" alt="">
                    </div>

                    <!-- description -->
                    <div class="text-center">
                        <p>
                            {{ card.description }}
                        </p>
                    </div>

                </BigSlotLight>
            </div>
        </div>

        <!-- tecnologie che usiamo -->
        <div class="min-h-[60vh] tracking-tighter">

            <!-- title -->
            <div class="py-8 text-4xl flex justify-center font-semibold text-[#2C2C2C]" ref="langTitle">
                <h2>Alcuni dei linguaggi che utilizziamo</h2>
            </div>

            <!-- cards -->
            <div class="flex flex-wrap gap-8 justify-center py-20">
                <LittleSlotLight v-for="(card, index) in langCards" :key="index" class="max-w-[250px] lang-card">
                    <!-- card title -->
                    <div class="text-3xl mb-10 text-slate-700">
                        <h4>{{ card.name }}</h4>
                    </div>

                    <!-- card img -->
                    <div class="w-[200px]">
                        <img :src="card.img" alt="">
                    </div>
                </LittleSlotLight>
            </div>
        </div>
    </section>
</template>

<script>
import BigSlotLight from '../../components/slots/BigSlotLight.vue';
import LittleSlotLight from '../../components/slots/LittleSlotLight.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {

    components: {
        BigSlotLight,
        LittleSlotLight
    },

    data() {
        return {
            titleShow: false,
            devCards: [
                {
                    name: 'Siti Web',
                    img: '../src/img/services/developers/website.png',
                    description: 'Hai bisogno di un sito web per la tua azienda, attività o semplicemente per te stesso? Ci pensiamo noi!'
                },

                {
                    name: 'Web App',
                    img: '../src/img/services/developers/webapp.png',
                    description: 'Sviluppiamo anche Web App su misura per te! Senza scroll della pagina e con tutte le funzionalità richieste.'
                },

                {
                    name: 'Software Aziendali',
                    img: '../src/img/services/developers/software.png',
                    description: 'Software di calcolo, filtraggio, monitoraggio delle statistiche e altri tool utili per te e la tua attività!'
                },
            ],
            langCards: [
                {
                    name: 'Html5',
                    img: '../src/img/services/developers/HTML5.png'
                },

                {
                    name: 'Css3',
                    img: '../src/img/services/developers/css.png'
                },

                {
                    name: 'Javascript',
                    img: '../src/img/services/developers/js.png'
                },

                {
                    name: 'PHP',
                    img: '../src/img/services/developers/php.png'
                },
            ]
        };
    },

    methods: {
        // animazione titolo
        showTitle() {
            setTimeout(() => {
                this.titleShow = true
            }, 300)
        },

        // animazione titolo
        showOfWhatTitle() {
            setTimeout(() => {
                const ofWhat = document.getElementById('ofWhat');
                ofWhat.classList.add('emerge-title')
            }, 500)
        },

        // animazione card cosa sviluppiamo
        animateDevCards() {
            const cards = document.querySelectorAll('.dev-card');
            gsap.from(cards, {
                opacity: 0,
                y: 40,
                duration: 2,
                stagger: 0.3,
                ease: "power2.out",
            });
        },

        // animazione titolo dei linguaggi
        animateLangTitle() {
            const title = this.$refs.langTitle;
            gsap.from(title, {
                opacity: 0,
                y: 40,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: title,
                    // quando l'elemento entra nella viewport e si trova a 100 pixel sopra il fondo della finestra visualizzata, l'animazione sarà attivata.
                    start: "top bottom-=100",

                    // quando l'elemento viene spostato fino a raggiungere il centro della finestra visualizzata, l'animazione terminerà.
                    end: "top center",

                    // indica cosa fare quando l'elemento esce dalla view port, se al posto dell'ultimo none ci fosse "reverse", si riattiverebbe l'animazione ogni volta che l'elemento è uscito dalla viewport e poi ci rientra
                    toggleActions: "play none none none",
                },
            });
        },

        animateLangCards() {
            const langCards = document.querySelectorAll('.lang-card');
            gsap.from(langCards, {
                opacity: 0,
                y: 40,
                duration: 1.5,
                stagger: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: langCards,
                    // quando l'elemento entra nella viewport e si trova a 100 pixel sopra il fondo della finestra visualizzata, l'animazione sarà attivata.
                    start: "top bottom-=100",

                    // quando l'elemento viene spostato fino a raggiungere il centro della finestra visualizzata, l'animazione terminerà.
                    end: "top center",

                    // indica cosa fare quando l'elemento esce dalla view port, se al posto dell'ultimo none ci fosse "reverse", si riattiverebbe l'animazione ogni volta che l'elemento è uscito dalla viewport e poi ci rientra
                    toggleActions: "play none none none",
                },
            });
        }
    },

    mounted() {
        this.showTitle();
        this.showOfWhatTitle();
        this.animateDevCards();
        this.animateLangTitle();
        this.animateLangCards();
    },
}
</script>


<style scoped>
.show-title {
    opacity: 0;
    transition: opacity 2s ease;
}

.of-what-title {
    opacity: 0;
    transition: opacity ease;
}

.of-what-title.emerge-title {
    animation: emerge 2s forwards;
    opacity: 0;
}
</style>