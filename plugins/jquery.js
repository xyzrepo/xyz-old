import Vue from 'vue';
import jquery from 'jquery';

if (process.browser) { 
    Vue.use(jquery, {name: '$'});
}