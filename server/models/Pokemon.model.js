const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PokemonSchema = new Schema({
  id: {
    type: Number,
    required: [true, "Id requerido"],
  },
  tipos: {
    type: String,
    required: [true, "Tipos requeridos"],
  },
  nombre: {
    type: String,
    required: [true, "Nombre requerido"],
  },
});

const PokemonModel = model("pokemon", PokemonSchema, "pokemons");

module.exports = { PokemonModel, PokemonSchema };
