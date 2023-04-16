const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const EmpleadoModel = require('../models/Empleado');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

// Configurando una estrategia de autenticación de Passport.js
// llamada `default` que sirve como generar y verificar token
passport.use(
    // Crear un estrategia para verificar y generar token
    new JWTstrategy({
        secretOrKey: process.env.ENV_TOKEN_SECRET_OR_KEY || 'u$W{X:s@vj%6h}x',
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    },
        // Recibir un token como parametro para validar o generar
        async (token, done) => {
            console.log("localStrategy : default");

            try {
                // Retornar los datos del empleado
                // usando del objeto user
                return done(null, token.user);
            } catch (error) {
                done(error);
            }
        })
);

// Configurando una estrategia de autenticación de Passport.js
// llamada `registrar_empleado` que sirve como singup
passport.use('registrar_empleado',
    // Especifiar a la estrategia cual es el campo para correo y password 
    new localStrategy({
        usernameField: 'correo',
        passwordField: 'contrasenha',
        passReqToCallback: true,
        session: false
    },
        // Recibir parametros nombres, correo, contrasenha en el body de la petición
        async (req, correo, contrasenha, done) => {
            console.log("localStrategy : registrar_empleado");

            try {
                // Desestructurar el cuerpo de la petición
                const { nombres } = req.body;

                // Crear un modelo de Empleado
                const nuevoEmpleado = new EmpleadoModel({
                    nombres,
                    correo,
                    contrasenha
                });

                // Encriptar la contraseña
                await nuevoEmpleado.encrypContrasenha();

                // Guardar el empleado en mongoDB
                await nuevoEmpleado.save();

                // Retornar los datos del empleado
                // usando del objeto user
                return done(null, { user: nuevoEmpleado });
            } catch (error) {
                done(error);
            }
        })
);

// Configurando una estrategia de autenticación de Passport.js
// llamada `ingresar_empleado` que sirve como login
passport.use('ingresar_empleado',
    // Especifiar a la estrategia cual es el campo para correo y password 
    new localStrategy({
        usernameField: 'correo',
        passwordField: 'contrasenha',
    },
        // Recibir parametros nombres, correo, contrasenha en el body de la petición
        async (correo, contrasenha, done) => {
            console.log("localStrategy : ingresar_empleado");

            try {
                // Buscar un empleado con el correo
                const empleado = await EmpleadoModel.findOne({ correo });

                // Si el empleado no existe, retorna un error
                if (!empleado)
                    return done(null, false, { message: `Empleado con correo ${correo} no existe` });

                // Verificar la contraseña encriptada
                const validar = await empleado.matchContrasenha(contrasenha);

                // Si la contraseña no coincide, retorna un error
                if (!validar)
                    return done(null, false, { message: `La contraseña ${contrasenha} es incorrecto.` });

                // Retorna los datos del empleado logeado
                return done(null, { user: empleado }, { message: 'Empleado ingreso exitosamente.' });

            } catch (error) {
                return done(error);
            }
        })
)


// Configurando una estrategia de autenticación de Passport.js
// llamada `ingresar_empleado` que sirve como logout
passport.use('salir_empleado',
    new localStrategy({
        usernameField: 'correo',
        passwordField: 'contrasenha'
    },
        function (correo, contrasenha, done) {
            // Esta estrategia no requiere autenticación,
            // por lo que simplemente llamamos a done() sin argumentos.
            return done();
        })
);