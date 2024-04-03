<template>
    <section>
        <div class="container mx-auto">
            <div class="tracking-tighter text-center py-6 flex items-end">
                <h1 class="text-4xl leading-normal text-[#2c2c2c] title">
                    Ecco di cosa ci occupiamo al posto tuo
                </h1>

                <span class="text-[#9c9a9a] text-[34px] pe-2">
                    <font-awesome-icon icon="fa-solid fa-exclamation" />
                </span>
            </div>
        </div>
    </section>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {

    data() {
        return {

        };
    },

    methods: {
        animateTitle() {
            gsap.from('.title', {
                scrollTrigger: {
                    trigger: '.title',
                    toggleActions: "play none none none"
                },
                autoAlpha: 0,
                y: 40,
                duration: 1,
                ease: "power2.inOut",
            });
        }
    },

    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        this.animateTitle();
    },
}
</script>


<style scoped></style>