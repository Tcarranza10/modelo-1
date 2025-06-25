// Desarrollar...
import express from "express"
import { altaProducto, verificarDatos } from "./funciones.mjs";
import { join } from "node:path";

const app = express()
const puerto = 3300

app.use(express.static("web"))

// Middleware para leer JSON del body
app.use(express.json());

// Ruta POST con middleware verificarDatos
app.post("/productos/alta", verificarDatos, async (req, res) => {
    try {
        const { nombre, marca, precio } = req.body;
        await altaProducto(nombre, marca, precio);
        res.status(201).json({ mensaje: "Producto guardado correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al guardar el producto" });
    }
});


app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`); 
});