import "./App.css";
import PokemonCard from "./components/PokemonCard";
import Pokemonform from "./components/PokemonForm";
import { useState } from "react";
import axios from "axios";

function App() {
  const [pokemonListJugador1, setPokemonListJugador1] = useState([
    /*{ name: "Pikachu", type: "Electric", id: "25" },
    { name: "Dragonair", type: "Dragon", id: "148" },
    { name: "Squirtle", type: "Water", id: "7" },
    { name: "Bulbasaur", type: "Grass, Poison", id: "1" },*/
  ]);
  const [pokemonListJugador2, setPokemonListJugador2] = useState([]);

  const addPokemon = (name, type, id) => {
    const newPokemon = {
      name: name,
      type: type,
      id: id,
    };

    setPokemonListJugador1([...pokemonListJugador1, newPokemon]);
  };

  /*const traerPokemon = () => {
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
  };*/
  const repartirCartas = () => {
    let pokeIds = [];
    let pokeNuevos = [];
    for (let i = 0; i < 10; i++) {
      pokeIds.push(Math.floor(Math.random() * 890));
    }
    console.log(pokeIds);
    pokeIds.map((pokeId) => {
      console.log(`llamo a ${pokeId}`);
      const api = axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
        .then((response) => {
          const id = response.data.id;
          const name = response.data.name;
          let types = "";
          response.data.types.map((item) => (types += item.type.name + ", "));
          console.log(`llego ${id}`);
          pokeNuevos.push({ name, types, id });
          console.log(
            "ahora tengo " + pokeNuevos.length + " y son estos " + pokeNuevos
          );
          if (pokeNuevos.length == 10) {
            setPokemonListJugador1(pokeNuevos.slice(5, 10));
            setPokemonListJugador2(pokeNuevos.slice(0, 5));
          }
        });
    });

    console.log("este es mi array de pokemones" + pokeNuevos);
  };

  return (
    <div className="App">
            <button onClick={repartirCartas}>Traer Pokemn</button>
      {/*<Pokemonform addPokemon={addPokemon} />*/}
      <div className="JugadorUno">
        <h2>Cartas del jugador 1</h2>
        {pokemonListJugador1.map((unPokemon, index) => (
          <PokemonCard
            name={unPokemon.name}
            type={unPokemon.type}
            id={unPokemon.id}
            position={index}
          />
        ))}
      </div>
      <div className="JugadorDos">
        <h2>Cartas del jugador 2</h2>
        {pokemonListJugador2.map((unPokemon, index) => (
          <PokemonCard
            name={unPokemon.name}
            type={unPokemon.type}
            id={unPokemon.id}
            position={index}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
