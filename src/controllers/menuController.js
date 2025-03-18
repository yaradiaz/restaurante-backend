let menu = [
    { id: 1, nombre: "Pizza" , precio: 10.500 },
    { id: 2, nombre: "Hamburguesa" , precio: 8.000 },
    { id: 3, nombre: "Pasta" , precio: 12.000 },
    { id: 4, nombre: "pollo" , precio: 4.500 }
  ];
  
exports.getMenu = (req, res) => res.json(menu);

exports.addMenuItem = (req, res) => {
  const nuevoProducto = req.body;
  menu.push(nuevoProducto);
  res.status(201).json({ mensaje: "Producto agregado" });
};
