<template>
    <div>
        <h1>Your cart</h1>
        <table cellspacing="0">
            <CartItem v-for="item in cartItems"
                :key="item.id"
                :item="item"></CartItem>
        </table>
        <div>Total: {{ total || 0 }} </div>
        
    </div>
</template>

<script>
import CartItem from '../components/CartItem.vue'

export default {
    computed: {
        cartItems() {
            return this.$store.getters.cartItems;
        },
        total() {
            return this.$store.getters.updateTotal;
        }
    },
    components: {
        CartItem
    }
}
</script>

<style>
    table {
        width: 90%;
        margin: auto;
    }
</style>