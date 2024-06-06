const express = require("express");

const app = express();
app.use(express.json());
app.listen(80, () => {
  console.log("Servidor iniciado en el puerto 80");
});