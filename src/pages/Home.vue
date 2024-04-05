<template>

    <div
        class="lg:text-start py-12 lg:pt-16 lg:pb-24 pl-4 lg:pl-10 text-5xl lg:text-6xl font-semibold md:text-5xl tracking-tighter flex gap-5 title text-[#323232]">
        <span class="">
            Virbit
        </span>

        <span class="srl">
            S.r.l.
        </span>
    </div>

    <!-- video mobile -->
    <div class="flex justify-center py-6 md:hidden video-services">
        <div class="relative max-w-[95vw]">
            <video muted autoplay class="rounded-2xl" @ended="restartVideo()" id="service-video-mob">
                <source src="/Videos/Services-video-mob.mp4" type="video/mp4">
                <i>Il tuo browser non supporta la riproduzione video.</i>
            </video>

            <button @click="toggleVideoMob()"
                class="border w-[26px] h-[26px] rounded-full flex justify-center items-center shadow-lg absolute bottom-[8px] right-[10px] bg-white">
                <font-awesome-icon icon="fa-solid fa-pause" v-show="isVideoPlayingMob" class="text-[#4d4c4c]" />
                <font-awesome-icon icon="fa-solid fa-play" v-show="!isVideoPlayingMob"
                    class="text-[#4d4c4c] ps-[2px]" />
            </button>
        </div>
    </div>

    <!-- video desktop -->
    <div class="hidden md:flex justify-center py-12" id="videoDekContainer">
        <div class="relative flex justify-center" ref="videoContainer">
            <video autoplay muted class="w-full" @ended="restartVideo()" id="service-video-dek" ref="video">
                <source src="/Videos/Services-video-dek.mp4" type="video/mp4">
                Il tuo browser non supporta la riproduzione video.
            </video>

            <button @click="toggleVideoDek()"
                class="border w-[26px] h-[26px] rounded-full flex justify-center items-center shadow-lg absolute bottom-[8px] right-[10px] bg-white">
                <font-awesome-icon icon="fa-solid fa-pause" v-show="isVideoPlayingDek" class="text-[#4d4c4c]" />
                <font-awesome-icon icon="fa-solid fa-play" v-show="!isVideoPlayingDek"
                    class="text-[#4d4c4c] ps-[2px]" />
            </button>
        </div>
    </div>

    <!-- prima section -->
    <div class="bg-white flex pb-12 lg:py-20" ref="secondSection">
        <div class="container mx-auto flex flex-col text-[#b9b7b7] lg:flex-row-reverse">

            <!-- text -->
            <div class="flex flex-col justify-center gap-16 py-12 md:justify-start lg:w-[50%]">

                <div
                    class="px-10 leading-9 tracking-tighter text text-center text-[14px] md:text-[15px] lg:text-[16px] lg:text-start lg:px-0 lg:max-w-[400px]">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate qui, impedit at id enim
                        laborum nostrum aliquid, esse quidem fuga aspernatur neque, pariatur nobis quisquam nesciunt
                        sunt tenetur inventore repellat?
                    </p>
                </div>

            </div>

            <!-- img -->
            <div class="lg:flex lg:flex-col lg:justify-center lg:w-[50%] firstImage">
                <img src="../img/jumbotron-2.png" alt="" class="w-[300px] md:w-[400px] lg:w-[500px]">
            </div>
        </div>
    </div>


    <!-- seconda section -->
    <div class="bg-[#232324] relative">
        <div class="container mx-auto text-white lg:flex">
            <div class="flex flex-col items-center pt-8 md:pt-20 lg:items-start gap-4
            md:gap-14 lg:px-20 lg:w-[50%]">

                <!-- text -->
                <div class="pt-4 pb-6 sm:pb-0 text-center lg:max-w-[370px] lg:px-10 secondTitle">
                    <span class="text-4xl title-gradient font-semibold md:text-5xl lg:text-6xl">
                        Virbit S.r.l.
                    </span>
                </div>

                <div
                    class="px-10 leading-9 tracking-tighter text text-[14px] text-center md:text-[15px] lg:max-w-[420px] lg:text-start lg:text-[16px] py-8 lg:leading-10">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate qui, impedit at id enim
                        laborum nostrum aliquid, esse quidem fuga aspernatur neque, pariatur nobis quisquam nesciunt
                        sunt tenetur inventore repellat?
                    </p>
                </div>
            </div>

            <!-- img -->
            <div class="flex justify-end lg:justify-normal second-image lg:w-[50%] lg:pt-60">
                <img src="../img/jumbotron.png" alt="" class="w-[250px]  md:w-[350px] lg:w-[400px]">
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {

    data() {
        return {
            isVideoPlayingMob: true,
            isVideoPlayingDek: true
        };
    },

    methods: {

        // animazione titolo Virbit
        animateTitle() {
            gsap.from('.title', {
                scrollTrigger: {
                    trigger: '.title',
                    toggleActions: "play none none none"
                },
                autoAlpha: 0,
                y: 20,
                duration: 1.3,
                ease: "power1.inOut",
            });
        },

        // stop/play del video mobile
        toggleVideoMob() {
            const videoMob = document.getElementById('service-video-mob');

            if (this.isVideoPlayingMob) {
                videoMob.pause(); // Ferma la riproduzione del video
            } else {
                videoMob.play(); // Avvia la riproduzione del video
            }

            this.isVideoPlayingMob = !this.isVideoPlayingMob;
        },

        // stop/play del video desktop
        toggleVideoDek() {
            const videoDek = document.getElementById('service-video-dek');

            if (this.isVideoPlayingDek) {
                videoDek.pause();
            } else {
                videoDek.play();
            }

            this.isVideoPlayingDek = !this.isVideoPlayingDek;
        },

        // quando finisce riparte
        restartVideo() {
            const videoMob = document.getElementById('service-video-mob');
            const videoDek = document.getElementById('service-video-dek');
            videoMob.currentTime = 0;
            videoDek.currentTime = 0;
            videoMob.play();
            videoDek.play();
        },

        // animazione titolo dei framework
        animateVideo() {
            gsap.from('.video-services', {
                autoAlpha: 0,
                y: -20,
                duration: 1.3,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: '.video-services',
                    start: 'top 60%',
                    end: '+=100',
                    toggleActions: "play none none none",
                },
            });
        },

        // diminuisci video quando scrolli
        handleScrollVideoWith() {

            // Ottieni l'elemento da ridurre
            const videoContainer = this.$refs.videoContainer;
            const videoTag = this.$refs.video;

            // verifico che videoContainer sia presente per evitare errori quando scrollo nelle altre pagine
            if (videoContainer) {
                // Calcola la nuova larghezza in base allo scrolling della finestra
                let newWidth = 100 - (window.scrollY * 0.07);

                // Imposta la larghezza minima desiderata
                const minWidth = 70; // Puoi impostare la larghezza minima desiderata

                // Assicurati che la nuova larghezza non sia inferiore alla larghezza minima
                newWidth = Math.max(newWidth, minWidth);

                // Calcola il nuovo border-radius in base alla larghezza
                const newBorderRadius = 30 * (newWidth / 100);

                // Utilizza GSAP per animare la larghezza dell'elemento gradualmente
                gsap.to(videoContainer, { duration: 0.5, width: `${newWidth}%` });

                gsap.to(videoTag, { duration: 0.5, borderRadius: `${newBorderRadius}px` });

                if (window.scrollY === 0) {
                    gsap.to(videoTag, { duration: 0.5, borderRadius: "0px" });
                }

            }
        },

        // animazione prima immagine dopo il video
        animateFirstImage() {
            gsap.from('.firstImage', {
                scrollTrigger: {
                    trigger: '.firstImage',
                    start: 'top 80%',
                    end: '+=100',
                    toggleActions: "play none none none",
                },
                autoAlpha: 0,
                x: -40,
                duration: 1.3,
                ease: "power1.inOut",
            });
        },

        // animazione secondo titolo 
        animateSecondTitle() {
            gsap.from('.secondTitle', {
                scrollTrigger: {
                    trigger: '.firstImage',
                    start: 'top 70%',
                    end: '+=100',
                    toggleActions: "play none none none",
                },
                autoAlpha: 0,
                y: 20,
                duration: 1.3,
                ease: "power1.inOut",
            });
        },

        // animazione seconda immagine dopo il video
        animateSecondImage() {
            gsap.from('.second-image', {
                scrollTrigger: {
                    trigger: '.second-image',
                    start: 'top 70%',
                    end: '+=100',
                    toggleActions: "play none none none",
                },
                autoAlpha: 0,
                x: 40,
                duration: 1,
                ease: "power1.inOut",
            });
        },

    },

    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        this.animateTitle();
        this.animateVideo();
        this.animateFirstImage();
        this.animateSecondTitle();
        this.animateSecondImage();

        window.addEventListener('scroll', this.handleScrollVideoWith);
    },

    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScrollVideoWith);
    }
}
</script>


<style scoped></style>