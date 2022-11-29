import React, { useState } from "react";
import { connect } from "react-redux";
import {
    addBook,
    deleteAllBooks,
    deleteBook,
} from "../redux/actions/actionAddBooks";
import FlipMove from "react-flip-move";

const AddBooks = ({ libraryData, addBook, deleteBook, deleteAllBooks }) => {
    const initialState = {
        title: "",
        author: "",
    };

    const [newData, setNewData] = useState(initialState);

    const { title, author } = newData;

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(newData);
        addBook(newData);
        // console.log(libraryData);
        // vider le input:
        setNewData(initialState);
    };

    const displayBooks =
        libraryData.length > 0 ? (
            <FlipMove>
                {libraryData.map((book) => (
                    <li
                        key={book.id}
                        className="list-group-item list-group-item-light d-flex justify-content-between"
                    >
                        <span className="li-book-span">
                            <strong>titre: </strong>
                            {book.title}
                        </span>
                        <span className="li-book-span">
                            <strong>Auteur: </strong>
                            {book.author}
                        </span>
                        <span
                            className="btn btn-danger"
                            onClick={() => deleteBook(book.id)}
                        >
                            X
                        </span>
                    </li>
                ))}
            </FlipMove>
        ) : (
            <p className="text-center">Aucun livres enregistré</p>
        );

    const buttonDeleteAllBooks = libraryData.length > 1 && (
        <button
            className="btn btn-danger mt-4 mb-5"
            onClick={() => deleteAllBooks()}
        >
            Effacer tous les livres
        </button>
    );

    return (
        <main role="main">
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-4">My BOOKS</h1>

                    <p>Ajouter un livre à votre bibliothèque</p>

                    <form
                        className="row justify-content-center"
                        onSubmit={handleSubmit}
                    >
                        <div className="col form-group">
                            <input
                                value={title}
                                type="text"
                                className="form-control"
                                placeholder="Titre"
                                onChange={(e) =>
                                    setNewData({
                                        ...newData,
                                        title: e.target.value,
                                    })
                                }
                                required
                            ></input>
                        </div>
                        <div className="col form-group">
                            <input
                                value={author}
                                type="text"
                                className="form-control ml-3"
                                placeholder="Auteur"
                                onChange={(e) =>
                                    setNewData({
                                        ...newData,
                                        author: e.target.value,
                                    })
                                }
                                required
                            ></input>
                        </div>
                        <div className="col-2 form-group">
                            <button className="btn btn-outline-secondary ml-3">
                                Ajouter un livre
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="container" style={{ minHeight: "200px" }}>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-group">{displayBooks}</ul>
                        <div className="d-flex justify-content-center">
                            {buttonDeleteAllBooks}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

const mapStateToProps = (state) => {
    return {
        libraryData: state.library,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addBook: (param) => dispatch(addBook(param)),
        deleteBook: (id) => dispatch(deleteBook(id)),
        deleteAllBooks: () => dispatch(deleteAllBooks()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBooks);
