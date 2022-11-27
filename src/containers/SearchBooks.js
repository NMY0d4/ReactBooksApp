import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/actions/actionFetchBooks";

function SearchBooks() {
    const [search, setSearch] = useState("");

    const state = useSelector((state) => state.search);
    const dispatch = useDispatch();

    console.log(state);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(search);
        dispatch(fetchBooks(search));
    };

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
                <div className="accordion">
                    <div className="card mb-2">
                        <div className="card-header"></div>
                        <div className="collapse" data-parent="accordion">
                            <div className="card-body">
                                {/*
                                    -image
                                    -Titre
                                    -Auteur
                                    -description
                                    -Btn plus d'infos
                                    -Btn Enregistrer                                    
                                    
                                     */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SearchBooks;
