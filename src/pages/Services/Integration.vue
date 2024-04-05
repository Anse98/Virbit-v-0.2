<template>
    <section>

        <HeaderServices></HeaderServices>

        <div class="container mx-auto tracking-tighter">
            <!-- title -->
            <div class="text-4xl tracking-tighter text-center text-[#2c2c2c] mb-16 lg:pb-14 lg:text-5xl lg:text-start">
                <h1 class="main-title">
                    <span>Integrazione</span> tra diversi sistemi Informatici
                </h1>
            </div>

            <!-- img -->
            <div class="jumbo opacity-0 lg:flex lg:justify-end lg:pb-10">
                <img src="../../img/jumboIntegration.png" alt="" class="lg:w-[700px]">
            </div>

            <!-- subtitle -->
            <div class="ps-2 sub-title opacity-0 text-[#2c2c2c] lg:flex lg:justify-center">
                <p class="text-2xl lg:text-3xl lg:pb-12">
                    Fai comunicare tra loro sistemi informativi di nature diverse.
                </p>
            </div>

            <div class="mt-10 px-2 leading-8 lg:text-center lg:text-xl">
                <p>
                    Immaginati un software di presenze che deve essere integrato con un software di gestione del
                    personale, sono due programmi differenti ma che devono poter comunicare l'uno con l'altro!
                </p>
            </div>
        </div>

        <div class="mt-10 px-2 leading-8 text-center text-[15px] bg-[#FAFAFA] flex justify-center p-6 lg:mt-24">

            <!-- card -->
            <div class="border rounded-lg p-2 w-[350px] bg-white integration-card lg:w-[600px]">
                <div class="flex justify-center pb-12">
                    <img src="/img/services/sistems_integration/integrationCube.png" alt="" class="w-[300px]">
                </div>

                <p class="text-[#3d3c3c] card-text lg:text-[16px]">
                    In poche parole si mette una scatola (software) in mezzo ai due sistemi che devono comunicare
                    che
                    traduca i messaggi da un sistema verso l'altro. <br>
                    <span class="font-semibold">Un interprete!</span>
                </p>
            </div>

        </div>
    </section>
</template>

<script>
import HeaderServices from '../../components/HeaderServices.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {

    components: {
        HeaderServices
    },

    data() {
        return {

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
            });
        },

        // animazione jumbotron
        animateJumbo() {
            gsap.to('.jumbo', {
                scrollTrigger: {
                    trigger: '.jumbo',
                    toggleActions: "play none none none"
                },
                autoAlpha: 1,
                y: -16,
                duration: 0.7,
                ease: "power1.inOut",
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
                duration: 0.7,
                y: 16,
                ease: "power1.inOut",
            });
        },

        // animazione card integration
        animateIntegrationCard() {
            gsap.from('.integration-card', {
                opacity: 0,
                y: 40,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.integration-card',
                    start: "top 90%",
                    end: "top center",
                    toggleActions: "play none none none",
                },
            });
        },

        // animazione testo card integration
        animateIntegrationCardText() {
            gsap.from('.card-text', {
                opacity: 0,
                y: -40,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.card-text',
                    start: "top 100%",
                    end: "top center",
                    toggleActions: "play none none none",
                },
            });
        },
    },

    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        this.animateTitle();
        setTimeout(() => {
            this.animateJumbo();
            this.animateSubTitle();
        }, 500);
        this.animateIntegrationCard();
        this.animateIntegrationCardText();
    },
}
</script>


<style scoped></style>