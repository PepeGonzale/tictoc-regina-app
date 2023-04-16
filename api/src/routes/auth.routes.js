const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

// EndPoint para hacer una prueba
router.get('/test', (req, resp, next) => {
    // [...] Código de ejecución [...]
    console.log("API Auth | Para hacer prueba");

    // Responder a la petición
    resp.status(200).send({
        message: 'Test exitosa!',
        path: '/auth/test',
        status: 200,
        auth_data: req.body
    });
});

// EndPoint para registar un empleado
router.post('/registrar',
    // Utilizar configuración de estrategia 'registrar_empleado'
    // configurado en @/config/auth.js
    passport.authenticate('registrar_empleado', { session: false }),
    async (req, resp, next) => {
        // [...] Código de ejecución [...]

        // Responder a la petición
        resp.json({
            message: 'Registro empleado exitosamente!',
            path: '/auth/registrar',
            status: 200,
            auth_data: req.user
        });
    }
);

module.exports = router;