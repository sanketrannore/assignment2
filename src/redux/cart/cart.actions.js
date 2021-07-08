import {ADD_TO_CART, REMOVE_FROM_CART} from './cart.types'

export const addToCart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload
    }
}

export const removeFromCart = (payload) => {
    return {
        type: REMOVE_FROM_CART,
        payload
    }
}