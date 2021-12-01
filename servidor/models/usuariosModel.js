const mongoose = require('mongoose');
const Usuarioschema = mongoose.Schema({

    cedula: {
        type:Number,
        require: true
    },

    nombre: {
        type:String,
        require: true
    },

    correo: {
        type:String,
        require:true
    },

    celular: {
        type:Number,
        require:true
    },

    ciudad: {
        type:String,
        require:true
    }
});

module.exports = mongoose.model('usuariosModel',Usuarioschema);