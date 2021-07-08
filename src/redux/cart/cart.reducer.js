import {ADD_TO_CART, REMOVE_FROM_CART} from './cart.types'

const INITIAL_STATE = {
    items: []
}

const cartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            return {
                state, 
                items: [...state.items, action.payload]
            }
        case REMOVE_FROM_CART:            
            return {
                state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        default:
            return state
    }
}

export default cartReducer;