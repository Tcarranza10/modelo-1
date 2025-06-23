import express from 'express';

const PUERTO = 0

const app = express();
app.listen(PUERTO);

app.get('/productos', (req, res) => {
    const datos = {
        productos: [
            { id: 1, nombre: 'Producto 1' },
            { id: 2, nombre: 'Producto 2' },
            { id: 3, nombre: 'Producto 3' },
        ],
    };
    const productoEncontrado = datos.productos.find((producto) => {
        return true
    });
    if (!productoEncontrado) {
        res.status(500).json();
    } else {
        res.status(204).json();
    }
});

// Captura lo que no se haya definido -> no modificar
app.use((req, res) => {
    res.status(404).json({ mensaje: 'Ruta o método no encontrado no encontrado' });
});