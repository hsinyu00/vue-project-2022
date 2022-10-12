<template>
    <div>
        <h1>Winter Shop</h1>
        <div class="shop">
            <ProductItem v-for="item in products"
            :key="item.id"
            :item="item"></ProductItem>
        </div>
    </div>
</template>

<script>
import ProductItem from '../components/ProductItem.vue'
// import products from '../data/products.js'
import axios from 'axios'
// import { ref } from 'vue'
// import { onMounted } from "vue"


export default {
  name: 'App',
//   setup() {
//     let products = ref([])
//     let loadProducts = function ()  {
//       axios({
//           method: 'get',
//           url: '../data/products2.json'
//       })
//       .then((response) => {
//         products.value = response.data.products
//         console.log(products.value)
//       })
//     }
//     onMounted (()=> {
//         loadProducts()
//     })
//     return (products, loadProducts)
//   },

  
  data() {
    return {
      products: []
    }
  },
  methods: {
    loadProducts: function() {
      axios({
          method: 'get',
          url: '../data/products2.json'
      })
      .then((response) => {
        console.log(response)
        this.products = response.data.products
      })
    }
  },
  mounted() {
    this.loadProducts()

  },
  components: {
    ProductItem
  }
}
</script>
<style>
    .shop {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
</style>