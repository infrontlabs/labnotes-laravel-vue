import Vue from 'vue'
import store from './store'
import router from './router'
import App from './App'
import Card from './components/Card'

require('./bootstrap')

Vue.component('card', Card)

window.Vue = Vue

/* eslint no-unused-vars: 0 */
const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
