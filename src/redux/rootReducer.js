import { combineReducers } from 'redux';
import classesReducer from './classes/classes.reducer'
import cartReducer from './cart/cart.reducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    classes: classesReducer
});

export default rootReducer;