<template>
    <label class="container">
        <input type="checkbox" checked="checked">
        <svg class="chevron-right" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
            <path
                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z">
            </path>
        </svg>
        <svg class="chevron-down" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z">
            </path>
        </svg>
    </label>
</template>

<style scoped>
/*------ Settings ------*/
.container {
    --color: #a5a5b0;
    --size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    font-size: var(--size);
    user-select: none;
    fill: var(--color);
}

.container .chevron-right {
    position: absolute;
    animation: keyframes-return .5s;
}

.container .chevron-down {
    position: absolute;
    display: none;
    animation: keyframes-fill .5s;
}

/* ------ On check event ------ */
.container input:checked~.chevron-right {
    display: none;
}

.container input:checked~.chevron-down {
    display: block;
}

/* ------ Hide the default checkbox ------ */
.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

/* ------ Animation ------ */
@keyframes keyframes-fill {
    0% {
        transform: rotate(-90deg) scale(0);
        opacity: 0;
    }

    50% {
        transform: rotate(0deg) scale(1.2);
    }
}

@keyframes keyframes-return {
    0% {
        transform: rotate(90deg) scale(0);
        opacity: 0;
    }

    50% {
        transform: rotate(0deg) scale(1.2);
    }
}
</style>