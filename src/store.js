import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {thunk} from "redux-thunk";
import {
    appReducer,
    categoriesReducer,
    productReducer,
    productsReducer,
    searchReducer,
    userReducer,
    usersReducer
} from './reducers'

const loadingState = () => {
    const realizingState = localStorage.getItem('initialUsersState');
    return realizingState ? JSON.parse(realizingState) : undefined;
}

const saveState = (state) => {
    const realizingState = JSON.stringify(state)
    localStorage.setItem('initialUsersState', realizingState)
}

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

export const store = createStore(reducer, loadingState(), composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => {
    saveState(store.getState())
})