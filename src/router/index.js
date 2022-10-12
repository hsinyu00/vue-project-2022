import { createRouter, createWebHistory } from "vue-router"
import Shop from '../views/Shop.vue'
import Cart from '../views/Cart.vue'

const routes = [
    {
        path:'/',
        name: 'Home',
        component: Shop
    },
    {
        path:'/shop',
        name: 'Shop',
        component: Shop
    },
    {
        path:'/cart',
        name: 'Cart',
        component: Cart
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router