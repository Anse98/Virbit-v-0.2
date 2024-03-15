<template>
    <section class="min-h-[100vh]">
        <div class="container mx-auto">
            <!--little cards -->
            <div class="p-2 flex justify-center flex-wrap gap-12" v-if="informations.length > 0">
                <LittleSlotLight v-for="(info, index) in informations" :key="index" class="slide-item"
                    :style="{ 'transition-delay': index * 100 + 'ms', 'opacity': info.visible ? '1' : '0' }">
                    <div>
                        <img :src="info.img" alt="">
                    </div>

                    <div>
                        <span>{{ info.title }}</span>
                    </div>
                </LittleSlotLight>
            </div>
        </div>

        <!-- page title small -->
        <div class="tracking-tighter py-10">
            <div class="container mx-auto flex font-medium justify-between items-center px-20">
                <!-- title -->
                <span class="text-xl text-[#454545]">
                    Qualcosa su di noi
                </span>
                <!-- icon -->
                <span class="text-3xl text-[#4d4c4c]">
                    <font-awesome-icon icon="fa-solid fa-tower-broadcast" />
                </span>
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
            informations: [
                {
                    title: "Dove Siamo",
                    img: "src/img/about/where-we-are.png",
                    visible: false
                },

                {
                    title: "Contatti",
                    img: "src/img/about/contact-us.png",
                    visible: false
                },

                {
                    title: "Informazioni",
                    img: "src/img/about/information.png",
                    visible: false
                },
            ]
        };
    },
    methods: {

        showInfo(index) {
            setTimeout(() => {
                this.informations[index].visible = true;
            }, index * 100); //delay dell'animazione
        },

        showAllInformations() {
            this.informations.forEach((info, index) => {
                this.showInfo(index);
            });
        },
    },
    mounted() {
        this.showAllInformations();
    }
}
</script>

<style scoped>
/* comparsa delle card */
.slide-item {
    opacity: 0;
    transition: opacity 1.5s ease;
}
</style>