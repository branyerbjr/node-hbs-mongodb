var mongoose = require('mongoose');
var Empleado = require('../models/Empleado');

var empleadoController = {};

empleadoController.list = function (req, res) {
    Empleado.find({}).exec(function (err, empleados) {
        if (err) {
            console.log('Error: ', err);
            return;
        }
        console.log("Lista de Empleados");
        res.render('../views/empleado/index', { empleados: empleados, titulo: 'Empleados' });
    });
};

empleadoController.show = function (req, res) {
    Empleado.findOne({ _id: req.params.id }).exec(function (err, empleado) {
        if (err) {
            console.log('Error: ', err);
            return;
        }
        res.render('../views/empleado/show', { empleado: empleado });
    });
};

empleadoController.create = function (req, res) {
    res.render('../views/empleado/create');
};

empleadoController.save = function (req, res) {
    var empleado = new Empleado(req.body);

    empleado.save(function (err) {
        if (err) {
            console.log('Error: ', err);
            return;
        }
        console.log("Empleado creado exitosamente. :)");
        res.redirect("/empleados/show/" + empleado._id);
    });
};

empleadoController.edit = function (req, res) {
    Empleado.findOne({ _id: req.params.id }).exec(function (err, empleado) {
        if (err) {
            console.log("Error:", err);
            return;
        }
        res.render("../views/empleado/edit", { empleado: empleado });
    });
};

empleadoController.update = function (req, res) {
    Empleado.findByIdAndUpdate(req.params.id, {
        $set: {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            estado: req.body.estado
        }
    }, { new: true }, function (err, empleado) {
        if (err) {
            console.log('Error: ', err);
            res.render('../views/empleado/edit', { empleado: req.body });
        }
        console.log(empleado);
        res.redirect('/empleados/show/' + empleado._id);
    });
};

empleadoController.delete = function (req, res) {
    Empleado.remove({ _id: req.params.id }, function (err) {
        if (err) {
            console.log('Error: ', err);
            return;
        }
        console.log("Empleado eliminado!");
        res.redirect("/empleados");
    });
};

module.exports = empleadoController;
