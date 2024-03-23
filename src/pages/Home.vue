<template>

    <!-- prima section -->
    <div class="h-[85vh] bg-[#232324] relative" ref="firstSection">
        <div class="container mx-auto flex justify-between text-white">
            <div class="max-w-[50%] flex flex-col gap-24">
                <!-- text -->
                <div class="pt-12">
                    <span class="text-6xl title-gradient pl-10 font-semibold">
                        Virbit S.r.l.
                    </span>
                </div>

                <div class="px-10 max-w-[70%] leading-9 tracking-tighter text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate qui, impedit at id enim
                        laborum nostrum aliquid, esse quidem fuga aspernatur neque, pariatur nobis quisquam nesciunt
                        sunt tenetur inventore repellat?
                    </p>
                </div>
            </div>

            <!-- img -->
            <div>
                <img src="../img/jumbotron.png" alt="" class="w-[700px] absolute bottom-[-150px] right-[100px]">
            </div>
        </div>
    </div>

    <!-- seconda section -->
    <div class="h-[85vh] bg-white flex items-center" ref="secondSection">
        <div class="container mx-auto flex justify-between text-[#b9b7b7]">

            <!-- img -->
            <div>
                <img src="../img/jumbotron-2.png" alt="" class="w-[700px]">
            </div>


            <!-- text -->
            <div class="max-w-[50%] flex flex-col gap-24 h-[100%]">

                <div class="title">
                    <span class="text-6xl title-gradient pl-10 font-semibold">
                        Virbit S.r.l.
                    </span>
                </div>

                <div class="px-10 max-w-[70%] leading-9 tracking-tighter text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate qui, impedit at id enim
                        laborum nostrum aliquid, esse quidem fuga aspernatur neque, pariatur nobis quisquam nesciunt
                        sunt tenetur inventore repellat?
                    </p>
                </div>

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