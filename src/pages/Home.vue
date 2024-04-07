<template>

    <!-- video mobile -->
    <div class="flex justify-center pb-6 md:hidden video-services">
        <div class="relative">
            <video muted autoplay playsinline @ended="restartVideo()" id="service-video-mob">
                <source src="/Videos/Services-video-mob.mp4" type="video/mp4">
                <i>Il tuo browser non supporta la riproduzione video.</i>
            </video>

            <!-- Overlay -->
            <div class="absolute inset-0 bg-black opacity-60" ref="videoOverlay"></div>

            <!-- titolo pagina -->
            <div
                class="absolute text-[#efeeee] left-[50%] transform translate-x-[-50%] top-[60%] translate-y-[-60%] title">

                <div class="text-2xl font-light flex flex-col items-center gap-4">


                    <h1 class="text-4xl font-medium">
                        Virbit S.r.l.
                    </h1>


                    <p class="text-center">
                        <i>
                            Specializzati nell'ambito tech...
                        </i>
                    </p>

                    <p>
                        <i>
                            e non solo.
                        </i>
                    </p>

                    <router-link :to="{ name: 'about' }" class="mt-4">
                        <span class="border p-2 rounded-xl text-lg cursor-pointer bg-[#efeeee] text-[#2f2f2f]">
                            Scopri di più
                        </span>
                    </router-link>

                </div>

            </div>

            <!-- bottone di pausa/play -->
            <button @click="toggleVideoMob()"
                class="border w-[26px] h-[26px] rounded-full flex justify-center items-center shadow-lg absolute bottom-[12px] right-[16px] bg-white">
                <font-awesome-icon icon="fa-solid fa-pause" v-show="isVideoPlayingMob" class="text-[#4d4c4c]" />
                <font-awesome-icon icon="fa-solid fa-play" v-show="!isVideoPlayingMob"
                    class="text-[#4d4c4c] ps-[2px]" />
            </button>
        </div>
    </div>

    <!-- video desktop -->
    <div class="hidden md:flex justify-center" id="videoDekContainer">
        <div class="relative flex justify-center video" ref="videoContainerDek">
            <video autoplay muted class="w-full" @ended="restartVideo()" id="service-video-dek" ref="video">
                <source src="/Videos/Services-video-dek-2.mp4" type="video/mp4">
                Il tuo browser non supporta la riproduzione video.
            </video>

            <!-- Overlay -->
            <div class="absolute inset-0 bg-black opacity-60" ref="videoOverlay"></div>

            <!-- titolo pagina -->
            <div class="absolute text-[#efeeee] right-[100px] top-[100px] title md:top-[40px]">

                <div class="text-2xl font-light flex flex-col items-center gap-4">

                    <div class="flex gap-2 items-center mb-8">
                        <img src="/img/logo-3.png" alt="" class="w-[22px] lg:w-[42px]">
                        <h1 class="text-5xl font-medium">
                            Virbit S.r.l.
                        </h1>
                    </div>


                    <p>
                        <i>
                            Specializzati nell'ambito tech...
                        </i>
                    </p>

                    <p>
                        <i>
                            e non solo.
                        </i>
                    </p>

                    <router-link :to="{ name: 'about' }" class="mt-4">
                        <span
                            class="border p-2 rounded-xl text-xl cursor-pointer hover:bg-[#efeeee] hover:text-[#2f2f2f]">
                            Scopri di più
                        </span>
                    </router-link>

                </div>

            </div>

            <!-- bottone di pausa/play -->
            <button @click="toggleVideoDek()"
                class="border w-[26px] h-[26px] rounded-full flex justify-center items-center shadow-lg absolute bottom-[12px] right-[16px] bg-white">
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
            const videoContainer = this.$refs.videoContainerDek;
            const videoTag = this.$refs.video;
            const videoOverlay = this.$refs.videoOverlay;

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
                gsap.to(videoContainer,
                    {
                        duration: 0.5,
                        width: `${newWidth}%`,
                    });

                gsap.to(videoTag,
                    {
                        duration: 0.5,
                        borderRadius: `${newBorderRadius}px`
                    });

                gsap.to(videoOverlay,
                    {
                        duration: 0.5,
                        borderRadius: `${newBorderRadius}px`
                    });

                if (window.scrollY === 0) {
                    gsap.to(videoTag, { duration: 0.5, borderRadius: "0px" });
                    gsap.to(videoOverlay, { duration: 0.5, borderRadius: "0px" });
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