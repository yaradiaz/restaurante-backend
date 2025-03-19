// Importamos Express para manejar rutas
const express = require("express");
// Creamos un enrutador de Express para definir las rutas del inventario
const router = express.Router();
// Definimos una ruta GET en "/" para verificar que el módulo de inventario funciona correctamente
router.get("/", (req, res) => {
    // Respondemos con un mensaje en formato JSON
    res.json({ message: "Ruta de inventario funcionando correctamente" });
});
// Exportamos el enrutador para que pueda ser utilizado en `app.js`
module.exports = router;
