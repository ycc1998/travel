import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAwesomeSwiper from 'vue-awesome-swiper';
import "./static/styles/reset.css";
import "./static/styles/border.css";
import "./static/styles/iconfont.css";

import 'swiper/dist/css/swiper.css';


import fastClick from 'fastclick';


Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
