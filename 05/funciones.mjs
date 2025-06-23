export function crearCookie(res) {
    res.cookie('sessionId', '123456', {
        maxAge: 3600000,
        httpOnly: true, 
        secure: true,
        sameSite: 'strict'
    }); 
}
export function verificarCookie(req, res, next) {
    try {
        const { sessionId } = req.cookies;
        if (sessionId && sessionId === '123456') {
            next();
        }else{
            return res.redirect('/login');
        }
    } catch (error) {
        console.log(error);
        return res
            .redirect('/login')
    }
}
export function autenticarUsuario(nombre, pass, usuarios) {
    const usuarioEncontrado = usuarios.find(
        (usuario) => usuario.nombre === nombre && usuario.pass === pass
    );
    return usuarioEncontrado;
}

export function verificarDatosUsuario(req, res, next) {
    try{
        const { nombre, pass } = req.body;
        if (!nombre || !pass) {
            return res.sendStatus(400);
        }
        next();
    } catch (error) {
        return res.sendStatus(400);
    }
}
