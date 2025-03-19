const express = require("express");
const router = express.Router();
// Importamos el controlador del menú, que contiene la lógica de negocio
const menuController = require("../controllers/menuController");

// Definimos una ruta GET para obtener la lista de productos del menú
router.get("/", menuController.getMenu);
// Definimos una ruta POST para agregar un nuevo producto al menú
router.post("/", menuController.addMenuItem);

// Exportamos el enrutador para que pueda ser utilizado en `app.js`
module.exports = router;
