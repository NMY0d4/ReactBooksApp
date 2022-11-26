import React from "react";
import { Link } from "react-router-dom";
import BooksLogo from "../images/logoBooks.png";

const Navbar = () => {
    return (
        <header>
            <div className="d-flex flex-column flex-md-row p-3 border-bottom bg-secondary text-white">
                <h4 className="mr-md-auto">
                    <Link to="/" className="text-decoration-none text-white">
                        <img
                            id="headerLogo"
                            src={BooksLogo}
                            alt="Logo Books App"
                        />
                        BOOKS
                    </Link>
                </h4>
                <nav className="btn-group nav-right">
                    <Link to="/" className="btn btn-light">
                        Accueil
                    </Link>
                    <Link to="/search" className="btn btn-light">
                        Rechercher
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
