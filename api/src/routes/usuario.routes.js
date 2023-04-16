const router = require('express').Router();
const Usuario = require('../models/Usuario');

// Crear
router.post(`/`, async (req, resp, next) => {
    try {
        const {nombres, apellidos, departamento, numEmpleado, correo, contrasenha} = req.body;

        const mascota = new Usuario({
            nombres, apellidos, departamento, numEmpleado, correo, contrasenha
        });

        const data = await mascota.save();
        
        resp.status(200).json({status:200, message:'Usuario registrada', data: data});
    } catch (error) {
        console.log(error);
        next(error);
    }
});

// Eliminar
router.delete(`/:_id`, async (req, resp, next) => {
    try {
        const _id = req.params._id;

        const data = await Usuario.findByIdAndDelete(_id);

        resp.send({status:200, message:'Usuario eliminada', data: data});
    } catch (error) {
        console.log(error);
        next(error);
    }
});

// Actualizar
router.put(`/:_id`, async (req, resp, next) => {
    try {
        const _id = req.params._id;
        const {nombres, apellidos, departamento, numEmpleado, correo, contrasenha} = req.body;

        const data = await Usuario.findByIdAndUpdate(_id,{
            nombres, apellidos, departamento, numEmpleado, correo, contrasenha
        });

        resp.send({status:200, message:'Usuario modificada', data: data});
    } catch (error) {
        console.log(error);
        next(error);
    }
});

// Listar
router.get(`/`, async (req, resp, next) => {
    try {
        const data = await Usuario.find();

        resp.send({status:200, message:'Listar mascota', data: data});
    } catch (error) {
        console.log(error);
        next(error);
    }
});

// Consultar
router.get(`/:_id`, async (req, resp, next) => {
    try {
        const _id = req.params._id;
        const data = await Usuario.findById(_id);

        resp.status(200).send({status:200, message:'Usuario obtenida', data: data});
    } catch (error) {
        console.log(error);
        next(error);
    }
});

// Buscar por nombres
router.get(`/s/nombres/:nombres`, async (req, resp, next) => {
    try {
        const nombres = req.params.nombres;
        const data = await Usuario.find({nombres: new RegExp(nombres, 'i')}).exec();

        resp.status(200).send({status:200, message:'Usuario obtenida', data: data});
    } catch (error) {
        console.log(error);
        next(error);
    }
});

// Buscar por apellidos
router.get(`/s/apellidos/:apellidos`, async (req, resp, next) => {
    try {
        const apellidos = req.params.apellidos;
        const data = await Usuario.find({apellidos: new RegExp(apellidos, 'i')}).exec();

        resp.status(200).send({status:200, message:'Usuario obtenida', data: data});
    } catch (error) {
        console.log(error);
        next(error);
    }
});

// Buscar por no. empleado
router.get(`/s/numEmpleado/:numEmpleado`, async (req, resp, next) => {
    try {
        const numEmpleado = req.params.numEmpleado;
        const data = await Usuario.findOne({numEmpleado: numEmpleado}).exec();

        resp.status(200).send({status:200, message:'Usuario obtenida', data: data});
    } catch (error) {
        console.log(error);
        next(error);
    }
});

module.exports = router;