/* global Vue*/

const vueApp = new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue ninja',
    coordenates: {
      x: 0,
      y: 0
    }
  },
  methods: {
    logEvent(event) {
      console.log(event);
    },
    logCoordinates(event) {
      this.coordenates.x = event.offsetX;
      this.coordenates.y = event.offsetY;
    }
  }
});