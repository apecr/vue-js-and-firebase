/* global Vue*/

const vueApp = new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue ninja'
  },
  methods: {
    logMessage() {
      console.log('Hello World!');
    }
  }
});