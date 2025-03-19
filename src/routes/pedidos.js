const express = require("express");
const router = express.Router();

// Definimos una ruta GET en "/" para verificar que el módulo de pedidos funciona correctamente
router.get("/", (req, res) => {
    res.json({ message: "Ruta de pedidos funcionando correctamente" });
});

module.exports = router;
