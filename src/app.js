// Importamos Express para crear la aplicación del servidor
const express = require("express");
// Importamos CORS para permitir solicitudes desde otros dominios
const cors = require("cors");

// Creamos una instancia de la aplicación Express
const app = express();
// Middleware para procesar datos en formato JSON en las solicitudes
app.use(express.json());
// Middleware CORS para permitir el acceso a la API desde otros dominios
app.use(cors());

// Importar rutas
app.use("/api/menu", require("./routes/menu")); //Ruta menu
app.use("/api/pedidos", require("./routes/pedidos")); //Ruta pedidos 
app.use("/api/inventario", require("./routes/inventario")); //Ruta inventario
// app.use("/api/auth", require("./routes/auth"));


// Exportamos la aplicación para que pueda ser utilizada en otros archivos
module.exports = app;
