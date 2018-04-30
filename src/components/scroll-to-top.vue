<template>
    <button class="button is-primary scroll-to-top animated fadeInUp" v-scroll-to="'#main'">
        <span class="icon">
            <i class="fas fa-arrow-up"></i>
        </span>
    </button>
</template>

<style lang="scss">

    $button-size: 45px;

    .scroll-to-top {
        position: fixed;
        bottom: 0;
        right: 0;
        height: $button-size;
        width: $button-size;
        margin: 1rem;
    }
</style>

<script>
    export default {
        name: 'ob-scroll-to-top'
    }
</script>
