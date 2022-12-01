import React from "react";
import { Link } from "react-router-dom";
import BooksLogo from "../../images/logoBooks.png";
import { NavbarHeader, NavLinkStyled } from "./Navbar.styles";

const Navbar = () => {
    return (
        <NavbarHeader>
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
                    <NavLinkStyled to="/" className=" btn btn-light">
                        Accueil
                    </NavLinkStyled>
                    <NavLinkStyled to="/search" className="btn btn-light">
                        Rechercher
                    </NavLinkStyled>
                </nav>
            </div>
        </NavbarHeader>
    );
};

export default Navbar;
