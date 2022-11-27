import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import addBooksReducer from "./reducers/reducerAddBooks";
import { reducerFetchBooks } from "./reducers/reducerFetchBooks";

const rootReducer = combineReducers({
    library: addBooksReducer,
    search: reducerFetchBooks,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
