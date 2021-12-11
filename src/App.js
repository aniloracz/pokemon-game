import "./App.css";
import PokemonCard from "./components/PokemonCard";
import Pokemonform from "./components/PokemonForm";

function App() {
  const pokemonList = [
    { name: "Pikachu", type: "Electric", id: "25" },
    { name: "Dragonair", type: "Dragon", id: "148" },
    { name: "Squirtle", type: "Water", id: "7" },
    { name: "Bulbasaur", type: "Grass, Poison", id: "1" },
  ];

  const addPokemon = (name, type, id) => {
    const newPokemon = {
      name: name,
      type: type,
      id: id,
    };
    pokemonList.push(newPokemon);
    console.log(name);
    console.log(type);
    console.log(id);
    console.log(pokemonList);
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
    </div>
  );
}

export default App;
