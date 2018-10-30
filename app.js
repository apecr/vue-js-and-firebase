/* global Vue*/

const vueApp = new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue ninja',
    name: 'Alberto'
  },
  methods: {
    greet({ time }) {
      return `Hello and good ${time}, ${this.name}.`;
    }
  }
});