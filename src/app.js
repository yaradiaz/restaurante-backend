// Importamos Express para crear la aplicación del servidor
const express = require("express");
// Importamos CORS para permitir solicitudes desde otros dominios
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Importar rutas
app.use("/api/menu", require("./routes/menu"));
app.use("/api/pedidos", require("./routes/pedidos"));
app.use("/api/inventario", require("./routes/inventario"));
// app.use("/api/auth", require("./routes/auth"));

module.exports = app;
