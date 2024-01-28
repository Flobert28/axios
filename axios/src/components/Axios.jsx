import React, { useState, useEffect } from "react";
import axios from "axios";

const Axios = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon-species")
      .then(response => {
        console.log(response.data);
        setPokemonList(response.data.results);
      })
      .then(null, error => {
        console.error('Error  Pokemon list:', error);
      });
  }, []);

  return (
    <div>
      <ul>
        {pokemonList.map(pokemon => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Axios;
