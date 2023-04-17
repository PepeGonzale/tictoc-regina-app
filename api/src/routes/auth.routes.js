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

// EndPoint para ingresar un empleado
router.post('/ingresar',
    async (req, resp, next) => {
        // [...] Código de ejecución [...]

        // Utilizar configuración de estrategia 'ingresar_empleado'
        // configurado en @/config/auth.js
        passport.authenticate('ingresar_empleado', { session: false },
            async (err, user, info) => {
                // [...] Código de ejecución [...]

                try {
                    const message = info.message;

                    // Si ingresar_empleado devuelve un error y un user vacio
                    if (err || !user) {
                        // retorna un error
                        const error = new Error('Hubo un error en la autenticacion.');
                        //return next(error);
                        return resp.json({
                            path: '/auth/ingresar',
                            status: 'failure',
                            error: error.message,
                            message,
                        });
                    }

                    // De lo contrario se hace login y se genera un token
                    req.login(
                        user,
                        { session: false },
                        async (error) => {
                            if (error) return next(error);

                            const body = { _id: user._id, numero_colaborador: user.numero_colaborador };
                            const token = jwt.sign({ user: body }, process.env.ENV_TOKEN_SECRET_OR_KEY || 'u$W{X:s@vj%6h}x');

                            // retorna token
                            return resp.json({
                                path: '/auth/ingresar',
                                status: 'success',
                                token,
                                message,
                            });
                        }
                    );

                } catch (error) {
                    return next(error);
                }

            }
        )(req, resp, next);
    }
);

// Ruta de logout
router.post('/salir',
    passport.authenticate('salir_empleado', { session: false }),
    function (req, res) {
        // Cerrar sesión del usuario actual
        req.logout();
        // Respondemos con un mensaje de éxito
        res.json({ message: 'Logout exitoso' });
    }
);

module.exports = router;