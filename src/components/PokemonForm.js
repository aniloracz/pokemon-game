import React, { useState } from "react";

const Pokemonform = ({ addPokemon }) => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonId, setPokemonId] = useState("");

  const clickGuardar = (e) => {
    e.preventDefault();
    addPokemon(pokemonName, pokemonType, pokemonId);
  };
  return (
    <form onSubmit={clickGuardar}>
      <label htmlFor="pokemonName">Ingrese nombre pokemon:</label>
      <input
        type="text"
        id="pokemonName"
        name="pokemonName"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />

      <label htmlFor="pokemonType">Ingrese tipo(s) del pokemon:</label>
      <input
        type="text"
        id="pokemonType"
        name="pokemonType"
        value={pokemonType}
        onChange={(e) => setPokemonType(e.target.value)}
      />

      <label htmlFor="pokemonId">Ingrese id del pokemon:</label>
      <input
        type="text"
        id="pokemonId"
        name="pokemonId"
        value={pokemonId}
        onChange={(e) => setPokemonId(e.target.value)}
      />

      <button>Agregar Pokemon a la lista</button>
    </form>
  );
};

export default Pokemonform;
