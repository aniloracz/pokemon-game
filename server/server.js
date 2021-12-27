const express = require("express");
const PORT = 5000;
require("./config/mongoose.config")();

const app = express();

app.listen(PORT, () => console.log(`Servidor corriendo en puerto: ${PORT}`));
