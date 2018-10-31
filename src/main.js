import Vue from 'vue';
import App from './App.vue';

// create global filter
Vue.filter('snippet', val =>
  !val || typeof(val) !== 'string' ? '' : val.slice(0, 50));

const vueApp = new Vue({
  el: '#app',
  render: h => h(App)
});
