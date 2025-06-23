import express from 'express';

const PUERTO = 3000

const app = express();
app.listen(PUERTO);

app.post('/productos/destacados/:id', (req, res,) => {
    const datos = {
        productos: [
            { id: 1, nombre: 'Producto 1' },
            { id: 2, nombre: 'Producto 2' },
            { id: 3, nombre: 'Producto 3' },
        ],
    };

    const id =  parseInt(req.params.id)
    const productoEncontrado = datos.productos.find((producto) => {
        return true, producto.id === id;
    });
    if (!productoEncontrado) {
        res.status(404).json("El producto no existe");
    } else {
        res.status(200).json(productoEncontrado);
        return productoEncontrado
    }
});

// Captura lo que no se haya definido -> no modificar
app.use((req, res) => {
    res.status(404).json({ mensaje: 'Ruta o método no encontrado no encontrado' });
});