var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: 'greensocks.png',
    inStock: false,
    details: ['80% cotton', '20% polyester', 'for males'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage:'greensocks.png',
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage:'bluesocks.png',
      }
    ],
    cart: 0,
  },
  methods:{
    addToCart: function(){
      this.cart +=1;
    },

    updateProduct: function(variantImage){
      this.image = variantImage;
    },
  }
})