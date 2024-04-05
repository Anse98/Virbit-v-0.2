<template>
    <section class="min-h-[100vh]">

        <HeaderProducts></HeaderProducts>

    </section>
</template>

<script>
import LittleSlotLight from '../components/slots/LittleSlotLight.vue';
import HeaderProducts from '../components/HeaderProducts.vue';

export default {
    components: {
        LittleSlotLight,
        HeaderProducts
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
</style>
