require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const _connect = require('./database');
const usuarioRouters = require('./routes/usuario.routes');
const authRouters = require('./routes/auth.routes');
const empleadoRouters = require('./routes/empleado.routes');
const methodOverride = require('method-override');
const cors = require('cors');
const app = express();
const passport = require('passport');

// Enlace para consumir api
const BASE_URL_API = '/api/v1/tictoc-clubregina';

var corsOptions = {
    origin: process.env.API_CORS_ORIGIN || "http://localhost:3000",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

require('./config/auth');

// Establecer puerto
app.set('port', process.env.PORT || process.env.API_PORT || 3000);

// Establecer conexión a la base de datos
_connect();

app.use(methodOverride('_method'));

app.use(morgan('dev'));

app.use(express.json());

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false}));

// Plug in the JWT strategy as a middleware so only verified users can access this route.
app.use(`${BASE_URL_API}/empleado`, passport.authenticate('jwt', { session: false }), empleadoRouters);

app.use(`${BASE_URL_API}/auth`, authRouters);

app.use(`${BASE_URL_API}/usuario`,usuarioRouters);

// * Aplicación
const server = app.listen(app.get('port'), () => {
    const { address, port } = server.address();
    const ip = address === '::' ? 'localhost' : address;
    const protocol = 'http';
    const url = `${protocol}://${ip}:${port}`;

    console.log(`Servidor corriendo en ${url}`);
});
