<template>
    <section class="min-h-[100vh]">
        <div class="container mx-auto">

            <!-- little cards -->
            <div class="p-2 flex justify-center flex-wrap gap-12" v-if="services.length > 0">
                <router-link v-for="(service, index) in services" :key="index" :to="service.routeName">
                    <LittleSlotLight class="slide-item h-[100%]"
                        :style="{ 'transition-delay': index * 100 + 'ms', 'opacity': service.visible ? '1' : '0' }">
                        <div>
                            <img :src="service.img" alt="">
                        </div>

                        <div>
                            <span>{{ service.title }}</span>
                        </div>
                    </LittleSlotLight>
                </router-link>
            </div>
        </div>

        <!-- page title small -->
        <div class="tracking-tighter py-10">
            <div class="container mx-auto flex font-medium justify-between items-center px-20">
                <!-- title -->
                <span class="text-xl text-[#4d4c4c]">
                    Servizi
                </span>
                <!-- icon -->
                <span class="text-3xl text-[#454545]">
                    <font-awesome-icon icon="fa-solid fa-ranking-star" />
                </span>
            </div>
        </div>

        <!-- page title big -->
        <div class="flex flex-col py-3 ">
            <div class="text-6xl flex flex-col items-center show-title tracking-tight text-[#2c2c2c]"
                :style="{ 'opacity': titleShow ? '1' : '0' }">
                <h1>Specializzati nell'ambito tech
                    <span class="title-gradient">...</span>
                </h1>
                <!-- subtitle -->
                <div class="tracking-tight flex w-[50%] justify-end show-sub-title"
                    :style="{ 'opacity': subTitleShow ? '1' : '0' }">
                    <h4 class="text-gray-300 tracking-tighter">e non solo<span class="text-[#4d4c4c]">.</span></h4>
                </div>
            </div>
        </div>


    </section>
</template>

<script>
import LittleSlotLight from '../components/slots/LittleSlotLight.vue';

export default {
    components: {
        LittleSlotLight,
    },
    data() {
        return {
            services: [
                {
                    title: "Sistemisti",
                    img: "src/img/services/sistemist-2.png",
                    visible: false,
                    routeName: 'services/system-engineers'
                },
                {
                    title: "Integrazione",
                    img: "src/img/services/integration-2.png",
                    visible: false,
                    routeName: 'services/integration'
                },
                {
                    title: "Analisti",
                    img: "src/img/services/analyst.png",
                    visible: false,
                    routeName: 'services/analyst'
                },
                {
                    title: "Cybersecurity",
                    img: "src/img/services/cybersecurity-2.png",
                    visible: false,
                    routeName: 'services/cybersecurity'
                },
                {
                    title: "Sviluppatori",
                    img: "src/img/services/developers-2.png",
                    visible: false,
                    routeName: 'services/developers'
                },
            ],

            titleShow: false,
            subTitleShow: false,
            colorLittleTitle: false
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
        }
    },

    mounted() {
        this.showAllServices();
        this.showTitle();
        this.showSubTitle();
    }
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
</style>
