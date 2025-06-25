// Desarrollar...
import express from "express"
import {leerUsuarios} from "./usuarios.mjs"
const app = express()
const puerto = 4500

app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});

app.get("/usuarios/activos", async (req, res)=> {
    try {
        const usuarios = await leerUsuarios();
        const activos = usuarios.filter(usuario => usuario.activo === true);
        res.status(200).json(activos);
    } catch (error) {
        res.status(500).json({ error: "Error al leer los usuarios" });
    }
})

