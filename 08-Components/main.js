Vue.component('product',{
  template: `
  <div class="product">
      <div class="product-image">
        <img v-bind:src="image">
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if='inStock'>In stock</p>
        <p v-else :class = '{ noSocks: !inStock }'>Out of stock</p>
        <p v-if = 'onSale'> {{ onSaleMethod }}</p>
        
        <ul>
          <li v-for = 'detail in details'>{{detail}}</li>
        </ul>

        <div v-for = '(variant, index) in variants' 
          :key = 'variant.variantId' 
          class = 'color-box' 
          :style = '{ backgroundColor: variant.variantColor }' 
          @mouseover = 'updateProduct(index)'> 
        </div>
        
        <button v-on:click = 'addToCart'
          :disabled = '!inStock'
          :class = '{ disabledButton: !inStock }'
          >Add to cart</button>
        <div class="cart">
          <p>Cart {{ cart }}</p>
        </div>

      </div>
    </div>
  `,
  data(){
    return {
      brand: 'Vuemastery',
      product: 'Socks',
      selectedVariant: 0,
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
    }
  },

  methods:{
    addToCart: function(){
      this.cart +=1;
    },

    updateProduct: function(index){
      this.selectedVariant = index;
      console.log(index);
    },
  },

  computed: {
    title(){
      return this.brand + ' ' + this.product;
    },

    image(){
      return this.variants[this.selectedVariant].variantImage;
    },

    inStock(){
      return this.variants[this.selectedVariant].variantQuantity
    },

    onSaleMethod(){
      return this.brand + ' ' + this.product + ' is on sale!!!!!';
    }
  }
});

var app = new Vue({
  el: '#app',
})