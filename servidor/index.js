const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const port = process.env.PORT ||3000;

//creamos servidor

const app = express();

//conectando la bd
conectarDB();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

/*app.get('/',(req, res)=>{
    res.send('Hola Mundo');
})*/

app.use('/api/usuarios', require('./routes/usuarios'));



app.listen(port, () => {
    console.log("server funcionando",port)
})