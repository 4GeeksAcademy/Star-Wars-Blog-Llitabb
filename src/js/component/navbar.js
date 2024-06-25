import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para controlar si el dropdown está abierto o cerrado

    return (
        <nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-between">
            <div className="d-flex align-items-center">
                <Link to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" className="logoStarWars navbar-brand mb-0 px-0" />
                </Link>
                <div className="dropdown mx-2" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <button className="btn btn-dark text-warning dropdown-toggle border border-warning border-3" type="button" aria-expanded={isDropdownOpen ? "true" : "false"}>
                        Favorites
                    </button>
                    <ul className={"dropdown-menu dropdown-menu-dark" + (isDropdownOpen ? " show" : "")}>
                        {store.myFavorites.map((item, index) => <li key={index} className="dropdown-item">{item}</li>)}
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Total Favorites: {store.myFavorites.length}</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};