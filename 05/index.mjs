import express from 'express';
import cookieParser from 'cookie-parser';
import {
    autenticarUsuario,
} from './funciones.mjs';

import dotenv from 'dotenv';

dotenv.config();
const PUERTO = process.env.PUERTO || 3001;

const usuarios = [
    { nombre: 'admin1', pass: '123' },
    { nombre: 'admin2', pass: '123' },
    { nombre: 'admin3', pass: '123' },
];

const app = express();
app.listen(PUERTO);

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Ruta logout
app.get('/logout', (req, res) => {
   res.cookie('sessionId', '', {
        maxAge: 0,
    });
    res.redirect('/login');
});

// Ruta autenticacion
app.post('/autenticacion', (req, res) => {
    try{
        const { nombre, pass } = req.body;
        if (usuarioVerificado) {
            return res.redirect('/');
        }
        return res.sendStatus(401);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

// Front login
app.use('/login', express.static('login'));

// Front administracion
app.use(express.static('admin'));
