import Vue from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";
import store from "./store";
import ClassicLayout from "@/layouts/ClassicLayout.vue";
import BlankLayout from "@/layouts/ClassicLayout.vue";
Vue.component("ClassicLayout", ClassicLayout);
Vue.component("BlankLayout", BlankLayout);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
