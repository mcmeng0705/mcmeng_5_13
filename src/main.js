//入口js

import Vue from "vue";
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import store from "./vuex/store";

Vue.use(ElementUI)

new Vue({
  el:'#app',
  store,
  render : h =>h(App),
  router
})
