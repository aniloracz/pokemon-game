import "./App.css";
import PokemonCard from "./components/PokemonCard";
import Pokemonform from "./components/PokemonForm";
import { useState } from "react";
import axios from "axios";

function App() {
  const [pokemonList, setPokemonList] = useState([
    { name: "Pikachu", type: "Electric", id: "25" },
    { name: "Dragonair", type: "Dragon", id: "148" },
    { name: "Squirtle", type: "Water", id: "7" },
    { name: "Bulbasaur", type: "Grass, Poison", id: "1" },
  ]);

  const addPokemon = (name, type, id) => {
    const newPokemon = {
      name: name,
      type: type,
      id: id,
    };

    setPokemonList([...pokemonList, newPokemon]);
  };

  const traerPokemon = () => {
    const pokeid = Math.floor(Math.random() * 890);
    console.log(pokeid);
    const api = axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeid}`)
      .then((response) => {
        const id = response.data.id;
        const name = response.data.name;
        let types = "";
        response.data.types.map((item) => (types += item.type.name + ", "));

        addPokemon(name, types, id);
      });
  };

  return (
    <div className="App">
      <Pokemonform addPokemon={addPokemon} />

      {pokemonList.map((unPokemon, index) => (
        <PokemonCard
          name={unPokemon.name}
          type={unPokemon.type}
          id={unPokemon.id}
          position={index}
        />
      ))}

      <button onClick={traerPokemon}>Traer Pokemn</button>
    </div>
  );
}

export default App;
