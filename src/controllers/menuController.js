// Definimos un array llamado "menu" que contiene una lista de objetos,
// cada uno representando un producto con su ID, nombre y precio.
let menu = [
    { id: 1, nombre: "Pizza" , precio: 10.500 },
    { id: 2, nombre: "Hamburguesa" , precio: 8.000 },
    { id: 3, nombre: "Pasta" , precio: 12.000 },
    { id: 4, nombre: "pollo" , precio: 4.500 }
  ];
  
// Función para obtener el menú completo
// Se exporta para que pueda ser utilizada en otros archivos.
// Cuando se hace una petición GET, se responde con la lista de productos en formato JSON.
exports.getMenu = (req, res) => {
  console.log("Lista de productos enviada:", menu);  // 👈 Agregar un console.log para verificar si hay productos
  res.json(menu);
};

// Función para agregar un nuevo producto al menú
// Se exporta para que pueda ser utilizada en otros archivos.
exports.addMenuItem = (req, res) => {
// Extraemos el nuevo producto del cuerpo de la petición (req.body)
  const nuevoProducto = req.body;
// Agregamos el nuevo producto al array "menu"
  menu.push(nuevoProducto);
// Respondemos con un estado 201 (Created) y un mensaje de confirmación en formato JSON
  res.status(201).json({ mensaje: "Producto agregado" });
};
