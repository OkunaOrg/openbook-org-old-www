require('./styles/index.scss');


import Vue from 'vue';
import obBrowser from './components/browser.vue';

new Vue({
    el: '#main',
    components: {
        obBrowser
    },
});
