<template>
    <div class="ssk-block ssk-md">
        <a href="" class="ssk ssk-facebook">
            Share in Facebook
        </a>
        <a href="" class="ssk ssk-twitter">
            Share in Twitter
        </a>
        <a href="" class="ssk ssk-google-plus">
            Share in Google Plus
        </a>
        <a href="" class="ssk ssk-pinterest">
            Share in Pinterest
        </a>
        <a href="" class="ssk ssk-tumblr">
            Share in Tumblr
        </a>
        <a href="" class="ssk ssk-linkedin">
            Share in LinkedIn
        </a>
    </div>
</template>


<style lang="scss">
    .ssk{
        margin: 0.5rem;
        width: 100%;
        font-size: 1rem;
    }

    .ssk:before, .ssk .glyphicon, .ssk .fa{
        left: -8px;
    }
</style>

<script>
    export default {
        name: 'ob-social-share-buttons',
        mounted() {
            this.initSocialShare();
        },
        methods: {
            initSocialShare() {
                console.log(this.$refs);
                const SocialShareKit = window['SocialShareKit'];
                SocialShareKit.init({});
            },
        }
    }
</script>
