<template>
    <section>
        <div class="container mx-auto">
            <transition-group name="slide">
                <div class="p-2 flex justify-center flex-wrap gap-12" v-if="products.length > 0">
                    <LittleSlotLight v-for="(product, index) in products" :key="index" class="slide-item"
                        :style="{ 'transition-delay': index * 0.1 + 's' }">
                        <div>
                            <img :src="product.img" alt="">
                        </div>

                        <div>
                            <span>{{ product.title }}</span>
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
            products: [
                {
                    title: "Gestionali",
                    img: "src/img/products/gestional.png"
                },

                {
                    title: "Internet",
                    img: "src/img/products/internet.png"
                },

                {
                    title: "Telefonia",
                    img: "src/img/products/telephony.png"
                },

                {
                    title: "GDPR",
                    img: "src/img/products/gdpr-2.png"
                },
            ]
        };
    },

    methods: {

    },
    mounted() {
        this.products.forEach((product, index) => {
            setTimeout(() => {
                const slideItems = document.querySelectorAll('.slide-item');
                slideItems[index].classList.add('slide-enter');
            }, index * 7); // Adjust the delay as needed
        });
    },
}
</script>

<style scoped>
.slide-item {
    transform: translateY(-148px);
    transition: transform 0.5s ease;
}

.slide-enter-active {
    transition: transform 0.5s ease;
}

.slide-enter {
    transform: translateY(0);
}
</style>