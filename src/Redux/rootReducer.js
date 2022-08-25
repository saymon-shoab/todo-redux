import todoReducer from "./Todos/reducer";
import filterReducer from "./Filter/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todos: todoReducer,
    filters: filterReducer,
})
export default rootReducer;