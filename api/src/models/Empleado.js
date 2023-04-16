const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

// Crear un modelo 
const EmpleadoSchema = new Schema({
    nombres: { type: 'String', required: true },
    numero_colaborador: { type: 'String', required: true },
    contrasenha: { type: 'String', required: true },
},
    { timestamps: true, versionKey: false });

// Método de el schema para encriptar contraseñas
EmpleadoSchema.methods.encrypContrasenha = async function () {
    const salt = await bcrypt.genSalt(13);
    this.contrasenha = await bcrypt.hash(this.contrasenha, salt);
};

// Método de el schema para comparar contraseñas
EmpleadoSchema.methods.matchContrasenha = async function (contrasenha) {
    return await bcrypt.compare(contrasenha, this.contrasenha);
};

module.exports = mongoose.model('Empleado', EmpleadoSchema);