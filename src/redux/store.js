import { createStore, combineReducers, applyMiddleware } from "redux";
import cartReducer from "./reducers/cartReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"

const middleware=applyMiddleware(thunk)

const combinedReducer = combineReducers({
    cart: cartReducer,
})

const store = createStore(combinedReducer, composeWithDevTools(middleware))
export default store;