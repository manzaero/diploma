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

const reducer = combineReducers({
    app: appReducer,
    user: userReducer,
    users: usersReducer,
    product: productReducer,
    products: productsReducer,
    search: searchReducer

})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));