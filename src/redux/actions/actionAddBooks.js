import { ACTION_TYPE } from "../constants";

export const addBook = (data) => {
    return {
        type: ACTION_TYPE.ADD_BOOKS,
        payload: data,
    };
};
