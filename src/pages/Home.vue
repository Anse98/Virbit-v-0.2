<template>

    <!-- prima section -->
    <div class="h-[85vh] bg-[#232324] relative" ref="firstSection">
        <div class="container mx-auto flex justify-between text-white">
            <div class="flex flex-col items-center pt-8 lg:items-start gap-4
            md:gap-14 lg:gap-20 lg:px-20">
                <!-- text -->
                <div class="pt-4 pb-10 sm:pb-0 text-center lg:max-w-[370px] lg:px-10">
                    <span class="text-4xl title-gradient font-semibold md:text-5xl lg:text-5xl">
                        Virbit S.r.l.
                    </span>
                </div>

                <div
                    class="px-10 leading-9 tracking-tighter text text-[14px] text-center md:text-[15px] lg:max-w-[420px] lg:text-start lg:text-[14px]">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate qui, impedit at id enim
                        laborum nostrum aliquid, esse quidem fuga aspernatur neque, pariatur nobis quisquam nesciunt
                        sunt tenetur inventore repellat?
                    </p>
                </div>
            </div>

            <!-- img -->
            <div>
                <img src="../img/jumbotron.png" alt=""
                    class="w-[270px] absolute bottom-[-70px] right-0 lg:w-[600px] md:w-[400px] lg:bottom-[-120px] lg:right-14">
            </div>
        </div>
    </div>

    <!-- seconda section -->
    <div class="h-[85vh] bg-white flex" ref="secondSection">
        <div class="container mx-auto flex flex-col text-[#b9b7b7] lg:flex-row-reverse">

            <!-- text -->
            <div class="flex flex-col justify-center gap-16 h-[100%] pt-24 md:justify-start lg:w-[50%]">

                <div class="title text-center lg:text-start">
                    <span class="text-4xl title-gradient font-semibold md:text-5xl">
                        Virbit S.r.l.
                    </span>
                </div>

                <div
                    class="px-10 leading-9 tracking-tighter text text-center text-[14px] md:text-[15px] lg:text-[14px] lg:text-start lg:px-0 lg:max-w-[400px]">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate qui, impedit at id enim
                        laborum nostrum aliquid, esse quidem fuga aspernatur neque, pariatur nobis quisquam nesciunt
                        sunt tenetur inventore repellat?
                    </p>
                </div>

            </div>

            <!-- img -->
            <div class="lg:flex lg:flex-col lg:justify-center lg:w-[50%]">
                <img src="../img/jumbotron-2.png" alt="" class="w-[300px] md:w-[400px] lg:w-[500px]">
            </div>
        </div>
    </div>
</template>

<script>

export default {

    data() {
        return {
            isInViewportText: false,
            isInViewportTitle: false
        };
    },

    methods: {
        // gestione animazione quando si scrolla
        handleScroll() {
            const secondSection = this.$refs.secondSection;

            // se non sei nella seconda sezione interrompi tutto
            if (!secondSection) return;

            const bounding = secondSection.getBoundingClientRect();
            const isInViewportText = (
                bounding.top <= 400 &&
                bounding.bottom >= 0
            )

            if (isInViewportText) {
                secondSection.classList.add('text-show');
            }

            const isInViewportTitle = (
                bounding.top <= 800 &&
                bounding.bottom >= 0
            )

            if (isInViewportTitle) {
                secondSection.classList.add('title-show');
            }
        }
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        const firstSection = this.$refs.firstSection;
        if (firstSection) firstSection.classList.add('text-show');
    },

    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>


<style scoped>
/* animazione testo  */
.text {
    opacity: 0;
    transition: opacity 0, 2s ease;
}

.title {
    opacity: 0;
    transition: opacity 0, 2s ease;
}

.text-show .text {
    animation: emerge 3.5s forwards;
    opacity: 0;
}

.title-show .title {
    animation: falling 1.5s forwards;
    opacity: 0;
}
</style>