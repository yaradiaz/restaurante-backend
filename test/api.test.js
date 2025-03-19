// Importamos Supertest para simular peticiones a la API
const request = require("supertest");

// Importamos la aplicación Express desde `app.js`
const app = require("../src/app");


describe("Pruebas del menú", () => {
  test("Debe obtener la lista de productos", async () => { 
    //Realizamos peticion get al menu
    const response = await request(app).get("/api/menu");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true); //Nos muestra los productos
  });
});

describe("Pruebas de pedidos", () => {
  test("Debe devolver un mensaje de que la ruta de pedidos funciona", async () => {
    //Realizamos peticion get a pedidos
    const response = await request(app).get("/api/pedidos");
    
    // Verificamos que la respuesta sea 200 OK
    expect(response.statusCode).toBe(200);

    // Verificamos que el mensaje devuelto sea el esperado
    expect(response.body).toEqual({ message: "Ruta de pedidos funcionando correctamente" });
  });
});


describe("Pruebas de inventario", () => {
  test("Debe devolver un mensaje de que la ruta de inventario funciona", async () => {
    //Realizamos peticion get a inventario
    const response = await request(app).get("/api/inventario");

    // Verificamos que la respuesta sea 200 OK
    expect(response.statusCode).toBe(200);

    // Verificamos que el mensaje devuelto sea el esperado
    expect(response.body).toEqual({ message: "Ruta de inventario funcionando correctamente" });
  });
});

