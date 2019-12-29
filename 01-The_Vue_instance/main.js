/*WE HAVE TO ADD THE VUE LINK TO OUR HTML
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
*/

var app = new Vue({//This is a Vue instance, that we stored in a variable called app
  el: '#app',//this is an element property. The app is the id of our div in html. With this we just connected our Vue instance with our div.

  data: {// data is also a property. It stores data.
    product: 'Socks',//this product will be echoed in our h1
  }
})