<script>
import { gsap } from 'gsap';

export default {

    data() {
        return {

            headerItems: [
                {
                    title: "Servizi",
                    isMenuOpen: false,
                    routeName: "services",
                    subCategories: [
                        {
                            name: "Sistemisti",
                            routeName: "sistemists"
                        },

                        {
                            name: "Integrazione tra sistemi informatici diversi",
                            routeName: "integration"
                        },

                        {
                            name: "Analisti, Consulenti ed Insegnanti",
                            routeName: "analyst"
                        },

                        {
                            name: "Sicurezza Informatica",
                            routeName: "cybersecurity"
                        },

                        {
                            name: "Sviluppatori",
                            routeName: "developers"
                        },
                    ],
                    icon: "ranking-star"
                },

                {
                    title: "Prodotti",
                    isMenuOpen: false,
                    routeName: "products",
                    subCategories: [
                        {
                            name: "Gestionali",
                        },

                        {
                            name: "Internet",
                        },
                        {
                            name: "Telefonia",
                        },

                        {
                            name: "GDPR",
                        },
                    ],
                    icon: "rocket"
                },



                {
                    title: "About",
                    isMenuOpen: false,
                    routeName: "about",
                    subCategories: [
                        {
                            name: "Dove ci Trovi",
                        },

                        {
                            name: "Contattaci",
                        },

                        {
                            name: "Informazioni",
                        },


                    ],
                    icon: "tower-broadcast"
                }
            ],

            isMobileMenuVisible: false,
            isOverlayVisible: false,
            isMenuOpen: false,
            activeIndex: null,
            linkClickedRecently: false,
            currentIcon: 'fa-solid fa-bars',

        }
    },

    methods: {
        // mobile
        toggleMobileMenu() {
            this.isMobileMenuVisible = !this.isMobileMenuVisible;
        },

        hideMobileMenu() {
            this.isMobileMenuVisible = false;
            this.isOverlayVisible = false;
        },

        // pc
        showMenu(index) {
            this.headerItems[index].isMenuOpen = true;
            this.activeIndex = index;
        },

        hideMenu(index) {
            if (this.activeIndex === index) {
                this.headerItems[index].isMenuOpen = false;
            }
        },

        clickMenu() {
            this.isMenuOpen = true;

            if (this.isMenuOpen) {

                this.linkClickedRecently = true;

                setTimeout(() => {
                    this.linkClickedRecently = false;
                    this.isMenuOpen = false
                    this.activeIndex = null;
                }, 1500);
            }
        },

        canOpenMenu() {
            return !this.linkClickedRecently;
        },

        showOverlay() {

            this.isOverlayVisible = true;

        }
    }
};
</script>

<template>
    <header>
        <nav class="text-[#D1D1D1] bg-gradient-to-r from-[#232324] via-[#141415] to-[#232324] select-none">
            <div
                class="flex container mx-auto justify-between items-center text-[14px] gap-16 tracking-tight sm:justify-center p-4">
                <!-- logo -->
                <a href="/">
                    <div>
                        <img src="../img/logo-3.png" alt="" class="w-[22px] lg:w-[26px]">
                    </div>
                </a>

                <!-- header items mobile -->
                <div class="sm:hidden">
                    <div @click="toggleMobileMenu()" class="relative pr-4">
                        <font-awesome-icon :icon="currentIcon" />
                    </div>

                    <transition name="slide-down" @enter="showOverlay">
                        <div class="fixed w-full right-0 left-0 top-0 bg-[#FAFAFA] z-20 p-2 text-[20px] text-[#545456] tracking-tighter flex flex-col items-center justify-between text-center font-semibold h-[50vh]"
                            v-show="isMobileMenuVisible">

                            <ul class="pt-10">
                                <li class="mb-4" v-for="(   item, index   ) in    headerItems   " :key="index">
                                    <router-link :to="{ name: item.routeName }" @click="hideMobileMenu()">
                                        {{ item.title }}
                                        <span class="text-[12px] pl-2">
                                            <font-awesome-icon :icon="['fas', item.icon]" />
                                        </span>
                                    </router-link>
                                </li>
                            </ul>

                            <div class="pb-6">
                                <span @click="hideMobileMenu()">
                                    <font-awesome-icon icon="fa-solid fa-xmark" />
                                </span>
                            </div>
                        </div>
                    </transition>
                </div>

                <div class="overlay" v-show="isOverlayVisible" @click="hideMobileMenu"></div>


                <!--header items PC-->

                <ul class="sm:flex items-center hidden text-[16px]">
                    <li v-for="(   item, index   ) in    headerItems   " key="index" @mouseover="showMenu(index)"
                        class="py-2  hover:text-white">
                        <router-link :to="{ name: item.routeName }" @click="clickMenu()">
                            <span class="py-2 px-6">
                                {{ item.title }}
                                <font-awesome-icon :icon="['fas', item.icon]" class="pl-1 text-[14px]" />
                            </span>
                        </router-link>



                        <!-- dropdown -->
                        <span v-if="canOpenMenu() && item.isMenuOpen && activeIndex === index"
                            class="absolute bg-gradient-to-r from-[#232324] via-[#141415] to-[#232324] mt-1 top-[50px] left-0 right-0 flex flex-col z-40 text-[22px] font-semibold tracking-wide"
                            @mouseleave="hideMenu(index)" id="dropdownn">

                            <!-- titolo dropdown -->
                            <div class="py-8 flex justify-evenly items-center px-10">
                                <span class="text-4xl title-gradient flex flex-col items-center">
                                    Virbit S.r.l.
                                </span>


                                <span class="text-sm text-[#D1D1D1] flex flex-col items-center">
                                    {{ item.title }}
                                    <span>
                                        <font-awesome-icon :icon="['fas', item.icon]" class="pl-1" />
                                    </span>
                                </span>

                            </div>

                            <!-- lista dropdown -->
                            <div class="flex justify-center">
                                <ul class="p-4 w-[30%] text-white flex flex-col  gap-6 mt-6 min-h-[50vh]">
                                    <li v-for="(   subItem, subIndex   ) in    item.subCategories   " :key="subIndex">
                                        <router-link :to="{ name: subItem.routeName }" @click="clickMenu()">
                                            <span class="border-gray-400 hover:border-b">
                                                {{ subItem.name }}
                                            </span>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </span>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style scoped>
/* Aggiungi le seguenti regole CSS per la transizione */
.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.5s ease;
}

.slide-down-enter-from {
    opacity: 0.4;
}

.slide-down-enter-to {
    transition: opacity 0.3s ease;
}

.slide-down-leave-to {
    opacity: 0;
    transform: translateY(-100%);
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* Colore di sfondo scuro semi-trasparente */
    z-index: 10;
    /* Assicura che l'overlay sia sopra tutti gli altri contenuti */
}
</style>
