const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema } = mongoose;

// Crear un modelo 
const EmpleadoSchema = new Schema({
    name: { type: 'String', required: true },
    email: { type: 'String', required: true },
    password: { type: 'String', required: true },
},
    { timestamps: true, versionKey: false });

// Método de el schema para encriptar contraseñas
EmpleadoSchema.methods.encrypPassword = async (password) => {
    const salt = await bcrypt.genSalt(13);
    const hash = bcrypt.hash(password, salt);
    return hash;
};

// Método de el schema para comparar contraseñas
EmpleadoSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('Empleado', EmpleadoSchema);