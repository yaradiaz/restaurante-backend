// Exportamos un middleware de autenticación para validar el token de autorización.
module.exports = (req, res, next) => {
    // Extraemos el token del encabezado de la solicitud HTTP.
    const token = req.headers["authorization"];
    // Verificamos si el token es el correcto.
    // En este caso, se compara con un valor fijo "fake-jwt-token" (esto es solo un ejemplo).
    if (token !== "fake-jwt-token") {
    // Si el token no coincide, se responde con un código de estado 403 (Forbidden)
    // y un mensaje indicando que el acceso no está autorizado.
      return res.status(403).json({ error: "Acceso no autorizado" });
    }
    // Si el token es válido, pasamos al siguiente middleware o controlador de la ruta.
    next();
  };
  