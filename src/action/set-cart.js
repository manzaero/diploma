import {ACTION_TYPE} from "./action-type.js";

export const setCart = (cart) => ({
    type: ACTION_TYPE.ADD_TO_CART,
    payload: cart
})