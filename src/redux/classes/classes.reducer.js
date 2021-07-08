import {SAVE_CLASSES, REMOVE_CLASS_SEATS_AVAILABLE, ADD_CLASS_SEATS_AVAILABLE} from './classes.types'

const INITIAL_STATE = {
    data: []
}


const classesReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case SAVE_CLASSES:
            return {data: action.payload}
        case REMOVE_CLASS_SEATS_AVAILABLE:
            return {
                state,
                data: state.data.map((d) => {
                    if(d.id === action.payload) {
                        d.availableSeats = d.availableSeats - 1
                        d.booked = true
                    }
                    return d;
                })
            }
        case ADD_CLASS_SEATS_AVAILABLE:
            return {
                state,
                data: state.data.map((d) => {
                    if(d.id === action.payload) {
                        d.availableSeats = d.availableSeats + 1
                        d.booked = false
                    }
                    return d;
                })
            }
        default:
            return state
    }
}

export default classesReducer;