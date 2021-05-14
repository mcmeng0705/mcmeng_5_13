//入口js

import Vue from "vue";
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

new Vue({
  el:'#app',
  render : h =>h(App),
  router
})
