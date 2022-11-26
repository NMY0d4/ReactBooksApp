import { ACTION_TYPE } from "../constants";
import { v4 as uuiv4 } from "uuid";

const initialState = {
    books: [],
};

const helperAddData = (payload) => {
    return {
        id: uuiv4(),
        title: payload.title,
        author: payload.author,
    };
};

// reducer
const addBooksReducer = (state = initialState.books, action) => {
    const { type, payload } = action;

    if (localStorage.getItem("booksData"))
        state = JSON.parse(localStorage.getItem("booksData"));

    switch (type) {
        case ACTION_TYPE.ADD_BOOKS:
            state = [...state, helperAddData(payload)];
            localStorage.setItem("booksData", JSON.stringify(state));
            return state;

        default:
            return state;
    }
};

export default addBooksReducer;
