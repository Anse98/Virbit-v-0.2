<template>
    <section class="min-h-[100vh]">
        <div class="container mx-auto">
            <HeaderServices></HeaderServices>
            <!-- page title small -->
            <div class="tracking-tighter py-10 hidden md:block">
                <div class="container mx-auto flex font-medium justify-between items-center px-4 md:px-20">
                    <!-- title -->
                    <span class="text-xl text-[#4d4c4c]">
                        Servizi
                    </span>
                    <!-- icon -->
                    <span class="text-[#454545] md:text-xl lg:text-3xl">
                        <font-awesome-icon icon="fa-solid fa-ranking-star" />
                    </span>
                </div>
            </div>

            <!-- page title big -->
            <div class="flex flex-col py-3 ">
                <div class="text-4xl flex flex-col items-center show-title tracking-tight text-[#2c2c2c] px-2 md:text-5xl lg:text-6xl"
                    :style="{ 'opacity': titleShow ? '1' : '0' }">
                    <h1 class="text-center leading-tight">
                        Specializzati nell'ambito tech
                        <span class="title-gradient">...</span>
                    </h1>
                    <!-- subtitle -->
                    <div class="tracking-tight flex justify-center show-sub-title lg:justify-end pt-2 mb-4"
                        :style="{ 'opacity': subTitleShow ? '1' : '0' }">
                        <h4 class="text-gray-300 tracking-tighter">e non solo<span class="text-[#4d4c4c]">.</span></h4>
                    </div>
                </div>
            </div>
        </div>

        <!-- video mobile -->
        <div class="flex justify-center py-6 md:hidden video-services">
            <div class="relative max-w-[90vw]">
                <video muted class="rounded-2xl" @ended="restartVideo()" id="service-video-mob">
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
        <div class="hidden md:flex justify-center bg-[#F5F5F7] py-6" id="videoDekContainer">
            <div class="relative flex justify-center" ref="videoContainer">
                <video autoplay muted class="rounded-lg w-full" @ended="restartVideo()" id="service-video-dek"
                    ref="video">
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

        <!-- <div class="flex justify-center mt-32">
            <p class="w-1/2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos enim blanditiis consectetur,
                excepturi, commodi libero iusto eius suscipit vero, aspernatur distinctio animi? Nihil, aliquid sint.
                Deserunt assumenda aspernatur consequatur debitis?
            </p>
        </div>

        <div class="flex justify-center mt-32">
            <p class="w-1/2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos enim blanditiis consectetur,
                excepturi, commodi libero iusto eius suscipit vero, aspernatur distinctio animi? Nihil, aliquid sint.
                Deserunt assumenda aspernatur consequatur debitis?
            </p>
        </div>

        <div class="flex justify-center mt-32">
            <p class="w-1/2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos enim blanditiis consectetur,
                excepturi, commodi libero iusto eius suscipit vero, aspernatur distinctio animi? Nihil, aliquid sint.
                Deserunt assumenda aspernatur consequatur debitis?
            </p>
        </div> -->
    </section>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeaderServices from '../components/HeaderServices.vue';



export default {
    components: {
        HeaderServices
    },
    data() {
        return {
            services: [
                {
                    title: "Sistemisti",
                    img: "/img/services/sistemist-2.png",
                    visible: false,
                    routeName: 'services/system-engineers'
                },
                {
                    title: "Integrazione",
                    img: "/img/services/integration-2.png",
                    visible: false,
                    routeName: 'services/integration'
                },
                {
                    title: "Analisti",
                    img: "/img/services/analyst.png",
                    visible: false,
                    routeName: 'services/analyst'
                },
                {
                    title: "Cybersecurity",
                    img: "/img/services/cybersecurity-2.png",
                    visible: false,
                    routeName: 'services/cybersecurity'
                },
                {
                    title: "Sviluppatori",
                    img: "/img/services/developers-2.png",
                    visible: false,
                    routeName: 'services/developers'
                },
            ],

            titleShow: false,
            subTitleShow: false,
            colorLittleTitle: false,
            isVideoPlayingMob: false,
            isVideoPlayingDek: true
        };
    },
    methods: {
        // animazione sui servizi
        showService(index) {
            setTimeout(() => {
                this.services[index].visible = true;
            }, index * 100); // delay animazione
        },

        showAllServices() {
            this.services.forEach((service, index) => {
                this.showService(index);
            });
        },

        // animazione titolo
        showTitle() {
            setTimeout(() => {
                this.titleShow = true
            }, 1300)
        },

        // animazione sottotitolo
        showSubTitle() {
            setTimeout(() => {
                this.subTitleShow = true
            }, 1700)
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
                y: 20,
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

        handleScrollVideoWith() {

            // Ottieni l'elemento da ridurre
            const videoContainer = this.$refs.videoContainer;

            // verifico che videoContainer sia presente per evitare errori quando scrollo nelle altre pagine
            if (videoContainer) {
                // Calcola la nuova larghezza in base allo scrolling della finestra
                const newWidth = 100 - (window.scrollY * 0.05);

                // Utilizza GSAP per animare la larghezza dell'elemento gradualmente
                gsap.to(videoContainer, { duration: 0.5, width: `${newWidth}%` });

            }

        }
    },

    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        this.showAllServices();
        this.showTitle();
        this.showSubTitle();
        this.animateVideo();

        window.addEventListener('scroll', this.handleScrollVideoWith);
    },

    beforeDestroy() {
        // Rimuovi l'evento di scorrimento quando il componente viene distrutto
        window.removeEventListener('scroll', this.handleScrollVideoWith);
    },


}
</script>

<style scoped>
.slide-item {
    opacity: 0;
    transition: opacity 1.5s ease;
}

.show-title {
    opacity: 0;
    transition: opacity 2s ease;
}

.show-sub-title {
    opacity: 0;
    transition: opacity 2s ease-in-out;
}

.scrollbar::-webkit-scrollbar {
    display: none;
}
</style>
