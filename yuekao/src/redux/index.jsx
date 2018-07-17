import {createStore,combineReducers,applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"//异步加载
import reducer from "./reducer"
export * from "./actions_types"
export * from "./actions"



export default new createStore(reducer,applyMiddleware(thunkMiddleware))