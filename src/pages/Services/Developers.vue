<template>
    <section class="min-h-[85vh]">
        <HeaderServices></HeaderServices>
        <!-- title -->
        <div
            class="container mx-auto text-4xl tracking-tighter text-[#2c2c2c] flex flex-col justify-center md:text-4xl lg:text-5xl lg:items-start mb-5">
            <h1 class="show-title pl-6 md:pb-6 font-medium" :style="{ 'opacity': titleShow ? '1' : '0' }">Sviluppatori
            </h1>
            <h1 class="pl-40  text-[#9e9ea4] of-what-title" id="ofWhat">
                Ma di cosa
                <span class="text-[#2c2c2c]">?</span>
            </h1>
        </div>

        <!-- prima section, cosa sviluppiamo -->
        <div class="bg-[#FAFAFA] min-h-[60vh] tracking-tighter">

            <!-- cards -->
            <div class="flex justify-center gap-10 flex-wrap py-6 devCardsContainer">
                <BigSlotLight class="w-[300px] lg:w-[450px] dev-card cursor-pointer" v-for="(card, index) in devCards"
                    ref="devCards" @click="openModal(card)">
                    <!-- title -->
                    <div class="text-3xl mb-10 color-black">
                        <h2>{{ card.name[0] }}</h2>
                    </div>

                    <!-- img -->
                    <div class="w-[200px] mb-12">
                        <img :src="card.img" alt="">
                    </div>

                    <!-- description -->
                    <div class="text-center font-medium">
                        <p>
                            {{ card.description }}
                        </p>
                    </div>

                    <!-- icona fondo card -->
                    <div class="flex justify-end w-full px-3 pt-8">
                        <CardButton>
                            <font-awesome-icon icon="fa-solid fa-caret-up" />
                        </CardButton>
                    </div>

                </BigSlotLight>
            </div>
        </div>

        <!---------------- Modale se clicchi developer card --------------->
        <div v-if="showModal"
            class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm">
            <div
                class="bg-white p-3 rounded-2xl w-[95vw] h-[88vh] lg:w-[60vw] tracking-tighter overflow-y-auto scrollbar font-medium">

                <!-- close btn -->
                <div class="flex justify-end pb-4 first-letter: z-50">
                    <span @click="closeModal"
                        class="border absolute z-50 rounded-full w-[30px] h-[30px] flex justify-center items-center bg-[#353535] text-[#e3e3e3] hover:text-white cursor-pointer">
                        <font-awesome-icon icon="fa-solid fa-xmark" />
                    </span>
                </div>

                <div class="px-2">
                    <!-- gif del modale-->
                    <div class="flex justify-center relative" v-if="selectedDeveloper.component">
                        <component :is="selectedDeveloper.component" />
                    </div>

                    <!-- titolo del modale -->
                    <div class="flex my-20 text-4xl md:text-5xl lg:text-6xl">
                        <h2 class="font-semibold">
                            {{ selectedDeveloper.name[0] }}.
                            <span class="color-gray">
                                {{ selectedDeveloper.modalSubTitle[0] }}
                            </span>
                        </h2>
                    </div>
                </div>

                <!-- img -->
                <div class="flex justify-center mb-14">
                    <img :src="selectedDeveloper.modalImg[0]" alt="" class="lg:w-[500px]">
                </div>

                <!-- prima descrizione -->
                <div class="text-[18px] md:text-[20px] lg:text-[22px] text-center">
                    <p>
                        {{ selectedDeveloper.modalDescriptions[0] }}
                    </p>
                </div>

                <!-- secondo titolo -->
                <div class="flex mt-20 text-4xl md:text-5xl lg:text-6xl" v-if="selectedDeveloper.name[1]">
                    <h2 class="font-semibold">
                        {{ selectedDeveloper.name[1] }}.
                        <span class="color-gray">
                            {{ selectedDeveloper.modalSubTitle[1] }}
                        </span>
                    </h2>
                </div>

                <!-- img 2-->
                <div class="flex justify-center my-14" v-if="selectedDeveloper.modalImg[1]">
                    <img :src="selectedDeveloper.modalImg[1]" alt="" class="lg:w-[500px]">
                </div>

                <!-- seconda descrizione -->
                <div class="text-[18px] md:text-[20px] lg:text-[22px] text-center"
                    v-if="selectedDeveloper.modalDescriptions[1]">
                    <p>
                        {{ selectedDeveloper.modalDescriptions[1] }}
                    </p>
                </div>
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
            <div class="px-2 overflow-x-auto scrollbar" ref="langContainer" @scroll="ScrollLangContainer">
                <div class="flex gap-12 justify-start py-10 md:justify-center md:flex-wrap lg:gap-30">
                    <LittleSlotLight v-for="(card, index) in langCards" :key="index"
                        class="lang-card rounded-2xl py-4 px-7 shadow-xl">
                        <a :href="card.wikiLink" class="flex flex-col gap-3 h-full">
                            <!-- card img -->
                            <div class="w-[200px]">
                                <img :src="card.img" alt="" class="w-[40px]">
                            </div>

                            <!-- card title -->
                            <div class="text-lg mt-4 color-black font-semibold w-full">
                                <h4>{{ card.name }}</h4>
                            </div>

                            <!-- card description -->
                            <div class="color-black font-medium  md:w-[200px]">
                                <p>
                                    {{ card.description }}
                                </p>
                            </div>

                            <!-- link di riferimento wikipedia-->
                            <div class="flex justify-end flex-grow items-end">
                                <CardButton>
                                    <font-awesome-icon icon="fa-brands fa-wikipedia-w" />
                                </CardButton>
                            </div>
                        </a>
                    </LittleSlotLight>
                </div>
            </div>

            <!-- freccia destra per far capire che ci sono altre card orizzontalmente -->
            <div class="flex justify-end px-8 pb-6 md:hidden">
                <font-awesome-icon icon="fa-solid fa-caret-right" :class="{ 'opacity-0': isLastLangCardVisible }"
                    class="fade-opacity" />
            </div>

        </div>

        <div class="min-h-[60vh] tracking-tighter bg-[#FAFAFA]">

            <!-- title -->
            <div class="py-8 text-3xl md:text-3xl flex flex-col font-semibold text-[#2C2C2C] items-center justify-between lg:flex-row lg:px-4 lg:text-4xl"
                ref="frameworkTitle">

                <h2 class="text-center pb-2 lg:pb-0">
                    Alcuni dei framework che utilizziamo
                </h2>
            </div>

            <!-- cards -->
            <div class="overflow-x-auto px-2 scrollbar" ref="FrameContainer" @scroll="ScrollFrameContainer">
                <div class="flex gap-12 justify-start py-10 md:justify-center md:flex-wrap lg:gap-30">
                    <LittleSlotLight v-for="(card, index) in frameworkCards" :key="index"
                        class="framework-card rounded-2xl py-4 px-7 shadow-xl">
                        <a :href="card.frameLink" class="flex flex-col gap-3 h-full">
                            <!-- card img -->
                            <div class="w-[200px]">
                                <img :src="card.img" alt="" class="w-[40px]">
                            </div>

                            <!-- card title -->
                            <div class="text-lg mt-4 color-black font-semibold w-full">
                                <h4>{{ card.name }}</h4>
                            </div>

                            <!-- card description -->
                            <div class="color-black font-medium  md:w-[200px]">
                                <p>
                                    {{ card.description }}
                                </p>
                            </div>

                            <!-- link di riferimento wikipedia-->
                            <div class="flex justify-end flex-grow items-end">
                                <img :src="card.img" alt="" class="w-[30px]">
                            </div>
                        </a>
                    </LittleSlotLight>
                </div>
            </div>

            <!-- freccia destra per far capire che ci sono altre card orizzontalmente -->
            <div class="flex justify-end px-8 pb-6 md:hidden">
                <font-awesome-icon icon="fa-solid fa-caret-right" :class="{ 'opacity-0': isLastFrameCardVisible }"
                    class="fade-opacity" />
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
import CardButton from '../../components/slots/CardButton.vue';
import ResponsiveAnimation from '../../components/gif/developers/ResponsiveAnimation.vue';
import WebappAnimation from '../../components/gif/developers/WebappAnimation.vue';


export default {

    components: {
        BigSlotLight,
        LittleSlotLight,
        HeaderServices,
        CardButton,
        ResponsiveAnimation,
        WebappAnimation
    },

    data() {
        return {
            titleShow: false,
            activeLangDescriptionIndex: null,
            isLastLangCardVisible: false,
            isLastFrameCardVisible: false,
            showModal: false,
            selectedDeveloper: {},

            devCards: [
                {
                    name: [
                        'Siti Web',
                        'Il limite'
                    ],

                    img: '/img/services/developers/website.png',
                    description: 'Hai bisogno di un sito web per la tua azienda, attività o semplicemente per te stesso? Ci pensiamo noi!',
                    component: 'ResponsiveAnimation',
                    modalImg: [
                        '/img/services/developers/websiteModal.png',
                        '/img/services/developers/websiteModal2.png'
                    ],
                    modalSubTitle: [
                        'Completamente responsive per ogni dispositivo.',
                        "E' solo la tua fantasia."
                    ],
                    modalDescriptions: [
                        "Mettici alla prova con Siti Web completi e che si adattano ad ogni tua esigenza. Tempi di sviluppo rapidi, ogni tua richiesta è una nostra priorità.",

                        "Tu pensa a cosa vuoi creare, noi lo creiamo!"
                    ]
                },

                {
                    name: [
                        'Web App',
                        ''
                    ],
                    img: '/img/services/developers/webapp.png',
                    description: 'Sviluppiamo anche Web App su misura per te! Senza scroll della pagina e con tutte le funzionalità richieste.',
                    component: 'WebappAnimation',
                    modalImg: [
                        '/img/services/developers/WebappModal.png',
                    ],
                    modalSubTitle: [
                        'Disegnate a misura per te.',
                        "E' solo la tua fantasia."
                    ],
                    modalDescriptions: [
                        "Nessuno scroll della pagina, tutto visibile a schermo e con tutte le funzioni da te richieste. Alla fine sono come Siti Web, solo tutto a portata di schermo!",
                    ]
                },

                {
                    name: [
                        'Software Aziendali',
                        'Crea'
                    ],
                    img: '/img/services/developers/software.png',
                    description: 'Software di calcolo, filtraggio, monitoraggio delle statistiche e altri tool utili per te e la tua attività!',
                    component: '',
                    modalImg: [
                        '/img/services/developers/softwareModal.png',
                        '/img/services/developers/softwareModal2.png',
                    ],
                    modalSubTitle: [
                        'Qualsiasi.',
                        'Velocizza.'
                    ],
                    modalDescriptions: [
                        "Da software di calcolo a software di monitoraggio delle statistiche, adattiamo il progetto per aiutare te e la tua azienda a risparmiare tempo e fatica.",

                        "Lascia fare al software tutte quelle azioni noiose e ripetitive, concentrati invece sulle cose più importanti."
                    ]
                },
            ],
            langCards: [
                {
                    name: 'Html5',
                    img: '/img/services/developers/HTML5.png',
                    description: 'La base dello sviluppo Web, senza non vai da nessuna parte.',
                    wikiLink: 'https://it.wikipedia.org/wiki/HTML'
                },

                {
                    name: 'Css3',
                    img: '/img/services/developers/css.png',
                    description: "CSS ti permette di stilizzare la pagina come vuoi. 'Da un garage ad un loft' diceva qualcuno.",
                    wikiLink: 'https://it.wikipedia.org/wiki/CSS'
                },

                {
                    name: 'Javascript',
                    img: '/img/services/developers/js.png',
                    description: "Tutto ciò che riguarda interazione con gli utenti? Ci pensa Javascript.",
                    wikiLink: 'https://it.wikipedia.org/wiki/JavaScript'
                },

                {
                    name: 'PHP',
                    img: '/img/services/developers/php.png',
                    description: "Anche PHP è stato originariamente concepito per la programmazione di pagine dinamiche, ora è molto di più.",
                    wikiLink: 'https://it.wikipedia.org/wiki/PHP'
                },

                {
                    name: 'C#',
                    img: '/img/services/developers/c-sharp.png',
                    description: "C# (o C Sharp) è un linguaggio di programmazione moderno sviluppato da Microsoft e fa parte dell'ecosistema .NET.",
                    wikiLink: 'https://it.wikipedia.org/wiki/C_sharp'
                },
            ],
            frameworkCards: [
                {
                    name: 'Bootstrap',
                    img: '/img/services/developers/bootstrap.png',
                    description: 'Bootstrap, un framework CSS per facilitare il processo di sviluppo di siti web responsive e mobile-first.Fornisce anche molti componenti già fatti.',
                    frameLink: 'https://getbootstrap.com/'
                },

                {
                    name: 'Tailwind',
                    img: '/img/services/developers/tailwind.png',
                    description: 'Tailwind CSS è un framework CSS di basso livello, molto personalizzabile, che offre tutti gli elementi di costruzione di cui hai bisogno per creare progetti su misura.',
                    frameLink: 'https://tailwindcss.com/'
                },

                {
                    name: 'Vue Js',
                    img: '/img/services/developers/vue.png',
                    description: 'Vue è un framework Javascript per la creazione di interfacce utente (UI, User Interface), quindi è usato principalmente per lo sviluppo front-end.',
                    frameLink: 'https://vuejs.org/'
                },

                {
                    name: 'Laravel',
                    img: '/img/services/developers/laravel.png',
                    description: 'Laravel è un framework PHP per applicazioni web. Semplifica alcune delle attività più comuni dei progetti web, come autenticazione, autorizzazione, routing, sessioni, caching.',
                    FrameLink: 'https://laravel.com/'
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

        ///////////////////////////////////////////// MODALE
        openModal(developer) {
            this.selectedDeveloper = developer;
            this.showModal = true;
            this.disableBodyScroll();
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

        // fai sparire freccia se viene visualizzata ultima card linguaggi
        ScrollLangContainer() {
            const container = this.$refs.langContainer;
            const containerRight = container.getBoundingClientRect().right;
            const lastCard = document.querySelector('.lang-card:last-child');
            const lastCardRight = lastCard.getBoundingClientRect().right;

            if (lastCardRight <= containerRight + 1) {
                this.isLastLangCardVisible = true;
            } else {
                this.isLastLangCardVisible = false;
            }
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
                duration: 0.5
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

        // fai sparire freccia se viene visualizzata ultima card Framework
        ScrollFrameContainer() {
            const container = this.$refs.FrameContainer;
            const containerRight = container.getBoundingClientRect().right;
            const lastCard = document.querySelector('.framework-card:last-child');
            const lastCardRight = lastCard.getBoundingClientRect().right;

            if (lastCardRight <= containerRight + 1) {
                this.isLastFrameCardVisible = true;
            } else {
                this.isLastFrameCardVisible = false;
            }
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