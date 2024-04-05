<template>
    <section class="min-h-[100vh]">

        <HeaderAbout></HeaderAbout>

    </section>
</template>

<script>
import LittleSlotLight from '../components/slots/LittleSlotLight.vue';
import HeaderAbout from '../components/HeaderAbout.vue';

export default {
    components: {
        LittleSlotLight,
        HeaderAbout
    },
    data() {
        return {
            informations: [
                {
                    title: "Dove Siamo",
                    img: "/img/About/where-we-are.png",
                    visible: false
                },

                {
                    title: "Contatti",
                    img: "/img/About/contact-us.png",
                    visible: false
                },

                {
                    title: "Informazioni",
                    img: "/img/About/information.png",
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

.scrollbar::-webkit-scrollbar {
    display: none;
}
</style>