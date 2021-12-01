const usuariosModel = require("../models/usuariosModel");

exports.crearUsuario = async (req,res) => {

    try {
        let usuario;
        usuario = new usuariosModel(req.body);
        await usuario.save();
        res.send(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hay un error');
    }
}

exports.obtenerUsuario = async (req,res) => {
    try {
        const usuarios = await usuariosModel.find();
        res.json(usuarios)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hay un error');
    }
}

exports.obtenerUsuarioId = async (req,res) => {
    try {
        const usuarios = await usuariosModel.findById(req.params.id);
        res.json(usuarios)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hay un error');
    }
}

exports.actualizarUsuario = async (req,res) => {
    try {
        const {cedula, nombre, correo, celular, ciudad} = req.body;
        let usuario = await usuariosModel.findById(req.params.id);
        if (!usuario){
            res.status(404).json({msg:'no existe el usuario'})
        }
        usuario.cedula = cedula;
        usuario.nombre = nombre;
        usuario.correo = correo;
        usuario.celular = celular;
        usuario.ciudad = ciudad;

        usuario = await usuariosModel.findOneAndUpdate({_id: req.params.id}, usuario, {new:true})
        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hay un error');
    }
}

exports.eliminarUsuario = async (req,res) => {

    try {
        let usuario = await usuariosModel.findById(req.params.id);
        if (!usuario){
            res.status(404).json({msg:'no existe el usuario'})
        }
        await usuariosModel.findByIdAndDelete({_id: req.params.id});
        res.json({msg: 'El usuario ha sido eliminado'});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hay un error');
    }
}