import "./fonts.css"

import Vue from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import VueRouter from "vue-router";
import router from "./plugins/router";

import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

library.add(fas);
library.add(far);
library.add(fab);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
