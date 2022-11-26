import { combineReducers, createStore } from "redux";
import addBooksReducer from "./reducers/reducerAddBooks";

const rootReducer = combineReducers({
    library: addBooksReducer,
});

const store = createStore(rootReducer);

export default store;
