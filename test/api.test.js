/*const request = require("supertest");
const app = require("../src/app");

describe("Pruebas del menú", () => {
  test("Debe obtener la lista de productos", async () => {
    const response = await request(app).get("/api/menu");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
*/
const request = require("supertest");
const app = require("../src/app");

describe("Pruebas del menú", () => {
  test("Debe obtener la lista de productos", async () => {
    const response = await request(app).get("/api/menu");

    // Imprimir la respuesta en la consola para ver qué devuelve la API
    console.log("Respuesta del servidor:", response.body);

    // Verifica que la respuesta sea un array
    expect(Array.isArray(response.body)).toBe(true);

    // Verifica que el array no esté vacío
    expect(response.body.length).toBeGreaterThan(0);

    // Verifica que al menos un objeto tenga las propiedades esperadas
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("nombre");
    expect(response.body[0]).toHaveProperty("precio");

    // Verifica que el status code sea 200
    expect(response.statusCode).toBe(200);
  });
});

