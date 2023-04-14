const mongoose = require('mongoose');

const nombres = {type: 'String', require: true};

const apellidos = {type: 'String', require: true};

const departamento = {type: 'String', require: true};

const numEmpleado = {type: 'String', require: true};

const correo = {type: 'String', require: true};

const contrasenha = {type: 'String', require: true};

// Crear modelo
const SchemaUsuario = mongoose.Schema(
    {nombres, apellidos, departamento, numEmpleado, correo, contrasenha},
    {timestamps: true, versionKey: false}
);

module.exports = mongoose.model("Usuario", SchemaUsuario);