import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router";

const Info = () => {

    const { option, id } = useParams();
    let [details, setDetails] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${option}/${id}`)
            .then((response) => {
                setDetails(response.data)
            })
            .catch(err => {
                console.log("These aren't the droids you're looking for")
            })

    }, [option, id])

    return (
        <div>
            {
                option == "people" ?
                    <>
                        <h1>{details.name}</h1>
                        <p>Height: {details.height}cm</p>
                        <p>Mass: {details.mass}</p>
                        <p>Hair Color: {details.hair_color}</p>
                        <p>Skin Color: {details.skin_color}</p>
                    </> : option == "planets" ?
                    <>
                        <h1>{details.name}</h1>
                        <p>Diameter: {details.diameter}</p>
                        <p>Climate: {details.climate}</p>
                        <p>Terrain: {details.terrain}</p>
                        <p>Population: {details.population}</p>
                    </> : option == "films"?
                    <>
                        <h1>{details.title}</h1>
                        <p>Director: {details.director}</p>
                        <p>Producer: {details.producer}</p>
                        <p>Episode: {details.episode_id}</p>
                        <p>Release Date: {details.release_date}</p>
                    </> : option == "species"?
                    <>
                        <h1>{details.name}</h1>
                        <p>Classification: {details.classification}</p>
                        <p>Designation: {details.designation}</p>
                        <p>Average height: {details.average_height}</p>
                        <p>Language: {details.language}</p>
                    </> : option == "vehicles"?
                    <>
                        <h1>{details.name}</h1>
                        <p>Model: {details.model}</p>
                        <p>Manufacturer: {details.manufacturer}</p>
                        <p>Length: {details.length}</p>
                        <p>Crew: {details.crew}</p>
                    </> : option == "starships"?
                    <>
                        <h1>{details.name}</h1>
                        <p>Model: {details.model}</p>
                        <p>Manufacturer: {details.manufacturer}</p>
                        <p>Length: {details.length}</p>
                        <p>Crew: {details.crew}</p>
                    </> : null
            }
        </div>
    );
};

export default Info;