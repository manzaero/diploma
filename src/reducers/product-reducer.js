import {ACTION_TYPE} from "../action/index.js";

const initialProductState = {
    selectedProduct: [],
}

export const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SELECT_PRODUCT: {
            return {
                ...state,
                selectedProduct: action.payload
            }
        }
        default:
            return state
    }
}