<template>
    <section class="min-h-[100vh]">
        <HeaderServices></HeaderServices>
        <div class="container mx-auto">

            <!-- page title big -->
            <div class="flex flex-col py-3 ">
                <div class="text-4xl flex flex-col items-center show-title tracking-tight text-[#2c2c2c] px-2 md:text-5xl lg:text-6xl"
                    :style="{ 'opacity': titleShow ? '1' : '0' }">
                    <h1 class="text-center leading-tight">
                        Tu ci dici cosa fare
                        <span class="title-gradient">...</span>
                    </h1>
                    <!-- subtitle -->
                    <div class="tracking-tight flex justify-center show-sub-title lg:justify-end pt-2 mb-4"
                        :style="{ 'opacity': subTitleShow ? '1' : '0' }">
                        <h4 class="text-gray-300 tracking-tighter">noi lo facciamo<span class="text-[#4d4c4c]">.</span>
                        </h4>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeaderServices from '../components/HeaderServices.vue';



export default {
    components: {
        HeaderServices
    },
    data() {
        return {
            services: [
                {
                    title: "Sistemisti",
                    img: "/img/services/sistemist-2.png",
                    visible: false,
                    routeName: 'services/system-engineers'
                },
                {
                    title: "Integrazione",
                    img: "/img/services/integration-2.png",
                    visible: false,
                    routeName: 'services/integration'
                },
                {
                    title: "Analisti",
                    img: "/img/services/analyst.png",
                    visible: false,
                    routeName: 'services/analyst'
                },
                {
                    title: "Cybersecurity",
                    img: "/img/services/cybersecurity-2.png",
                    visible: false,
                    routeName: 'services/cybersecurity'
                },
                {
                    title: "Sviluppatori",
                    img: "/img/services/developers-2.png",
                    visible: false,
                    routeName: 'services/developers'
                },
            ],

            titleShow: false,
            subTitleShow: false,
            colorLittleTitle: false,
        };
    },
    methods: {
        // animazione sui servizi
        showService(index) {
            setTimeout(() => {
                this.services[index].visible = true;
            }, index * 100); // delay animazione
        },

        showAllServices() {
            this.services.forEach((service, index) => {
                this.showService(index);
            });
        },

        // animazione titolo
        showTitle() {
            setTimeout(() => {
                this.titleShow = true
            }, 1300)
        },

        // animazione sottotitolo
        showSubTitle() {
            setTimeout(() => {
                this.subTitleShow = true
            }, 1700)
        },
    },

    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        this.showAllServices();
        this.showTitle();
        this.showSubTitle();
    },
}
</script>

<style scoped>
.slide-item {
    opacity: 0;
    transition: opacity 1.5s ease;
}

.show-title {
    opacity: 0;
    transition: opacity 2s ease;
}

.show-sub-title {
    opacity: 0;
    transition: opacity 2s ease-in-out;
}

.scrollbar::-webkit-scrollbar {
    display: none;
}
</style>
