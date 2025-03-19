require("dotenv").config();
// Importamos la aplicación Express desde app.js
const app = require("./src/app");
const http = require("http");
const socketIo = require("socket.io");

const server = http.createServer(app);
const io = socketIo(server);

// Configurar eventos de Socket.io
require("./src/sockets/socketHandler")(io);


// Definimos el puerto del servidor, usando el de las variables de entorno o 3000 por defecto
const PORT = process.env.PORT || 3000;
// Iniciamos el servidor y lo ponemos a escuchar en el puerto definido
server.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
