import {SAVE_CLASSES, REMOVE_CLASS_SEATS_AVAILABLE, ADD_CLASS_SEATS_AVAILABLE} from './classes.types'

export const saveClasses = (payload) => {
    return {
        type: SAVE_CLASSES,
        payload
    }
}

export const bookClass = (id) => {
    return {
        type: REMOVE_CLASS_SEATS_AVAILABLE,
        payload: id
    }
}

export const canceBooklClass = (id) => {
    return {
        type: ADD_CLASS_SEATS_AVAILABLE,
        payload: id
    }
}