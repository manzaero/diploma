import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {thunk} from "redux-thunk";
import {
    appReducer,
    productReducer,
    productsReducer,
    searchReducer,
    userReducer,
    usersReducer
} from './reducers'
import {categoriesReducer} from "./reducers/categories-reducer.js";

const reducer = combineReducers({
    app: appReducer,
    user: userReducer,
    users: usersReducer,
    product: productReducer,
    products: productsReducer,
    search: searchReducer,
    categories: categoriesReducer,

})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));