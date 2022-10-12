<template>
  <router-link class="nav" :class="{active: $route.name === 'Shop'}" to="/shop">Shop</router-link> | 
  <router-link class="nav" :class="{active: $route.name === 'Cart'}" to="/cart">Cart</router-link>
  <router-view />
</template>

<script>
  export default {
    created() {
        this.$store.commit('loadCart')
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  margin-top: 60px;
}

.nav.active {
    color: black;
    font-weight: bold;
}

</style>
