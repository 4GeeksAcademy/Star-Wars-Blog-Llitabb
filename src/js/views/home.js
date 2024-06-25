import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import { Vehicle } from "../component/vehicle";
import { Context } from "../store/appContext";
import { Character } from "../component/character";
import { Planets } from "../component/planet";

export const Home = () => {
    const { store, actions } = useContext(Context);
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        actions.loadSomeData();
    }, []);

    return (
        <div>
            <div className="text-center mt-5">
                <h1 className="text-warning bg-black">CHARACTERS</h1>
                <div className="row flex-row flex-nowrap overflow-auto">
                    {store.character.map((item) => (
                        <Character key={item.uid} uid={item.uid} title={item.name} />
                    ))}
                </div>
            </div>
            <div className="text-center mt-5">
                <h1 className="text-warning bg-black">STARSHIPS</h1>
                <div className="row flex-row flex-nowrap overflow-auto">
                    {store.vehicle.map((item) => (
                        <Vehicle key={item.uid} uid={item.uid} title={item.name} />
                    ))}
                </div>
            </div>
            <div className="text-center mt-5">
                <h1 className="text-warning bg-black">PLANETS</h1>
                <div className="row flex-row flex-nowrap overflow-auto">
                    {store.planets.map((item) => (
                        <Planets key={item.uid} uid={item.uid} title={item.name} />
                    ))}
                </div>
            </div>
        </div>
    );
};
