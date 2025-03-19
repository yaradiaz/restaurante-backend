// Exportamos una función que recibe un objeto "io" de Socket.io
module.exports = (io) => {
  // Detecta cuando un cliente se conecta al servidor WebSocket
  io.on("connection", (socket) => {
      console.log("Cliente conectado", socket.id); //muestra un mensaje de que el cliente se conecto

      // Enviar un mensaje de bienvenida al cliente conectado
      socket.emit("mensaje", "Bienvenido al servidor WebSocket");

      // Escuchar un evento personalizado desde el cliente
      socket.on("nuevoPedido", (pedido) => {
          console.log("Nuevo pedido recibido:", pedido);
          io.emit("pedidoActualizado", pedido); // Notificar a todos los clientes
      });
      //detecta si el cliente se desconecto 
      socket.on("disconnect", () => {
          console.log("Cliente desconectado"); //muestra el mensaje
      });
  });
};
