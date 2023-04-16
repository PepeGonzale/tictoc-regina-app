const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const EmpleadoModel = require('../models/Empleado');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

// Configurando una estrategia de autenticación de Passport.js
// llamada `default` 
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
// llamada `registrar_empleado` 
passport.use(
    'registrar_empleado',
    // Especifiar a la estrategia cual es el campo para username y password 
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