import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pokemon from "../Pokemon";


export default function SearchPokemon() {
	const [activePokemon, setActivePokemon] = useState({});

	const { name } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLocaleLowerCase()}`)
      .then((response) => response.json())
      .then((data) => {
        const pokemon = {
          id: data.id,
          name: data.name,
          sprite: data.sprites.front_default,
          type: data.types[0].type.name,
        };
				console.log(pokemon)

        setActivePokemon(pokemon);
      })
      .catch((error) => {
        alert("Pokemon not found");
      });
  }, [name]);

	return(
		<>
			<Pokemon name={activePokemon.name} id={activePokemon.id} sprite={activePokemon.sprite} type={activePokemon.type} />
		</>
	)
}


