import { combineReducers, createStore } from "redux"
import todoReducer from "./reducers/todoReducer"

export const rootReducer = combineReducers({
    todoReducer
})

export const store = createStore(rootReducer)
