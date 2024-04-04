<template>
    <section class="min-h-[85vh]">
        <HeaderServices></HeaderServices>
        <!-- title -->
        <div
            class="container mx-auto text-4xl tracking-tighter text-[#2c2c2c] flex flex-col justify-center md:text-4xl lg:text-5xl lg:items-start mb-5">
            <h1 class="show-title pl-6 md:pb-6" :style="{ 'opacity': titleShow ? '1' : '0' }">Sviluppatori</h1>
            <h1 class="pl-36 title-gradient of-what-title" id="ofWhat">
                Ma di cosa
                <span class="text-[#2c2c2c]">?</span>
            </h1>
        </div>

        <!-- prima section, cosa sviluppiamo -->
        <div class="bg-[#FAFAFA] min-h-[60vh] tracking-tighter">

            <!-- cards -->
            <div class="flex justify-center gap-10 flex-wrap py-6 devCardsContainer">
                <BigSlotLight class="w-[350px] dev-card" v-for="(card, index) in devCards" ref="devCards">
                    <!-- title -->
                    <div class="text-3xl mb-10 text-slate-700">
                        <h2>{{ card.name }}</h2>
                    </div>

                    <!-- img -->
                    <div class="w-[200px] mb-12">
                        <img :src="card.img" alt="">
                    </div>

                    <!-- description -->
                    <div class="text-center text-[#9c9a9a]">
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
            <div
                class="py-8 text-3xl md:text-3xl flex justify-center font-semibold text-[#2C2C2C] text-center lg:ps-4 lg:text-4xl">
                <h2 class="" ref="langTitle">Alcuni dei linguaggi che utilizziamo</h2>
            </div>

            <!-- cards -->
            <div class="px-2 overflow-x-auto scrollbar">
                <div class="flex gap-24 justify-start py-10 md:justify-center md:flex-wrap lg:gap-36">
                    <LittleSlotLight v-for="(card, index) in langCards" :key="index" class="lang-card">
                        <!-- card title -->
                        <div class="text-2xl mb-10 text-slate-700">
                            <h4>{{ card.name }}</h4>
                        </div>

                        <!-- card img -->
                        <div class="w-[100px]">
                            <img :src="card.img" alt="">
                        </div>

                        <!-- card description -->
                        <div class="description inset-0 flex items-center justify-center text-center leading-6 text-[#2C2C2C]"
                            :ref="'description_' + index" v-show="activeLangDescriptionIndex === index">
                            <p class="bg-white border p-2">{{ card.description }}</p>
                        </div>
                    </LittleSlotLight>
                </div>
            </div>
        </div>

        <div class="min-h-[60vh] tracking-tighter bg-[#FAFAFA]">

            <!-- title -->
            <div class="py-8 text-3xl md:text-3xl flex flex-col font-semibold text-[#2C2C2C] items-center justify-between lg:flex-row lg:px-4 lg:text-4xl"
                ref="frameworkTitle">

                <h2 class="text-center pb-6 lg:pb-0">
                    Alcuni dei framework che utilizziamo
                </h2>

                <div class="relative">
                    <span class="text-[20px] text-[#4790D9] cursor-pointer lg:pe-10 flex flex-col items-center"
                        @click="toggleInfoFramework()">
                        <font-awesome-icon icon="fa-solid fa-lightbulb"
                            class="hidden lg:block bg-white shadow-lg p-2 rounded-full w-[14px] h-[14px]" />
                        <font-awesome-icon icon="fa-solid fa-info"
                            class="lg:hidden bg-white shadow-lg p-2 rounded-full w-[14px] h-[14px]" />
                    </span>

                    <div class="bg-white border absolute rounded-md text-[14px] p-2 leading-4 text-[#9c9a9a] w-[300px] lg:w-[200px] left-[-140px] text-center"
                        ref="infoFramework" style="opacity: 0;">
                        <p class="z-50">
                            Un framework è un sistema che consente di estendere le funzionalità del
                            linguaggio di programmazione su cui è basato, fornendo allo sviluppatore una struttura
                            coerente ed efficace al fine di effettuare azioni e comandi in modo semplice e veloce.
                        </p>
                    </div>
                </div>
            </div>

            <!-- cards -->
            <div class="overflow-x-auto px-2 scrollbar">
                <div class="flex gap-24 justify-start md:justify-center py-20 lg:gap-40">
                    <LittleSlotLight v-for="(card, index) in frameworkCards" :key="index"
                        class="framework-card relative ps-10">
                        <!-- card title -->
                        <div class="text-2xl mb-10 text-slate-700 text-center z-10">
                            <h4>{{ card.name }}</h4>
                        </div>

                        <!-- card img -->
                        <div class="w-[100px]">
                            <img :src="card.img" alt="">
                        </div>

                        <!-- card description -->
                        <!-- <div class=" inset-0 flex items-center justify-center text-center leading-6 text-[#2C2C2C]"
                        :ref="'frameworkDescription_' + index">
                        <p>{{ card.description }}</p>
                    </div> -->
                    </LittleSlotLight>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import BigSlotLight from '../../components/slots/BigSlotLight.vue';
import LittleSlotLight from '../../components/slots/LittleSlotLight.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeaderServices from '../../components/HeaderServices.vue';



export default {

    components: {
        BigSlotLight,
        LittleSlotLight,
        HeaderServices
    },

    data() {
        return {
            titleShow: false,

            activeLangDescriptionIndex: null,

            devCards: [
                {
                    name: 'Siti Web',
                    img: '/img/services/developers/website.png',
                    description: 'Hai bisogno di un sito web per la tua azienda, attività o semplicemente per te stesso? Ci pensiamo noi!'
                },

                {
                    name: 'Web App',
                    img: '/img/services/developers/webapp.png',
                    description: 'Sviluppiamo anche Web App su misura per te! Senza scroll della pagina e con tutte le funzionalità richieste.'
                },

                {
                    name: 'Software Aziendali',
                    img: '/img/services/developers/software.png',
                    description: 'Software di calcolo, filtraggio, monitoraggio delle statistiche e altri tool utili per te e la tua attività!'
                },
            ],
            langCards: [
                {
                    name: 'Html5',
                    img: '/img/services/developers/HTML5.png',
                    description: 'È praticamente impossibile parlare di web, della sua storia e del suo sviluppo senza citare HTML.HTML è un linguaggio che permette di impaginare e formattare pagine collegate fra di loro attraverso link - ovvero, i siti web.'
                },

                {
                    name: 'Css3',
                    img: '/img/services/developers/css.png',
                    description: "Essenzialmente, il CSS è un linguaggio che gestisce il design e la presentazione delle pagine web (cioè l'aspetto estetico) e lavora in combinazione con l'HTML."
                },

                {
                    name: 'Javascript',
                    img: '/img/services/developers/js.png',
                    description: "JavaScript è un linguaggio di scripting utilizzato comunemente in ambito web per la creazione di effetti dinamici interattivi, tramite funzioni di script invocate da eventi innescati dall'utente sulla pagina web in uso"
                },

                {
                    name: 'PHP',
                    img: '/img/services/developers/php.png',
                    description: "PHP è un linguaggio di scripting open source generico, usato per lo più nello sviluppo web. PHP è un acronimo ricorsivo: significa che l'acronimo stesso è contenuto come prima parola nello scioglimento della sigla - infatti PHP sta per PHP: Hypertext Preprocessor."
                },

                {
                    name: 'C#',
                    img: '/img/services/developers/c-sharp.png',
                    description: "C# (o C Sharp) è un linguaggio di programmazione moderno sviluppato da Microsoft e fa parte dell'ecosistema .NET. Nato nel 2000 come risposta ai linguaggi come Java, si è rapidamente affermato come uno dei linguaggi di programmazione più utilizzati al mondo."
                },
            ],
            frameworkCards: [
                {
                    name: 'Bootstrap',
                    img: '/img/services/developers/bootstrap.png',
                    description: 'Bootstrap è un framework css di sviluppo web gratuito e open source. È progettato per facilitare il processo di sviluppo di siti web responsive e mobile-first fornendo una raccolta di sintassi per i modelli di progettazione.'
                },

                {
                    name: 'Tailwind',
                    img: '/img/services/developers/tailwind.png',
                    description: 'Tailwind CSS è un framework CSS di basso livello, molto personalizzabile, che offre tutti gli elementi di costruzione di cui hai bisogno per creare progetti su misura. Una potente alternativa a Bootstrap.'
                },

                {
                    name: 'Vue Js',
                    img: '/img/services/developers/vue.png',
                    description: 'Vue è un framework Javascript open source per la creazione di interfacce utente (UI, User Interface), quindi è usato principalmente per lo sviluppo front-end.'
                },

                {
                    name: 'Laravel',
                    img: '/img/services/developers/laravel.png',
                    description: 'Laravel è un framework PHP per applicazioni web. Laravel semplifica alcune delle attività più comuni dei progetti web, come autenticazione, autorizzazione, routing, sessioni, caching. Possiede inoltre un motore di templating integrato, Blade, un sistema di migrazione database.'
                },

            ],
        };
    },

    methods: {

        ////////////////////////////////////////////////// TITOLO PAGINA
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

        ///////////////////////////////////////////////// CARD COSA SVILUPPIAMO

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


        ///////////////////////////////////////////////////// LINGUAGGI

        // animazione titolo dei linguaggi
        animateLangTitle() {
            const title = this.$refs.langTitle;
            gsap.from(title, {
                autoAlpha: 0,
                y: 30,
                duration: 1.3,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: title,
                    start: 'top 80%', // Avvia l'animazione quando l'elemento è a 80% dall'inizio della viewport
                    end: '+=100', // La fine dell'animazione è dopo uno scroll di 100px
                    toggleActions: "play none none none",
                },
            });
        },

        // animazione cards dei linguaggi
        animateLangCards() {
            const langCards = document.querySelectorAll('.lang-card');
            gsap.from(langCards, {
                scrollTrigger: {
                    trigger: langCards,
                    toggleActions: "play none none none"
                },
                autoAlpha: 0,
                y: 40,
                stagger: 0.35,
                duration: 1,
                ease: "power1.inOut",
            });
        },

        showLangDescription(index) {
            this.activeLangDescriptionIndex = index;
        },

        hideLangDescription() {
            this.activeLangDescriptionIndex = null;
        },

        ///////////////////////////////////////////////////// FRAMEWORK

        // animazione titolo dei framework
        animateFrameworkTitle() {
            const title = this.$refs.frameworkTitle;
            gsap.from(title, {
                autoAlpha: 0,
                y: 30,
                duration: 1.3,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: title,
                    start: 'top 60%',
                    end: '+=100',
                    toggleActions: "play none none none",
                },
            });
        },

        toggleInfoFramework() {
            const element = this.$refs.infoFramework;
            const currentOpacity = parseFloat(window.getComputedStyle(element).getPropertyValue('opacity'));
            const targetOpacity = currentOpacity === 0 ? 1 : 0;

            gsap.to(element, {
                opacity: targetOpacity,
                duration: 1
            });
        },

        // animazione cards dei framework
        animateFrameworkCards() {
            const frameworkCards = document.querySelectorAll('.framework-card');
            gsap.from(frameworkCards, {
                opacity: 0,
                y: 40,
                duration: 1.5,
                stagger: 0.35,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: frameworkCards,
                    start: "top bottom-=150",
                    end: "top center",
                    toggleActions: "play none none none",
                },
            });
        },

        // mostra on hover descrizione card dei framework
        showFrameworkDescription(index) {
            gsap.to(this.$refs['frameworkDescription_' + index],
                {
                    opacity: 1,
                    duration: 0.5
                });
        },

        //nascondi la descrizione card dei framework quando il mouse esce
        hideFrameworkDescription(index) {
            gsap.to(this.$refs['frameworkDescription_' + index],
                {
                    opacity: 0,
                    duration: 0.5
                });
        },
    },

    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        this.showTitle();
        this.showOfWhatTitle();
        this.animateDevCards();
        this.animateLangTitle();
        this.animateLangCards();
        this.animateFrameworkTitle();
        this.animateFrameworkCards();
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