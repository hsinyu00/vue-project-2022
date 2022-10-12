import { createStore } from "vuex"

function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}

export default createStore({
    state: {
        cart: [],
    },
    getters: {
        cartItems: (state) => {
          return state.cart
        },
        updateTotal(state) {
            if(state.cart.length > 0) {
              let total = state.cart.map(function(obj) {
                  let sub = obj.price * obj.qty
                  return sub
              }).reduce(function(result, sub) {
                  return result + sub
              })
              return total
            }
        }
    },
    mutations: {
        addToCart(state, item) {
            let target = state.cart.findIndex((cartObj) => cartObj.id === item.id)
            console.log(target)
            if (target >= 0) { // cart 裡已有此項
                state.cart[target].qty = state.cart[target].qty + 1
                // Vue.set(state.cart, target, state.cart[target])
            } else {
                let newItem = item
                newItem.qty = 1
                state.cart.push(newItem)
            }

            updateLocalStorage(state.cart)
        },
        removeFromCart(state, item) {
            if(state.cart.length > 0) {
                if (confirm("Delete this item?")) {
                    let target = state.cart.findIndex((cartObj) => cartObj.id === item.id)
                    state.cart.splice(target, 1)

                    updateLocalStorage(state.cart)
                }
            }
        },
        increase(state, item) {
            let target = state.cart.findIndex((cartObj) => cartObj.id === item.id)
            state.cart[target].qty = state.cart[target].qty + 1

            updateLocalStorage(state.cart)
        },
        decrease(state, item) {
            let target = state.cart.findIndex((cartObj) => cartObj.id === item.id)

            if (state.cart[target].qty > 1) {
                state.cart[target].qty = state.cart[target].qty - 1
            } else {
                this.commit('removeFromCart', item)
            }

            updateLocalStorage(state.cart)
        },
        loadCart(state) {
            const storage = localStorage.getItem('cart')
            if (storage) {
                state.cart = JSON.parse(storage)
            }
        }
    }
});