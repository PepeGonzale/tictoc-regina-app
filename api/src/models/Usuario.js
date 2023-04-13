const mongoose = require('mongoose');

const nombres = {type: 'String', require: true};

const apellidos = {type: 'String', require: true};

const edad = {type: 'Number', require: true};

// Crear un objetos de todas las enfermedades
/* const SchemaEnfermedades = mongoose.Schema({ 
    id: {type: 'Number', require: false},
    enfermedad: {type: 'String', require: false}
},{_id:false});

const enfermedades = {type: [SchemaEnfermedades], require: false, default: undefined} 
*/

// const enfermedades = [{type: 'String', require: false}];

// Crear modelo
const SchemaUsuario = mongoose.Schema(
    {nombres, apellidos, edad}, 
    {timestamps: true, versionKey: false}
);

module.exports = mongoose.model("Usuario", SchemaUsuario);