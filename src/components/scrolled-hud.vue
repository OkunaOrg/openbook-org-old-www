<template>
    <div v-show="visible">
        <ob-share-page></ob-share-page>
        <ob-scroll-to-top></ob-scroll-to-top>
    </div>
</template>

<style lang="scss">
</style>

<script>
    import debounce from 'lodash.debounce';

    import ObSharePage from "./share-page.vue";
    import ObScrollToTop from "./scroll-to-top.vue";

    export default {
        components: {
            ObScrollToTop,
            ObSharePage
        },
        name: 'ob-scrolled-hud',
        data() {
            return {
                visible: false,
                visibleOffset: 600,
                scrollDebounce: 10
            }
        },
        mounted() {
            this.debouncedOnScroll = debounce(this.onScroll, this.scrollDebounce);
            window.addEventListener('scroll', this.debouncedOnScroll);

            // Bootstrap
            this.onScroll();
        },
        destroyed() {
            window.removeEventListener('scroll', this.debouncedOnScroll);
        },
        methods: {
            onScroll() {
                this.visible = (window.pageYOffset > this.visibleOffset);
            }
        }
    }
</script>
