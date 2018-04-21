<template>
    <div class="mobile-menu" v-bind:class="{ 'mobile-menu--open': isOpen }">
        <section class="hero is-fullheight">
            <!-- Hero head: will stick at the top -->
            <div class="hero-head">
                <header class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item is-size-4 is-primary-color" href="https://open-book.org">
                                <strong>Open</strong>book
                            </a>
                            <button class="button is-primary is-outlined is-borderless navbar-close" @click="closeMenu()">
                                <span class="icon">
                                    <i class="fas fa-times"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </header>
            </div>

            <!-- Hero content: will be in the middle -->
            <div class="hero-body is-paddingless">
                <div class="container has-text-centered">
                    <ul class="menu-list">
                        <li class="menu-list-item">
                            <a class="menu-list-item__link is-size-5">
                                <span>
                                    ✨
                                </span>
                                <span>
                                    Introduction
                                </span>
                            </a>
                        </li>
                        <li class="menu-list-item is-size-5">
                            <a class="menu-list-item__link">
                                <span>
                                    🤔
                                </span>
                                <span>
                                    Why?
                                </span>
                            </a>
                        </li>
                        <li class="menu-list-item is-size-5">
                            <a class="menu-list-item__link">
                                <span>
                                    💡
                                </span>
                                <span>
                                    How?
                                </span>
                            </a>
                        </li>
                        <li class="menu-list-item is-size-5">
                            <a class="menu-list-item__link">
                                <span>
                                    ➡
                                </span>
                                <span>
                                    What's next
                                </span>
                            </a>
                        </li>
                        <li class="menu-list-item is-size-5">
                            <a class="menu-list-item__link">
                                <span>
                                    💪
                                </span>
                                <span>
                                    Work with us
                                </span>
                            </a>
                        </li>
                        <li class="menu-list-item is-size-5">
                            <a class="menu-list-item__link">
                                <span>
                                    📝
                                </span>
                                <span>
                                    FAQ
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
    .mobile-menu {
        z-index: 999;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: white;
        display: none;

        &--open {
            display: block;
        }
    }

    .navbar-close {
        border-radius: 0;
        margin-left: auto;
        width: 55px;
        height: 55px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .menu-list{
        &-item{
            &__link{
                padding: 1rem !important;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 60px;
            }
        }
    }
</style>

<script>
    import events from './../events';

    export default {
        name: 'ob-mobile-menu',
        data() {
            return {
                isOpen: true
            }
        },
        mounted() {
            const eventRemovers = [
                events.onWantsToOpenMenu(this.onWantsToOpenMenu),
                events.onWantsToCloseMenu(this.onWantsToCloseMenu)
            ];

            this.removeAllEvents = () => {
                eventRemovers.forEach(eventRemover => eventRemover());
            }
        },
        destroy() {
            this.removeAllEvents();
        },
        methods: {
            onWantsToOpenMenu() {
                this.openMenu();
            },
            onWantsToCloseMenu() {
                this.closeMenu();
            },
            openMenu(){
                this.isOpen = true;
            },
            closeMenu(){
                this.isOpen = false;
            }
        }
    }
</script>
