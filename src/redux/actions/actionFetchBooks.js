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

const GOOGLE_API_KEY = "AIzaSyALTM5m-efMMV2aDu_WXzn2K0sZvrhXskc";

export const fetchBooks = (title) => {
    return (dispatch) => {
        dispatch(fetchBooksLoading());
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${GOOGLE_API_KEY}&maxResults=20`
            )
            .then((res) => dispatch(fetchBooksSuccess(res.data.items)))
            .catch((err) => dispatch(fetchBooksError(err.message)));
    };
};
