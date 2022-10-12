<template>
    <div class="item">
        <h2>{{ item.id }}</h2>
        <h1>{{ item.name }}</h1>
        <div class="price">${{ item.price }}</div>
        <div class="category"><b>{{ item.category }}</b></div>
        <div class="summary">{{ item.summary }}</div>
        <button class="btn" @click.prevent="addToCart(item)">add to cart</button>
    </div>
</template>

<script>
    export default {
        props: ['item'],
        methods: {
            addToCart(item) {
                this.$store.commit('addToCart', item)
            }
        }
    }
</script>

<style scoped>
    .item {
        border: 1px solid #ccc;
    }
</style>