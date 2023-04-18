const router = require('express').Router();
const Empleado = require('../models/Empleado');
const jwt = require('jsonwebtoken');
const secret = process.env.ENV_TOKEN_SECRET_OR_KEY || 'u$W{X:s@vj%6h}x'; // Definir el secreto de tu aplicación

// Crear una función middleware para verificar y decodificar 
// el token enviado en el encabezado de la solicitud
const verificarToken = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            path: '/empleado/data',
            status: 'failure',
            _data_empleado: {
                context: 'Sin token.',
                message: 'La petición necesita un token por seguridad.',
            }
        });
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                path: '/empleado/data',
                status: 'failure',
                _data_empleado: {
                    context: 'Token no valido.',
                    message: 'El token proporcionado no es correcto.'
                }
            });
        }

        req.user = decoded; // Agregar el objeto decodificado a la solicitud
        next();
    });
};


// Endpoint para hacer pruebas
router.get(`/test`, (req, resp, next) => {
    resp.status(200).send({
        message: 'Endopint al eschucha !!'
    });
});

// Consultar
router.get(`/data`, verificarToken, async (req, res, next) => {
    try {
        const token_payload = req.user.user;
        const usuario = await Empleado.findById(token_payload._id);

        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        // Verificar si el usuario es el mismo que hizo la solicitud
        if (usuario.contrasenha !== token_payload._pwd) {
            return res.status(401).json({
                path: '/empleado/data',
                status: 'failure',
                _data_empleado: {
                    context: 'Credenciales incorrectos.',
                    message: 'No está autorizado para realizar esta acción'
                }
            });
        }

        res.status(200).json({
            path: '/empleado/data',
            status: 'success',
            _data_empleado: {
                context: 'Credenciales correctos.',
                message: 'Se realizo la petición con autorización, exitosamente.',
                data: usuario
            }
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
});

module.exports = router;