<template>
    <div class="bg-[#414141] px-2 tracking-tight flex justify-between text-[#faf8f8] mb-3 text-[15px] sm:text-[16px] sm:px-10 sticky top-0 left-0 right-0 z-20 items-center"
        id="headerProduct">
        <span class="font-semibold flex gap-4 items-center" id="containerHeaderSticky">
            <span>Prodotti</span>
            <span class="font-normal text-[14px] sm:text-[15px] text-[#dcdcdc] md:hidden" id="currentPageTitleProd">
                {{ currentPageProduct }}
            </span>
        </span>
        <span class="text-[13px] sm:text-[14px]">
            <font-awesome-icon icon="fa-solid fa-rocket" />
        </span>
    </div>

    <!-- container cards -->
    <div class="flex mb-12 justify-center relative">

        <!-- freccetta sinistra -->
        <div class="flex items-center border-r-[1px] border-[#343434] px-2 sm:hidden fade-opacity"
            @click="scrollCards('left')" ref="leftArrow" id="leftArrow" :class="{ 'opacity-0': firstCardVisible }">
            <font-awesome-icon icon="fa-solid fa-chevron-left" />
        </div>

        <div class="overflow-x-auto scrollbar flex gap-10 sm:justify-center sm:gap-16 relative"
            v-if="products.length > 0" ref="scrollContainer" @scroll="checkCardVisibility">

            <!-- cards -->
            <router-link v-for="(product, index) in products" :key="index" :to="product.routeName" class="card-item">
                <LittleSlotLight class="slide-item h-[100%]"
                    :style="{ 'transition-delay': index * 100 + 'ms', 'opacity': product.visible ? '1' : '0' }"
                    @click="setCurrentPage(product.title)">
                    <div class="w-[60px]">
                        <img :src="product.img" alt="">
                    </div>

                    <div class="text-[#4d4c4c]">
                        <span>{{ product.title }}</span>
                    </div>
                </LittleSlotLight>
            </router-link>

        </div>

        <!-- freccetta destra -->
        <div class="flex items-center border-l-[1px] border-[#343434] px-2 sm:hidden fade-opacity"
            @click="scrollCards('right')" :class="{ 'opacity-0': lastCardVisible }" ref="rightArrow">
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </div>

    </div>


</template>

<script>
import LittleSlotLight from '../components/slots/LittleSlotLight.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
                    routeName: '/products/gestional'
                },
                {
                    title: "Internet",
                    img: "/img/products/internet.png",
                    visible: false,
                    routeName: '/products/internet'
                },
                {
                    title: "Telefonia",
                    img: "/img/products/telephony.png",
                    visible: false,
                    routeName: '/products/telephony'
                },
                {
                    title: "GDPR",
                    img: "/img/products/gdpr-2.png",
                    visible: false,
                    routeName: '/products/gdpr'
                },
            ],
            firstCardVisible: true,
            lastCardVisible: false,
            currentPageProduct: '',
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

        scrollCards(direction) {
            const container = document.querySelector('.scrollbar ');
            const scrollAmount = 200; // Change this value as per your requirement

            if (direction === 'left') {
                const currentScroll = container.scrollLeft;
                gsap.to(container,
                    {
                        scrollLeft: Math.max(currentScroll - scrollAmount, 0),
                        duration: 0.5,
                    });

            } else if (direction === 'right') {
                gsap.to(container,
                    {
                        scrollLeft: '+=' + scrollAmount,
                        duration: 0.5,
                    });
            }
        },

        checkCardVisibility() {
            const containerRect = this.$refs.scrollContainer.getBoundingClientRect();
            const lastCardRect = this.$refs.scrollContainer.querySelector('.card-item:last-child').getBoundingClientRect();

            // ho aggiunto il piu 1 per calcolare un po di margine prima di far sparire la freccia
            if (lastCardRect.right <= containerRect.right + 1) {
                this.lastCardVisible = true;
            } else {
                this.lastCardVisible = false;
            }

            const firstCardRect = this.$refs.scrollContainer.querySelector('.card-item:first-child').getBoundingClientRect();

            if (firstCardRect.left >= containerRect.left) {
                this.firstCardVisible = true;
            } else {
                this.firstCardVisible = false;
            }
        },

        setCurrentPage(title) {
            this.currentPageProduct = title

            // Salva la variabile currentPage nell'LocalStorage del browser
            localStorage.setItem('currentPageProduct', title);
        },

        animateHeaderProduct() {
            const headerProduct = document.getElementById('headerProduct');
            const headerProductTitle = document.getElementById('currentPageTitleProd')
            if (headerProduct) {
                if (window.scrollY > 300) {
                    headerProduct.classList.add('scrolled-sticky-header');
                    headerProductTitle.classList.add('color-black', 'page-current-title');
                    containerHeaderSticky.classList.add('flex-col');
                    containerHeaderSticky.classList.remove('gap-4');
                } else {
                    headerProduct.classList.remove('scrolled-sticky-header');
                    headerProduct.classList.add('restore-sticky-header');
                    headerProductTitle.classList.remove('color-black', 'page-current-title');
                    containerHeaderSticky.classList.remove('flex-col');
                    containerHeaderSticky.classList.add('gap-4');
                }
            }

        }
    },

    mounted() {
        gsap.registerPlugin(ScrollTrigger);

        this.showAllProducts();
        this.checkCardVisibility();

        // eventlistener per animare barra header-product
        window.addEventListener('scroll', this.animateHeaderProduct)

        // Controlla se la variabile currentPage è già stata salvata nell'LocalStorage
        const savedPage = localStorage.getItem('currentPageProduct');
        if (savedPage) {
            // Se presente, imposta la variabile currentPage al valore salvato
            this.currentPageProduct = savedPage;
        } else {
            // Altrimenti, imposta la variabile currentPage al valore predefinito
            this.currentPageProduct = '';
        }
    }
}
</script>

<style scoped>
/* comparsa delle card */
.slide-item {
    opacity: 0;
    transition: opacity 1.5s ease;
}

.scrolling-effect {
    transition: transform 0.5s ease-in-out;
}
</style>