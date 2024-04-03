<template>
    <div class="scroll-to-top" v-if="showScrollButton" @click="scrollToTop" :class="{ 'white-bg': showWhiteBg }">
        <font-awesome-icon icon="fa-solid fa-caret-up" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            showScrollButton: false,
            showWhiteBg: false
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.showScrollButton = window.scrollY > 100;
            this.showWhiteBg = window.innerHeight + window.scrollY > document.body.offsetHeight - 50;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
};
</script>

<style>
.scroll-to-top {
    position: fixed;
    bottom: 12px;
    right: 12px;
    background-color: rgb(31, 29, 29, 0.7);
    color: #ffffff;
    width: 30px;
    height: 30px;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.white-bg {
    background-color: #ece7e7;
    color: #000000;
}

.scroll-to-top i {
    font-size: 20px;
}
</style>