import React from "react";
import styles from './PokemonCard.module.css';

const Pokemoncard = ({ name, type, id, position }) => {
  // const []
  return (
    <div className={styles.container}>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
      <h2 >name: {name}</h2>
      <p>type: {type}</p>
      <p>id: {id}</p>
      <p>este pokemon esta en la posición: {position} del array</p>
    </div>
  );
};

export default Pokemoncard;
