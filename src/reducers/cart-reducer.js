import {ACTION_TYPE} from "../action/index.js";

const initialState = {
    items: [],
    sum: 0
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE.ADD_TO_CART:
            if (state.items.find(item => item.id === action.payload.id)) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id ?
                            {...item, quantity: item.quantity + 1} :
                            item
                    ),
                    sum: state.sum + action.payload.price
                }
            } else {
                return {
                    ...state,
                    items: [...state.items, {...action.payload, quantity: 1}],
                    sum: state.sum + action.payload.price
                }
            }
        case ACTION_TYPE.REMOVE_TO_CART: {
            const removed = state.items.find((item) => item.id === action.payload.id)
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
                sum: removed ? state.sum - (removed.price * removed.quantity) : state.sum
            }
        }
        case ACTION_TYPE.CLEAR_CART:
            return initialState
        default:
            return state
    }
}