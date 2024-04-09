<template>
    <div
        class="p-3 flex flex-col items-center justify-between color-black tracking-tighter  border  rounded-2xl  bg-white shadow-lg relative font-medium">
        <slot></slot>
    </div>
</template>

<script>
export default {

    data() {
        return {

        }
    },

    methods: {

    }
}
</script>

<style>
.big-card {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #1D1D1F;
    letter-spacing: -0.05em;
    border: solid 1px;
    border-radius: 16px;
    background-color: white;
}
</style>