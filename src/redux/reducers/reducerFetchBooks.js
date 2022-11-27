import { FETCH_ACTION_TYPE } from "../constants";

const initialState = {
    isLoading: false,
    fetchBooks: [],
    error: "",
};

export const reducerFetchBooks = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_ACTION_TYPE.BOOKS_IS_LOADING:
            return { ...state, isLoading: true };
        case FETCH_ACTION_TYPE.BOOKS_LOADING_SUCCESS:
            return { ...state, isLoading: false, fetchBooks: payload };
        case FETCH_ACTION_TYPE.BOOKS_LOADING_ERROR:
            return { ...state, isLoading: false, error: payload };
        default:
            return state;
    }
};
