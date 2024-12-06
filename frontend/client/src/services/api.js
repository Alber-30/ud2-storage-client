import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", // Dirección de la API del backend
  headers: {
    "Content-Type": "application/json", // Tipo de contenido de las solicitudes
  },
});

export default {
  // Rutas para "Hello"
  getHello() {
    return api.get("hello"); // Llamada GET a /api/hello
  },
  getHelloFile(filename) {
    return api.get(`hello/${filename}`); // Llamada GET a /api/hello/{filename}
  },
  postHello(data) {
    return api.post("hello", data); // Llamada POST a /api/hello con datos
  },
  putHello(filename, data) {
    return api.put(`hello/${filename}`, data); // Llamada PUT a /api/hello/{filename} con datos
  },
  deleteHello(filename) {
    return api.delete(`hello/${filename}`); // Llamada DELETE a /api/hello/{filename}
  },

  // Rutas para "JSON"
  getJson() {
    return api.get("json"); // Llamada GET a /api/json
  },
  getJsonFile(filename) {
    return api.get(`json/${filename}`); // Llamada GET a /api/json/{filename}
  },
  postJson(data) {
    return api.post("json", data); // Llamada POST a /api/json con datos
  },
  putJson(filename, data) {
    return api.put(`json/${filename}`, data); // Llamada PUT a /api/json/{filename} con datos
  },
  deleteJson(filename) {
    return api.delete(`json/${filename}`); // Llamada DELETE a /api/json/{filename}
  },

  // Rutas para "CSV"
  getCsv() {
    return api.get("csv"); // Llamada GET a /api/csv
  },
  getCsvFile(filename) {
    return api.get(`csv/${filename}`); // Llamada GET a /api/csv/{filename}
  },
  postCsv(data) {
    return api.post("csv", data); // Llamada POST a /api/csv con datos
  },
  putCsv(filename, data) {
    return api.put(`csv/${filename}`, data); // Llamada PUT a /api/csv/{filename} con datos
  },
  deleteCsv(filename) {
    return api.delete(`csv/${filename}`); // Llamada DELETE a /api/csv/{filename}
  },
};
