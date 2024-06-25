import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehicleView = props => {
	const { store, actions } = useContext(Context);
    const [starship, setStarship] = useState({})
	const params = useParams();
    useEffect(()=>{
        console.log("se cargo vista vehicle")
        fetch("https://www.swapi.tech/api/starships/" + params.Vehicle_id)
					.then( (response)=> response.json() )
					.then( (data)=> setStarship(data.result.properties) )
    },[])
	console.log(params)
	return (
		<div className="jumbotron bg-dark text-warning p-4">
			<h1 className="display-4">{starship.name}</h1>
			<img className="card-img-top border border-dark border-4 mt-1" src="https://cdn.shopify.com/s/files/1/0279/0234/5304/products/kfcwnjk8nplyqgigl9a9.jpg?v=1673425931&width=1946" alt="Card image cap"/>
			<hr className="my-4" />
			<p>Name: <span className="text-white">{starship.name}</span></p>
            <p>Model: <span className="text-white">{starship.model}</span></p>
            <p>Manufacturer: <span className="text-white">{starship.manufacturer}</span></p>
            <p>Crew: <span className="text-white">{starship.crew}</span></p>
			<p>Passengers: <span className="text-white">{starship.passengers}</span></p>
			<p>ID: <span className="text-white">{params.Vehicle_id}</span></p>
			
			<Link to="/">
				<span className="btn btn-dark border border-3 border-warning btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

VehicleView.propTypes = {
	match: PropTypes.object
};
