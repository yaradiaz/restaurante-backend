module.exports = (req, res, next) => {
    const token = req.headers["authorization"];
    if (token !== "fake-jwt-token") {
      return res.status(403).json({ error: "Acceso no autorizado" });
    }
    next();
  };
  