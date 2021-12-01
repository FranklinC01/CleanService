const mongoose = require('mongoose');
require('dotenv').config({ path: '../variable.env'})

const conectarDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://franklin:0079@cluster0.js54z.mongodb.net/CleanService')
        console.log("Base de datos conectada")
    }catch (error){
        console.log("error en la conexion")
        process.exit(1);    
    }
}

module.exports = conectarDB