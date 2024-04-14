<template>
    <section class="min-h-[100vh]">
        <div class="py-8">

            <!-- title -->
            <div class="text-5xl title-gradient font-medium px-3 title-page md:text-6xl text-center">
                <h1>Virbit S.r.l.</h1>
            </div>

            <div class="flex justify-center my-6">
                <img src="/logo.png" alt="" class="w-[60%] sm:w-[40%] md:w-[30%]">
            </div>

            <div class="mt-10 flex flex-col items-center gap-6 justify-center text-page md:gap-16">
                <p class="w-[280px] text-center text-[14px] md:text-[16px] md:w-[380px] text-[#6E6E73]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum voluptas nostrum molestias a
                    facilis fuga adipisci quibusdam, explicabo, magnam tenetur.
                </p>

                <span class="border py-1 px-2 rounded-lg bg-[#4d4d4d] text-[#f1f1f1] font-medium text-[15px]">
                    Contattaci
                </span>
            </div>

            <!-- lista informazioni -->
            <div
                class="mt-12 flex flex-col items-center gap-10 lg:flex-row lg:flex-wrap lg:justify-center lg:items-stretch ">

                <LittleSlotLight v-for="(info, index) in infos"
                    class="border w-[70%] md:max-w-[40%] rounded-lg info-cards shadow-lg cursor-default">
                    <div class="w-full mb-3">
                        <div class="mb-3 text-[15px]">
                            <span>{{ info.title }}</span>
                        </div>

                        <div class="text-[20px] text-[#464646] mb-6" :class="info.iconColor">
                            <font-awesome-icon :icon="info.icon" />
                        </div>
                    </div>


                    <ul class="w-full text-[16px] text-black">
                        <li v-for="(item, i) in info.text" :key="i" class="mb-2">{{ item }} </li>
                    </ul>

                    <div class="flex justify-end w-full mt-4 text-[16px]" v-if="info.link">
                        <a :href="info.link" class="underline">Cerca su Google Maps</a>
                    </div>
                </LittleSlotLight>

            </div>

        </div>
    </section>
</template>

<script>
import LittleSlotLight from '../components/slots/LittleSlotLight.vue';
import HeaderAbout from '../components/HeaderAbout.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
    components: {
        LittleSlotLight,
        HeaderAbout
    },
    data() {
        return {
            infos: [
                {
                    title: 'Dove ci trovi',
                    icon: 'fa-solid fa-location-dot',
                    iconColor: 'text-[#DE4C43]',
                    text: [
                        'Via Tamarone, 5/C',
                        '13011 - Borgosesia (VC)'
                    ],
                    link: "https://www.google.com/maps/dir/Via+Tamarone,+5C,+Borgosesia,+VC/'45.59135,10.243048'/@45.5911034,8.6060407,9z/data=!3m1!4b1!4m11!4m10!1m5!1m1!1s0x47861055da1ff785:0x5b5dd9e2361ca804!2m2!1d8.2837794!2d45.7195384!1m3!2m2!1d10.243048!2d45.59135?hl=it&entry=ttu"
                },

                {
                    title: 'Info',
                    icon: 'fa-solid fa-circle-info',
                    iconColor: 'text-[#5491F5]',
                    text: [
                        'P.IVA IT02713590020',
                        'REA: VC 207793',
                        'Cap.Soc. niv 10000€'
                    ]
                },

                {
                    title: 'Contatti',
                    icon: 'fa-regular fa-paper-plane',
                    iconColor: 'text-slate-400',
                    text: [
                        'PEC: virbit@pec.it',
                        'Mail: informazioni@virbit.it',
                        'Tel: 0163 209353'
                    ],
                },

                {
                    title: 'Orari',
                    icon: 'fa-regular fa-clock',
                    iconColor: '',
                    text: [
                        'Dom - Ven: 10: 00 AM - 6: 00 PM',
                    ]
                },
            ]
        };
    },
    methods: {
        animateTitle() {
            gsap.from('.title-page', {
                autoAlpha: 0,
                duration: 1,
                x: -40,
            })
        },

        animateText() {
            gsap.from('.text-page', {
                autoAlpha: 0,
                duration: 1,
                y: -40,
            })
        },

        animateInfoCards() {
            const cards = document.querySelectorAll('.info-cards');
            cards.forEach(card => {
                gsap.from(card, {
                    opacity: 0,
                    y: 40,
                    duration: 1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%", // Inizia l'animazione quando il 100% superiore dell'elemento entra nella viewport
                        end: "bottom 20%", // Termina l'animazione quando il 20% inferiore dell'elemento esce dalla viewport
                        toggleActions: "play none none none", // Azione di riproduzione dell'animazione
                    }
                });
            });
        },

    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        this.animateInfoCards();
        this.animateTitle();
        this.animateText();
    }
}
</script>

<style scoped></style>