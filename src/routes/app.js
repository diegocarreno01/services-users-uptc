const express = require("express");
const user = require("../controller/routeUser.js");
const app = express.Router();

//Listar usuarios app movil
app.get("/listUsers", user.listUsers);

//listar usuarios web

// Agregar usuarios
app.post("/addUser", user.addUser);

app.use(express.json());
module.exports = app;
