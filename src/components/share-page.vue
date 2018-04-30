<template>
    <button class="button is-primary share-page animated fadeInUp" @click="onUserWantsToShare()">
        <span class="icon">
            <i class="fas fa-share-alt"></i>
        </span>
        <span>Share</span>
        <!--      <b-modal :active.sync="isShareModalOpen" has-modal-card>
                  <div class="box">
                      Content
                  </div>
              </b-modal>-->
    </button>
</template>

<style lang="scss">

    $button-size: 45px;

    .share-page {
        position: fixed;
        bottom: 0;
        left: 0;
        height: $button-size;
        margin: 1rem;
    }
</style>

<script>
    import obSocialShareButtons from './social-share-buttons.vue';

    export default {
        name: 'ob-share-page',
        data() {
            return {
                isShareModalOpen: false
            }
        },
        methods: {
            onUserWantsToShare() {
                this.openShareModal();
            },
            openShareModal() {
                this.$modal.open({
                    component: obSocialShareButtons
                })
            }
        },
        mounted() {

        }
    }
</script>
