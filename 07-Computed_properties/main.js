var app = new Vue({
  el: '#app',

  data: {
    brand: 'Vuemastery',
    product: 'Socks',
    selectedVariant: 0,//we store the index number of the selected variant (remeber, we have two variants, and they are stored in an array. So we have 0 and 1 variant. So 0 means greens socks, 1 means blue socks). This will be used for changing things in html, depending on our mouse hoovering.
    details: ['80% cotton', '20% polyester', 'for males'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage:'greensocks.png',
        variantQuantity: 10,
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage:'bluesocks.png',
        variantQuantity: 0,
      }
    ],
    cart: 0,
    onSale: true,
  },

  methods:{
    addToCart: function(){
      this.cart +=1;
    },

    updateProduct: function(index){//we are changing the green/blue sock image with this
      this.selectedVariant = index;
      console.log(index);//this is just for demonstration only...
    },
  },

  computed: {//this is an object. We put here computed properties. The computed properties calculate a value rather than store a value (in comparison with ordinary properties). Note that the computed properties look like methods! They behave like methods...
    title(){
      return this.brand + ' ' + this.product;
    },

    image(){
      return this.variants[this.selectedVariant].variantImage;//we are returning this.variants, which is our array of variants, and we are using our selectedVariant, which is either 0 or 1 (because method updateProduct() made selectedVariant = index), to target the first or second element in that array, then we’re using dot notation to target its image. 
    },

    inStock(){
      return this.variants[this.selectedVariant].variantQuantity//the quantity of socks is in the variantQuantity
    },

    onSaleMethod(){
      return this.brand + ' ' + this.product + ' is on sale!!!!!';
    }
  }
})