import React from "react";
import BooksLogo from "../images/logoBooks.png";

const Navbar = () => {
    return (
        <header>
            <div className="d-flex flex-column flex-md-row p-3 border-bottom bg-secondary text-white">
                <h4 className="mr-md-auto">
                    <a href="/" className="text-decoration-none text-white">
                        <img
                            id="headerLogo"
                            src={BooksLogo}
                            alt="Logo Books App"
                        />
                        BOOKS
                    </a>
                </h4>
            </div>
        </header>
    );
};

export default Navbar;
