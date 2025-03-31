import {ACTION_TYPE as ACTION_TYPES} from "./action-type.js";

export const removeToCart = (arr) => ({
    type: ACTION_TYPES.REMOVE_TO_CART,
    payload: arr
})