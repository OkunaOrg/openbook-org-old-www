<template>
    <div class="columns is-mobile">
        <div class="column">
            <div class="box step-container" v-bind:class="{}">
                <div v-if="stepNumber === 1">
                    <div class="columns is-mobile is-multiline">
                        <div class="column is-12 has-text-centered">
                            <button class="button is-success is-large is-outlined app-logo" disabled>
                                <i class="fas fa-music app-logo__icon"></i>
                            </button>
                        </div>
                        <div class="column is-12 has-text-centered">
                            In order to use Songipy you must continue with Openbook.
                        </div>
                        <div class="column is-12 has-text-centered">
                            <button class="button is-primary" @click="goToStep2()">
                                <span>Continue with <strong>Open</strong>book</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div v-else-if="stepNumber === 2" class="second-step">
                    <div class="columns is-multiline">
                        <div class="column is-12 has-text-centered">
                            <button class="button is-success is-large is-outlined app-logo" disabled>
                                <i class="fas fa-music app-logo__icon"></i>
                            </button>
                        </div>
                        <div class="column is-12 has-text-centered is-size-6">
                            <div>
                                <i class="fas fa-lock"></i>
                                <span>
                                    &nbsp; This application is safe to use.
                                </span>
                            </div>
                            <div class="is-size-7">
                                It has successfully met our privacy and security standards.
                            </div>
                            <div class="is-size-7">
                                <a @click="justAPrototype()">
                                    Learn more
                                </a>
                            </div>
                        </div>
                        <div class="column is-12">
                            <div class="section-separator"></div>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <div>
                                <strong>Songipy</strong> will receive:
                            </div>
                            <span>your name, profile picture, age range, gender, language, country of birth, friend list, birthday, likes and email address. </span>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <button class="button is-outlined is-small" @click="goToStep3()">
                                <span>
                                    Edit shared data
                                </span>
                                <span class="icon">
                                    <i class="fas fa-pencil-alt"></i>
                                </span>
                            </button>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <b-collapse :open="false">
                                <button slot="trigger" class="button is-primary is-outlined is-small">
                                <span>
                                    Show shared data
                                </span>
                                    <span class="icon">
                                    <i class="fas fa-angle-down"></i>
                                </span>
                                </button>
                                <div class="notification data-container">
                                    <div class="content is-small">
                                        <p v-for="dataItem of sharedData">
                                            <strong>
                                                {{ dataItem.name }}:
                                            </strong>
                                            <span v-if="dataItem.type === 'text'">
                                                {{dataItem.value}}
                                            </span>
                                            <a v-else-if="dataItem.type === 'list'">
                                                <span>
                                                    Open list ↗
                                                </span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </b-collapse>
                        </div>
                        <div class="column is-12">
                            <div class="section-separator"></div>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <div class="columns is-mobile">
                                <div class="column is-6">
                                    <button class="button is-outlined is-medium" @click="goToStep1()">
                                        Cancel
                                    </button>
                                </div>
                                <div class="column is-6">
                                    <button class="button is-primary is-medium" @click="goToStep4()">
                                        Continue
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="stepNumber === 3" class="third-step">

                </div>
                <div v-else-if="stepNumber === 4">
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

    .section-separator {
        height: 1px;
        width: 100%;
        border-bottom: solid 1px rgba(10, 10, 10, 0.1);
    }

    .data-container {
        margin-top: 1rem;
    }
</style>

<script>

    import BCollapse from "../../node_modules/buefy/src/components/collapse/Collapse.vue";

    export default {
        components: {BCollapse},
        name: 'ob-openbook-data-sharing',
        data() {
            return {
                stepNumber: 2,
                availableData: [
                    {
                        readableName: 'name',
                        name: 'name',
                        type: 'text',
                        value: 'Jules Winnfield',
                        required: true,
                        shared: true
                    },
                    {
                        readableName: 'age range',
                        name: 'age_range',
                        type: 'text',
                        value: 'Jules Winnfield',
                        required: false,
                        shared: true
                    },
                    {
                        readableName: 'gender',
                        name: 'gender',
                        type: 'text',
                        value: 'male',
                        required: false,
                        shared: true
                    },
                    {
                        readableName: 'language',
                        name: 'language',
                        type: 'text',
                        value: 'en_US',
                        required: false,
                        shared: true
                    },
                    {
                        readableName: 'country of birth',
                        name: 'birthplace_country',
                        type: 'text',
                        value: 'US',
                        required: false,
                        shared: true
                    },
                    {
                        readableName: 'friend list',
                        name: 'friends_list',
                        type: 'list',
                        value: [
                            {
                                name: 'Vincent Vega',
                                openBookId: '@vvega'
                            },
                            {
                                name: 'John Doe',
                                openBookId: '@doejoe'
                            },
                            {
                                name: 'Mike Thompson',
                                openBookId: '@mikethompsn'
                            },
                            {
                                name: 'Long Johnson',
                                openBookId: '@ohlongj'
                            }
                        ],
                        required: false,
                        shared: true
                    },
                    {
                        readableName: 'birthday',
                        name: 'birthday',
                        type: 'text',
                        value: '25-3-1997',
                        required: false,
                        shared: true
                    },
                    {
                        readableName: 'likes',
                        name: 'user_likes',
                        type: 'list',
                        value: [
                            {
                                name: 'Jack Rabbit Slim\'s Restaurant',
                                openBookId: '@jackrabbits'
                            },
                            {
                                name: 'Suits & Co.',
                                openBookId: '@jackrabbits'
                            },
                            {
                                name: 'Crown Pawn Shop',
                                openBookId: '@crownpawn'
                            }
                        ],
                        required: false,
                        shared: true
                    },
                    {
                        readableName: 'email address',
                        name: 'email',
                        type: 'text',
                        value: 'badmf@pfiction.com',
                        required: true,
                        shared: true
                    },
                ]
            }
        },
        computed: {
            sharedData() {
                return this.availableData.filter((dataItem) => {
                    return dataItem.shared;
                });
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
            },
            goToStep4() {
                this.stepNumber = 4;
            },
            justAPrototype() {
                this.$toast.open({
                    message: 'Whoops, this is just a prototype, you\'ll find this info below.',
                    type: 'is-info',
                    position: 'is-bottom'
                })
            }
        }
    }
</script>
