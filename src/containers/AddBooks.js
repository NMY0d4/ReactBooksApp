import React, { useState } from "react";
import { connect } from "react-redux";
import { addBook } from "../redux/actions/actionAddBooks";

const AddBooks = ({ libraryData, addBook }) => {
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
            libraryData.map((book) => (
                <li
                    key={book.id}
                    className="list-group-item list-group-item-light d-flex justify-content-between"
                >
                    <span>
                        <strong>titre: </strong>
                        {book.title}
                    </span>
                    <span>
                        <strong>Auteur: </strong>
                        {book.author}
                    </span>
                    <span className="btn btn-danger">X</span>
                </li>
            ))
        ) : (
            <p className="text-center">Aucun livres enregistré</p>
        );

    const deleteAllBooks = libraryData.length > 1 && (
        <button className="btn btn-danger mt-4 mb-5">
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
                            {deleteAllBooks}
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBooks);
