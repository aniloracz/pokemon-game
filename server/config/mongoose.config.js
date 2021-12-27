const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://waldo-dev:pordouglas25@cluster0.ash1q.mongodb.net/pokemon-game?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("2/2 Conectado a Mongo");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
