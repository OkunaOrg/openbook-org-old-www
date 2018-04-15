require('./styles/index.scss');
window['jQuery'] = window['$'] = require('jquery');
require('slick-carousel');

import Vue from 'vue';
import obBrowser from './components/browser.vue';

new Vue({
    el: '#main',
    components: {
        obBrowser
    },
});
