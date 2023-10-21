import { combineReducers } from "redux";
import ToDoReducer from "./ToDoReducer";

const rootReducer = combineReducers({
  todos: ToDoReducer
});

export default rootReducer;
