import {ACTION_TYPE} from "../action/index.js";

const initialProductsState = []

export const productsReducer = (state = initialProductsState, action) => {
    switch (action.type) {
        case ACTION_TYPE.LOAD_PRODUCTS :
            return Array.isArray(action.payload) ? action.payload : state;
        default:
            return state
    }
}