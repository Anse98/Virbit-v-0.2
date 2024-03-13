<script>

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
                            icon: "server"
                        },

                        {
                            name: "Integrazione tra sistemi informatici diversi",
                            icon: "network-wired"
                        },

                        {
                            name: "Analisti, Consulenti ed Insegnanti",
                            icon: "person-chalkboard"
                        },

                        {
                            name: "Sicurezza Informatica (Cybersecurity)",
                            icon: "shield-halved"
                        },

                        {
                            name: "Sviluppatori",
                            icon: "code"
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
                            icon: "gears"
                        },

                        {
                            name: "Internet",
                            icon: "globe"
                        },
                        {
                            name: "Telefonia",
                            icon: "mobile-screen-button"
                        },

                        {
                            name: "GDPR",
                            icon: "vault"
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
                            icon: "location-dot"
                        },

                        {
                            name: "Contattaci",
                            icon: "paper-plane"
                        },

                        {
                            name: "Informazioni",
                            icon: "cash-register"
                        },


                    ],
                    icon: "tower-broadcast"
                }
            ],

            isMenuOpen: false,
            activeIndex: null,
            linkClickedRecently: false

        }
    },

    methods: {
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
        }
    }
};
</script>

<template>
    <header>
        <nav class="text-[#D1D1D1] bg-gradient-to-r from-[#232324] via-[#141415] to-[#232324] select-none">
            <div class="flex container mx-auto justify-center items-center  text-[12px] gap-16 tracking-tight">
                <!-- logo -->
                <a href="/">
                    <div>
                        <img src="../img/logo-3.png" alt="" class="w-[26px]">
                    </div>
                </a>


                <!--header items -->
                <ul class="flex items-center">
                    <li v-for="(item, index) in headerItems" key="index" @mouseover="showMenu(index)"
                        class="py-2  hover:text-white">
                        <router-link :to="{ name: item.routeName }" @click="clickMenu()">
                            <span class="py-2 px-6">
                                {{ item.title }}
                                <font-awesome-icon :icon="['fas', item.icon]" class="pl-1" />
                            </span>
                        </router-link>

                        <!-- dropdown -->


                        <span v-if="canOpenMenu() && item.isMenuOpen && activeIndex === index"
                            class="absolute bg-gradient-to-r from-[#232324] via-[#141415] to-[#232324]  p-2 shadow-lg mt-1 top-[30px] left-0 right-0 flex flex-col z-40"
                            @mouseleave="hideMenu(index)">

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
                                <ul class="p-4 w-[30%] text-white flex flex-col items-center gap-6 mt-6 min-h-[40vh]">
                                    <li v-for="(subItem, subIndex) in item.subCategories" :key="subIndex"
                                        class="hover:text-[#D1D1D1]">
                                        <span>{{ subItem.name }}</span>
                                        <span>
                                            <font-awesome-icon :icon="['fas', subItem.icon]" class="pl-2" />
                                        </span>
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

<style scoped></style>
