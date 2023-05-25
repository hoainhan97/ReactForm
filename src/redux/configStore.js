import { combineReducers, createStore } from "redux";
import { QLSVReducer } from "./reducer/QLSVReducer";
const rootReducer = combineReducers({
    
    QLSVReducer: QLSVReducer,
})

export const store = createStore(rootReducer)