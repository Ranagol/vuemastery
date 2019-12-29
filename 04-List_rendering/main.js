var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: 'socks.png',
    inventory: 100,
    details: ['80% cotton', '20% polyester', 'for males'],
    variants: [
      {//note, this is an object
        variantId: 2234,
        variantColor: 'green'
      },
      {//note, this is a another object
        variantId: 2235,
        variantColor: 'blue'
      }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
  }
})