import { ACTION_TYPE } from "../constants";

export const addBook = (data) => {
    return {
        type: ACTION_TYPE.ADD_BOOKS,
        payload: data,
    };
};

export const deleteBook = (id) => {
    return {
        type: ACTION_TYPE.DELETE_BOOK,
        payload: id,
    };
};
