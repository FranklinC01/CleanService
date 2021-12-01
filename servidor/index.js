const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");

//creamos servidor

const app = express();

//conectando la bd
conectarDB();
app.use(cors());
app.use(express.json());
app.use('/api/usuarios', require('./routes/usuarios'));

app.listen(4000, () => {
    console.log("server funcionando")
})