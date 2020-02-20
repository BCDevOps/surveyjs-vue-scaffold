import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@bcgov/bootstrap-theme/dist/css/bootstrap-theme.min.css";
//import "./_common.scss";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
  data: {
    survey: window.survey
  }
}).$mount("#app");
