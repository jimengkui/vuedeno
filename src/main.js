// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'
import './assets/bootstrap-3.3.7-dist/css/bootstrap.min.css' 
import './assets/bootstrap-3.3.7-dist/js/bootstrap.min.js'
Vue.config.productionTip = false

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
