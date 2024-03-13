<template>
    <section>
        <div class="container mx-auto">
            <transition-group name="slide">
                <div class="p-2 flex justify-center flex-wrap gap-12" v-if="services.length > 0">
                    <LittleSlotLight v-for="(service, index) in services" :key="index" class="slide-item"
                        :style="{ 'transition-delay': index * 0.1 + 's' }">
                        <div>
                            <img :src="service.img" alt="">
                        </div>

                        <div>
                            <span>{{ service.title }}</span>
                        </div>
                    </LittleSlotLight>
                </div>
            </transition-group>
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
                    img: "src/img/services/sistemist-2.png"
                },

                {
                    title: "Integrazione",
                    img: "src/img/services/integration-2.png"
                },

                {
                    title: "Analisti",
                    img: "src/img/services/analyst.png"
                },

                {
                    title: "Cybersecurity",
                    img: "src/img/services/cybersecurity-2.png"
                },

                {
                    title: "Sviluppatori",
                    img: "src/img/services/developers-2.png"
                }
            ]
        };
    },

    mounted() {
        this.services.forEach((service, index) => {
            setTimeout(() => {
                const slideItems = document.querySelectorAll('.slide-item');
                slideItems[index].classList.add('slide-enter');
            }, index * 5); // Adjust the delay as needed
        });
    },
}
</script>

<style scoped>
.slide-item {
    transform: translateY(-148px);
    transition: transform 0.8s ease;
}

.slide-enter-active {
    transition: transform 1s ease;
}

.slide-enter {
    transform: translateY(0);
}
</style>
