import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetView = props => {
	const { store, actions } = useContext(Context);
    const [planet, setplanet] = useState({})
	const params = useParams();
    useEffect(()=>{
        fetch("https://www.swapi.tech/api/planets/" + params.planet_id)
					.then( (response)=> response.json() )
					.then( (data)=> setplanet(data.result.properties) )
    },[])
	return (
		<div className="jumbotron bg-dark text-warning p-4">
			<h1 className="display-4">{planet.name}</h1>
			<img className="card-img-top border border-dark border-4 mt-1" src="https://cdn.shopify.com/s/files/1/0279/0234/5304/products/kfcwnjk8nplyqgigl9a9.jpg?v=1673425931&width=1946" alt="Card image cap"/>
			<hr className="my-4" />
			<p>Name: <span className="text-white">{planet.name}</span></p>
            <p>Diameter: <span className="text-white">{planet.diameter}</span></p>
            <p>Rotation_period: <span className="text-white">{planet.rotation_period}</span></p>
            <p>Climate: <span className="text-white">{planet.climate}</span></p>
            <p>Terrain: <span className="text-white">{planet.terrain}</span></p>
			<p>ID: <span className="text-white">{params.planet_id}</span></p>
            

			<Link to="/">
				<span className="btn btn-dark border border-3 border-warning btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

PlanetView.propTypes = {
	match: PropTypes.object
};
