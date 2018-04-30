require('./styles/index.scss');

window['jQuery'] = window['$'] = require('jquery');
require('slick-carousel');

require('./scripts/typewriter.exec.js');
require('./scripts/fontawesome-all.exec.js');
require('./scripts/social-share.exec.js');

import Vue from 'vue';
import Buefy from 'buefy'
import VueScrollTo from 'vue-scrollto';

Vue.use(Buefy);

// Current workaround to preserve element hash after scroll
// See issue here https://github.com/rigor789/vue-scrollto/issues/85
Vue.use(VueScrollTo, {
    onDone: function (element) {
        const elementHasId = typeof element.id !== 'undefined';
        if (elementHasId) {
            window.location.hash = element.id;
        }
    }
});

import obBrowser from './components/browser.vue';
import obHamburger from './components/hamburger.vue';
import obMobileMenu from './components/mobile-menu.vue';
import obGenericDataSharing from './components/generic-data-sharing.vue';
import obOpenbookDataSharing from './components/openbook-data-sharing.vue';
import obScrollToTop from './components/scroll-to-top.vue';
import obSharePage from './components/share-page.vue';
import obScrolledHud from './components/scrolled-hud.vue';

import twemoji from './directives/twemoji';

Vue.directive('twemoji', twemoji);

const appElement = document.querySelector('#app');

new Vue({
    el: appElement,
    components: {
        obBrowser,
        obGenericDataSharing,
        obOpenbookDataSharing,
        obHamburger,
        obMobileMenu,
        obScrolledHud
    },
    mounted() {
        this.initHello();
    },
    methods: {
        initHello() {
            // This should have been added by the require of typewriter.exec.js
            const Typewriter = window['Typewriter'];

            const helloSubjects = [
                'world',
                'friends',
                'family',
                'grandma'
            ];

            const helloSubject = document.querySelector('#hello-subject');

            const typewriter = new Typewriter(helloSubject, {
                loop: true
            });

            helloSubjects.forEach((helloSubject) => {
                const helloSubjectText = `${helloSubject}!`;
                typewriter.typeString(helloSubjectText)
                    .pauseFor(2500)
                    .deleteAll();
            });

            typewriter.start();
        }
    }
});


