<template>
    <section class="min-h-[100vh]">
        <div class="container mx-auto">
            <!-- little cards -->
            <div class="p-2 flex justify-center flex-wrap gap-12" v-if="products.length > 0">
                <LittleSlotLight v-for="(product, index) in products" :key="index" class="slide-item"
                    :style="{ 'transition-delay': index * 100 + 'ms', 'opacity': product.visible ? '1' : '0' }">
                    <div>
                        <img :src="product.img" alt="">
                    </div>

                    <div>
                        <span>{{ product.title }}</span>
                    </div>
                </LittleSlotLight>
            </div>
        </div>

        <!-- page title small -->
        <div class="tracking-tighter py-10">
            <div class="container mx-auto flex font-medium justify-between items-center px-20">
                <!-- title -->
                <span class="text-3xl text-[#454545]">
                    <font-awesome-icon icon="fa-solid fa-rocket" />
                </span>
                <!-- icon -->
                <span class="text-xl text-[#4d4c4c]">
                    Prodotti
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
            products: [
                {
                    title: "Gestionali",
                    img: "src/img/products/gestional.png",
                    visible: false
                },
                {
                    title: "Internet",
                    img: "src/img/products/internet.png",
                    visible: false
                },
                {
                    title: "Telefonia",
                    img: "src/img/products/telephony.png",
                    visible: false
                },
                {
                    title: "GDPR",
                    img: "src/img/products/gdpr-2.png",
                    visible: false
                },
            ]
        };
    },
    methods: {

        showProduct(index) {
            setTimeout(() => {
                this.products[index].visible = true;
            }, index * 100); //delay dell'animazione
        },

        showAllProducts() {
            this.products.forEach((product, index) => {
                this.showProduct(index);
            });
        },
    },
    mounted() {
        this.showAllProducts();
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
