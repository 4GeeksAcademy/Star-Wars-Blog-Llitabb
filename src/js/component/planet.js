import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = (props) => {
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false); // Estado para rastrear si el ícono está activado

    const toggleFavorite = () => {
        actions.changeFavorites(props.title);
        setIsFavorite(!isFavorite); // Cambiar el estado cuando se hace clic en el ícono
    };

    return (
        <div className="card bg-secondary mx-3 mb-2" style={{ width: "18rem" }}>
            <img className="card-img-top border border-dark border-4 mt-1" src="https://cdn.shopify.com/s/files/1/0279/0234/5304/products/kfcwnjk8nplyqgigl9a9.jpg?v=1673425931&width=1946" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Planet id. {props.uid}</p>
                <Link className="btn btn-dark border border-warning text-warning mx-2" to={"/planet/" + props.uid}>
                    <span>Info planet</span>
                </Link>
                <i className={"fa-regular fa-star fs-4 btn " + (isFavorite ? "text-warning" : "")} onClick={toggleFavorite}></i> {/* Aplicar la clase text-warning si isFavorite es true */}
            </div>
        </div>
    );
};
