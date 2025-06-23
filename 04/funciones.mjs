import {readFile, writeFile} from 'fs/promises';
import {dirname, join} from 'node:path'
import { fileURLToPath } from 'node:url' 

const carpeta = dirname(fileURLToPath(import.meta.url))
const rutaArchivo = join(carpeta, 'productos.json')

export async function altaProducto(nombre, marca, precio) {
    try{
        // Leer el archivo de productos
        const productos = await readFile(rutaArchivo, 'utf-8')
        // Nuevo
        const producto = {
            nombre,
            marca,
            precio
        }
        // Convertir texto a JSON
        const productosArray = JSON.parse(productos)
        // Agregar producto al array
        productosArray.push(producto)
        await writeFile(rutaArchivo, JSON.stringify(productosArray, null, 2))
    }catch(error) {
        throw error
    }
}


// Middleware
export function verificarDatos(req, res, next) {
    try{
        const { nombre, marca, precio } = req.body;
        if (!nombre || !marca || !precio) {
            return res.status(400).json({ error: 'Faltan datos' });
        }
        next();
    } catch (error) {
        return res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
}