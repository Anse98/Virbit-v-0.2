<template>
    <section class="min-h-[100vh]">
        <div class="container mx-auto">
            <!-- little cards -->
            <div class="overflow-x-auto scrollbar" v-if="products.length > 0">
                <div class="flex justify-start gap-10">
                    <router-link v-for="(product, index) in products" :key="index" :to="product.routeName">
                        <LittleSlotLight class="slide-item h-[100%]"
                            :style="{ 'transition-delay': index * 100 + 'ms', 'opacity': product.visible ? '1' : '0' }">
                            <div>
                                <img :src="product.img" alt="">
                            </div>

                            <div>
                                <span>{{ product.title }}</span>
                            </div>
                        </LittleSlotLight>
                    </router-link>
                </div>
            </div>
        </div>

        <!-- page title small -->
        <div class="tracking-tighter py-10 hidden md:block">
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
                    img: "/img/products/gestional.png",
                    visible: false,
                    routeName: 'products/gestional'
                },
                {
                    title: "Internet",
                    img: "/img/products/internet.png",
                    visible: false,
                    routeName: 'products/internet'
                },
                {
                    title: "Telefonia",
                    img: "/img/products/telephony.png",
                    visible: false,
                    routeName: 'products/telephony'
                },
                {
                    title: "GDPR",
                    img: "/img/products/gdpr-2.png",
                    visible: false,
                    routeName: 'products/gdpr'
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

.scrollbar::-webkit-scrollbar {
    display: none;
}
</style>
