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

            if (this.isMobileMenuVisible) {
                this.isOverlayVisible = true
            } else {
                this.isOverlayVisible = false
            }

            gsap.from("#menuItemsMob li",
                {
                    duration: 0.6,
                    opacity: 0,
                    y: 40,
                    stagger: 0.1
                });
        },

        hideMobileMenu() {
            this.isMobileMenuVisible = false;
            this.isOverlayVisible = false;

            const checkboxMenu = document.getElementById('checkbox-menu')
            if (checkboxMenu.checked) {
                checkboxMenu.checked = false
            }
        },

        // pc
        showMenu(index) {
            this.headerItems[index].isMenuOpen = true;
            this.activeIndex = index;
            if (!this.linkClickedRecently) {
                this.isOverlayVisible = true
            }
        },

        hideMenu(index) {
            if (this.activeIndex === index) {
                this.headerItems[index].isMenuOpen = false;
            }

            this.isOverlayVisible = false
        },

        clickMenu() {
            this.isMenuOpen = true
            this.isOverlayVisible = false

            if (this.isMenuOpen) {

                this.linkClickedRecently = true;

                setTimeout(() => {
                    this.linkClickedRecently = false;
                    this.isMenuOpen = false
                    this.activeIndex = null;
                }, 1200);
            }
        },

        canOpenMenu() {
            return !this.linkClickedRecently;
        },

        showOverlay() {
            this.isOverlayVisible = true;
        }
    },

    mounted() {

    }
};
</script>

<template>
    <header>
        <nav class="text-[#323232] select-none bg-[#FAFAFC]">
            <div
                class="flex container mx-auto justify-between items-center text-[14px] gap-24  tracking-tight sm:justify-center p-4">
                <!-- logo -->
                <a href="/">
                    <div>
                        <img src="/img/logo-dark.png" alt="" class="w-[22px] lg:w-[26px]">
                    </div>
                </a>

                <!-- header items mobile -->
                <div class="sm:hidden">
                    <div class="relative pr-2">
                        <!-- menu icon -->

                        <div class="hamburger">
                            <input class="checkbox" type="checkbox" id="checkbox-menu" @click="toggleMobileMenu()" />
                            <svg fill="none" viewBox="0 0 50 50" height="25" width="25">
                                <path class="lineTop line" stroke-linecap="round" stroke-width="3" stroke="black"
                                    d="M6 11L44 11"></path>
                                <path stroke-linecap="round" stroke-width="4" stroke="black" d="M6 24H43"
                                    class="lineMid line"></path>
                                <path stroke-linecap="round" stroke-width="4" stroke="black" d="M6 37H43"
                                    class="lineBottom line"></path>
                            </svg>
                        </div>

                    </div>

                    <transition name="slide-down" @enter="showOverlay">
                        <div class="fixed w-full right-0 left-0 top-[54px] bg-[#FAFAFA] z-50 p-2 text-[22px] text-[#323232] tracking-tighter flex flex-col font-semibold min-h-[40vh]"
                            v-show="isMobileMenuVisible">

                            <ul class="py-4 px-24" id="menuItemsMob">

                                <li class="mb-4" v-for="(   item, index   ) in headerItems   " :key="index">
                                    <router-link :to="{ name: item.routeName }" @click="hideMobileMenu()">
                                        {{ item.title }}
                                        <span class="text-[12px] pl-2">
                                            <font-awesome-icon :icon="['fas', item.icon]" />
                                        </span>
                                    </router-link>
                                </li>

                            </ul>
                        </div>
                    </transition>
                </div>

                <div class="overlay" v-show="isOverlayVisible" @click="hideMobileMenu"></div>


                <!--header items PC-->

                <ul class="sm:flex items-center hidden text-[16px]">
                    <li v-for="(   item, index   ) in headerItems" key="index" @mouseover="showMenu(index)"
                        class="py-4  hover:text-black">
                        <router-link :to="{ name: item.routeName }" @click="clickMenu()">
                            <span class="py-2 px-6">
                                {{ item.title }}
                                <font-awesome-icon :icon="['fas', item.icon]" class="pl-1 text-[14px]" />
                            </span>
                        </router-link>



                        <!-- dropdown -->
                        <transition name="fade">
                            <span v-show="canOpenMenu() && item.isMenuOpen && activeIndex === index"
                                class="absolute bg-[#FAFAFC]  mt-1 top-[68px] left-0 right-0 flex flex-col z-40 text-[22px] tracking-wide menu"
                                @mouseleave="hideMenu(index)" id="dropdownn">

                                <!-- titolo dropdown -->
                                <div class="py-8 flex justify-evenly items-center px-10">
                                    <span
                                        class="text-3xl flex flex-col items-center text-[#c0c0c0] tracking-tighter font-sens">
                                        Virbit S.r.l.
                                    </span>


                                    <span class="text-sm text-[#6f6d6d] flex flex-col items-center">
                                        <span>
                                            {{ item.title }}
                                        </span>
                                        <span>
                                            <font-awesome-icon :icon="['fas', item.icon]" class="pl-1" />
                                        </span>
                                    </span>

                                </div>

                                <!-- lista dropdown -->

                                <div class="flex justify-center">
                                    <ul class="p-4 w-[30%] flex flex-col  gap-6 mt-6 text-[#323232] tracking-tight pb-12 font-semibold"
                                        id="menuItemsDek">
                                        <li v-for="(   subItem, subIndex   ) in item.subCategories   " :key="subIndex">
                                            <router-link :to="{ name: subItem.routeName }" @click="clickMenu()">
                                                <span class="border-gray-400 hover:border-b">
                                                    {{ subItem.name }}
                                                </span>
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>

                            </span>
                        </transition>
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
    transition: all 0.8s ease;
}

.slide-down-enter-from {
    opacity: 0.4;
}

.slide-down-enter-to {
    transition: opacity 0.4s ease;
}

.slide-down-leave-to {
    opacity: 0;
    transform: translateY(-100%);
}

.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-leave-to {
    opacity: 0;
}

.overlay {
    position: fixed;
    top: 88px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    /* Colore di sfondo scuro semi-trasparente */
    z-index: 10;
    /* Assicura che l'overlay sia sopra tutti gli altri contenuti */
}

/* tasto menu mobile */
.hamburger {
    height: 20px;
    width: 20px;
    transform: 0.2s;
    position: relative;
}

.hamburger .checkbox {
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
}

.line {
    transition: 0.5s;
    stroke-width: 2px;
    stroke: #323232;
}

.lineTop {
    stroke-dasharray: 40 40;
    stroke-dashoffset: 20;
}

.lineBottom {
    stroke-dasharray: 40 40;
    stroke-dashoffset: 60;
}

.lineMid {
    stroke-dasharray: 30 60;
}

.hamburger .checkbox:checked+svg .line {
    stroke: #323232;
}

.hamburger .checkbox:checked+svg .lineTop {
    stroke-dashoffset: 0;
    transform-origin: left;
    transform: rotateZ(45deg) translate(-7px, -5px);
}

.hamburger .checkbox:checked+svg .lineMid {
    stroke-dashoffset: 40;
}

.hamburger .checkbox:checked+svg .lineBottom {
    stroke-dashoffset: 0;
    transform-origin: left;
    transform: rotateZ(-45deg) translate(-5px, 5px);
}
</style>
