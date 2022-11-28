import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/actions/actionFetchBooks";

function SearchBooks() {
    const [search, setSearch] = useState("");

    const state = useSelector((state) => state.search);
    const dispatch = useDispatch();

    // console.log(state);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(search);
        dispatch(fetchBooks(search));
    };

    const displayFetchedBooks = state.isLoading ? (
        <div className="d-flex justify-content-center">
            <div className="spinner-border text-info" role="status"></div>
        </div>
    ) : state.error !== "" ? (
        <p>{state.error}</p>
    ) : (
        state.fetchBooks.map((book) => (
            <div className="card mb-2" key={book.id}>
                <div className="card-header">
                    <h5 className="mb-0">
                        <button
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target={`#${book.id}`}
                            aria-expanded="false"
                        >
                            {book.volumeInfo.title}
                        </button>
                    </h5>
                </div>
                <div id={book.id} className="collapse" data-parent="#accordion">
                    <div className="card-body">
                        {book.volumeInfo.hasOwnProperty("imageLinks") && (
                            <img
                                src={book.volumeInfo.imageLinks.thumbnail}
                                alt={book.volumeInfo.title}
                            />
                        )}
                        <br />
                        <h4 className="card-title">{book.volumeInfo.title}</h4>
                        <h5 className="card-title">
                            Auteur: {book.volumeInfo.authors}
                        </h5>
                        <p className="card-text">
                            Description: {book.volumeInfo.description}
                        </p>
                        <a
                            href={book.volumeInfo.previewLink}
                            className="btn btn-outline-secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Plus d'infos
                        </a>
                        <button className="btn btn-outline-secondary ml-3">
                            Enregistrer
                        </button>
                    </div>
                </div>
            </div>
        ))
    );

    return (
        <main role="main">
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-4">My BOOKS</h1>

                    <p>Description du livre à rechercher (👉 google API)</p>

                    <form
                        className="row justify-content-center"
                        onSubmit={handleSubmit}
                    >
                        <div className="col form-group">
                            <input
                                // value={title}
                                type="text"
                                className="form-control"
                                placeholder="Description ici"
                                required
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            ></input>
                        </div>
                        <div className="col-2 form-group">
                            <button className="btn btn-outline-secondary ml-3">
                                Rechercher
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="container" style={{ minHeight: "200px" }}>
                <div id="accordion">{displayFetchedBooks}</div>
            </div>
        </main>
    );
}

export default SearchBooks;
