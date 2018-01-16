import './stylesheets/app.scss'

import Vue from 'vuejs'

import Header from './components/header.vue'
import Main from './components/main.vue'

var vm = new Vue({
  el: '#app',
  components: {
    'header-component': Header,
    'main-component': Main
  }
})
