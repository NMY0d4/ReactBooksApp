import axios from "axios";
import { FETCH_ACTION_TYPE } from "../constants";

const fetchBooksLoading = () => {
    return {
        type: FETCH_ACTION_TYPE.BOOKS_IS_LOADING,
    };
};

const fetchBooksSuccess = (data) => {
    return {
        type: FETCH_ACTION_TYPE.BOOKS_LOADING_SUCCESS,
        payload: data,
    };
};

const fetchBooksError = (error) => {
    return {
        type: FETCH_ACTION_TYPE.BOOKS_LOADING_ERROR,
        payload: error,
    };
};

const MY_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const fetchBooks = (title) => {
    return (dispatch) => {
        dispatch(fetchBooksLoading());
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${MY_API_KEY}&maxResults=20`
            )
            .then((res) => dispatch(fetchBooksSuccess(res.data.items)))
            .catch((err) => dispatch(fetchBooksError(err.message)));
    };
};
