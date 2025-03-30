import {ACTION_TYPE} from "./action-type.js";

export const selectProduct = (product) => ({
    type: ACTION_TYPE.SELECT_PRODUCT,
    payload: product
})