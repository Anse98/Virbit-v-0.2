<template>

    <!-- prima section -->
    <div class="h-[85vh] bg-[#232324]" ref="firstSection">
        <div class="container mx-auto flex justify-between text-white">
            <div class="max-w-[50%] flex flex-col gap-24">
                <!-- text -->
                <div class="pt-12">
                    <span class="text-6xl title-gradient pl-10">
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
                <img src="../img/jumbotron.png" alt="" class="w-[700px]">
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

                <div class="">
                    <span class="text-6xl title-gradient pl-10">
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
            isInViewport: false
        };
    },

    methods: {
        handleScroll() {
            const secondSection = this.$refs.secondSection;
            const bounding = secondSection.getBoundingClientRect();
            const isInViewport = (
                bounding.top <= 400 &&
                bounding.bottom >= 0
            );

            if (isInViewport) {
                secondSection.classList.add('text-show');
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        const firstSection = this.$refs.firstSection;
        firstSection.classList.add('text-show');
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style scoped>
.text {
    opacity: 0;
    transition: opacity 0, 5s ease;
}

.text-show .text {
    animation: falling 3.5s forwards;
    opacity: 0;
}

@keyframes falling {
    from {
        opacity: 0;
        transform: translateY(-70px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>