var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: 'greensocks.png',//this image: is dynamic. With the help of the updateProduct() this image will change into greensocks.png or bluesocks.png, depending on the mouse hoovering.
    inventory: 100,
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
  methods:{//methods here is a similar property like el, or data. We put our methods here.
    addToCart: function(){
      this.cart +=1;//this means: this cart, that is in our Vue object
    },

    updateProduct: function(variantImage){//example: variantImage could be 'bluesocks.png'...
      this.image = variantImage;//...so, in this example case our image property on the top, will be = 'bluesocks.png'. So, in the DOM we will see 'bluesocks.png' image.
    },

    removeFromCart: function(){
      this.cart -=1;
    }
  }
})