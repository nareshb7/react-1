
import { ADD_TO_CART, INCREASE, DECREASE, DELETE , EMPTYCART} from './CartActionType'


export const CartAction = (obj) => {
    return {
        type: ADD_TO_CART,
        payload: obj
    }
}
export const Increase = (id, quantity) => {
    return {
        type: INCREASE,
        id,
        quantity
    }
}
export const Decrease = (id, quantity) => {
    return {
        type: DECREASE,
        id,
        quantity
    }
}
export const Delete = (obj)=> {
    return {
        type: DELETE,
        obj
    }
}
export const EmptyCart =()=> {
    return {
        type: EMPTYCART
    }
}

