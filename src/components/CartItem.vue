<template>
    <tr class="item">
        
        <td class="id"><h3>{{ item.id }}</h3></td>
        <td><h3>{{ item.name }}</h3></td>
        <td class="price">{{ item.price }}</td>
        <td class="category">{{ item.category }}</td>
        <td class="qty">
            <button @click="decrease(item)"> - </button>
                {{ item.qty }}
            <button @click="increase(item)"> + </button>
        </td>
        <td><button class="btn" @click.prevent="removeFromCart(item)">remove item</button></td>
    </tr>
</template>

<script>
    export default {
        props: ['item'],
        methods: {
            decrease(item) {
                this.$store.commit('decrease', item)
            },
            increase(item) {
                this.$store.commit('increase', item)
            },
            removeFromCart(item) {
                this.$store.commit('removeFromCart', item)
            }
        }
    }
</script>

<style scoped>
    td {
        border: 1px solid #ddd;
    }
</style>

