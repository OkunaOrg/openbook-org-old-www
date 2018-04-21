require('./styles/index.scss');

window['jQuery'] = window['$'] = require('jquery');
require('slick-carousel');

require('./scripts/typewriter.exec.js');
require('./scripts/fontawesome-all.exec.js');

import Vue from 'vue';
import Buefy from 'buefy'

Vue.use(Buefy);

import obBrowser from './components/browser.vue';
import obHamburger from './components/hamburger.vue';
import obMobileMenu from './components/mobile-menu.vue';
import obGenericDataSharing from './components/generic-data-sharing.vue';
import obOpenbookDataSharing from './components/openbook-data-sharing.vue';

const appElement = document.querySelector('#app');

new Vue({
    el: appElement,
    components: {
        obBrowser,
        obGenericDataSharing,
        obOpenbookDataSharing,
        obHamburger,
        obMobileMenu
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


document.addEventListener("DOMContentLoaded", function () {
    // Handler when the DOM is fully loaded
});
