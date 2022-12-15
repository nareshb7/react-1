import { ADD_TO_CART, INCREASE, DECREASE, DELETE, EMPTYCART } from './CartActionType'

const cartInititalState = {
    cartItems: []
}
const CartItems = JSON.parse(localStorage.getItem('Ecom-CartItems'))
if (CartItems){
    cartInititalState.cartItems= CartItems
}


const CartReducer = (state = cartInititalState, action) => {
    const updated = JSON.parse(JSON.stringify(state.cartItems))
    let newProduct =true
    switch (action.type) {
        case ADD_TO_CART:
            updated.forEach(item=> {
                if (item.id === action.payload.id) {
                    newProduct = false
                    return 
                }  
            })
            if (!newProduct) {
                alert(`It's Already added to your cart`)
                return state
            }
            localStorage.setItem('Ecom-CartItems',JSON.stringify([...state.cartItems, action.payload]))
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        case INCREASE:
            updated.forEach(item => {
                if (item.id === action.id) {
                    item.quantity = action.quantity + 1
                    item.amount = item.price * item.quantity
                }
            })
            localStorage.setItem('Ecom-CartItems', JSON.stringify(updated))
            return {
                ...state,
                cartItems: updated
            }
        case DECREASE:
            updated.forEach(item => {
                if (item.id === action.id) {
                    item.quantity = action.quantity - 1
                    item.amount = item.price * item.quantity
                }
            })
            localStorage.setItem('Ecom-CartItems', JSON.stringify(updated))
            return {
                ...state,
                cartItems: updated
            }
        case DELETE: 
            updated.forEach((item, i) => {
                if (item.id === action.obj.id) {
                    updated.splice(i, 1)
                    return
                }
            })
            localStorage.setItem('Ecom-CartItems', JSON.stringify(updated))
            return {
                ...state,
                cartItems: updated
            }
        case EMPTYCART: 
            localStorage.setItem('Ecom-CartItems', JSON.stringify([]))
            return {
                ...state,
                cartItems : []
            }
        default: return state
    }
}

export default CartReducer