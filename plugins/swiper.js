import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.min.css';
if (process.browser) { 
    Vue.use(VueAwesomeSwiper, {name: 'swiper'});
}