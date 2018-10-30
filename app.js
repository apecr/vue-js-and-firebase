/* global Vue*/

const vueApp = new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue ninja',
    name: 'Alberto'
  },
  methods: {
    updateName(event) {
      //console.log(event.target.value);
      this.name = event.target.value;
    }
  }
});