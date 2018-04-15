require('./styles/index.scss');
window['jQuery'] = window['$'] = require('jquery');
require('slick-carousel');
require('./scripts/typewriter.exec.js');

import Vue from 'vue';
import obBrowser from './components/browser.vue';

new Vue({
    el: '#main',
    components: {
        obBrowser
    },
    mounted() {
        // This should have been added by the require of typewriter.exec.js
        const Typewriter = window['Typewriter'];

        const helloSubjects = [
            'world',
            'friends',
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
});


document.addEventListener("DOMContentLoaded", function () {
    // Handler when the DOM is fully loaded
});
