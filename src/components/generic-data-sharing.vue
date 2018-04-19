<template>
    <div class="columns is-mobile">
        <div class="column">
            <div class="box step-container" v-bind:class="{}">
                <div v-if="stepNumber === 1">
                    <div class="columns is-mobile is-multiline">
                        <div class="column is-12 has-text-centered">
                            <button class="button is-danger is-large is-outlined app-logo" disabled>
                                <i class="fas fa-wifi app-logo__icon"></i>
                            </button>
                        </div>
                        <div class="column is-12 has-text-centered">
                            Before you can enjoy of our free Wifi Hotspots you must continue with Anchorbook.
                        </div>
                        <div class="column is-12 has-text-centered">
                            <button class="button is-generic-social-media" @click="goToStep2()">
                                <span class="icon"><i
                                    class="fas fa-anchor"></i></span><span>Continue with Anchorbook</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div v-else-if="stepNumber === 2" class="second-step">
                    <div class="columns is-multiline">
                        <div class="column is-12 has-text-centered">
                            <button class="button is-danger is-large is-outlined app-logo" disabled>
                                <i class="fas fa-wifi app-logo__icon"></i>
                            </button>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <div>
                                <strong>WiFi Hotspots App</strong> will receive:
                            </div>
                            <span>your public profile, friend list, birthday, likes and email address. </span>
                            <div>
                                <b-tooltip
                                    label="Your public profile includes name, profile picture, age range, gender, language, country and other public info."
                                    position="is-bottom" type="is-dark" multilined>
                                    <i class="icon is-small fas fa-info-circle info-icon"></i>
                                </b-tooltip>
                            </div>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <button class="button is-generic-social-media is-medium" @click="goToStep3()">
                                Continue
                            </button>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <a class="is-medium info-icon" @click="goToStep1()">
                                Cancel
                            </a>
                        </div>
                    </div>
                </div>
                <div v-else-if="stepNumber === 3">
                    <div class="columns is-mobile is-multiline">
                        <div class="column is-12 has-text-centered">
                            <span class="icon">
                                <i class="fas fa-check"></i>
                            </span>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <div>
                                <strong>
                                    Success
                                </strong>
                            </div>
                            <span>
                                The social network has now shared your information with the application.
                            </span>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <button class="button" @click="goToStep1()">
                                <span class="icon is-small">
                                    <i class="fas fa-sync-alt"></i>
                                </span>
                                <span>  Restart example</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .step-container {
        position: relative;
        max-width: 400px;
    }

    .app-logo {
        height: 55px;
        width: 55px;
        border-radius: 50%;
    }

    .info-icon {
        color: #afafaf;
        height: 0.7rem !important;
        width: 0.7rem !important;
    }
</style>

<script>

    export default {
        name: 'ob-generic-data-sharing',
        data() {
            return {
                stepNumber: 1
            }
        },
        methods: {
            goToStep1() {
                this.stepNumber = 1;
            },
            goToStep2() {
                this.stepNumber = 2;
            },
            goToStep3() {
                this.stepNumber = 3;
            }
        }
    }
</script>
