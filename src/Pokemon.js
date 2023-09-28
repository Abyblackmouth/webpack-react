import React from "react";

export default function Pokemon(props) {

    return(
        <div className="Episode">
            <h1>Pokemon</h1>
            <p>Numero: {props.id}</p>
            <p>Name:{props.name}</p>
            <img src={props.sprite} alt={props.name} width="200px" />
            <p>Tipo: {props.type}</p>
        </div>
    )
}