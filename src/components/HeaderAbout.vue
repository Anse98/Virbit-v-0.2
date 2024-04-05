<template>
    <div
        class="py-1 bg-[#F5F5F7] px-2 tracking-tighter flex justify-between text-[#4d4c4c] mb-3 text-[12px] sm:text-[16px] sm:px-10">
        <span class="font-semibold ">
            About
        </span>
        <span class="text-[11px] sm:text-[14px]">
            <font-awesome-icon icon="fa-solid fa-tower-broadcast" />
        </span>
    </div>

    <!--little cards -->
    <div class="overflow-x-auto scrollbar" v-if="informations.length > 0">
        <div class="flex justify-center gap-10">
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