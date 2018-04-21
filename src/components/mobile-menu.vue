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
                            <button class="button is-primary navbar-close" @click="closeMenu()">
                                <span class="icon">
                                    <i class="fas fa-times"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </header>
            </div>

            <!-- Hero content: will be in the middle -->
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                        Title
                    </h1>
                    <h2 class="subtitle">
                        Subtitle
                    </h2>
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
</style>

<script>
    import events from './../events';

    export default {
        name: 'ob-mobile-menu',
        data() {
            return {
                isOpen: false
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
                debugger;
                this.openMenu();
            },
            onWantsToCloseMenu() {
                this.closeMenu();
            },
            openMenu(){
                debugger;
                this.isOpen = true;
            },
            closeMenu(){
                this.isOpen = false;
            }
        }
    }
</script>
