import { combineReducers, legacy_createStore as createStore } from "redux";
import counterReducer from "./reducers/counterReducers";
import todoReducer from "./reducers/todoReducer";

const rootReducer=combineReducers({
    counterReducer,
    todoReducer
});

export const store=createStore(rootReducer);