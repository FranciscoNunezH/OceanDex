"use strict";

const mongoose = require("mongoose");
const globalVar = require("./global");
const app = require("./app");
const connectionString = `mongodb+srv://${globalVar.user}:${globalVar.password}@cluster0.ylyl9.mongodb.net/OceanDexDB?retryWrites=true&w=majority`;

mongoose
    .connect(connectionString)
    .then(() => {
        console.log(
            "Coneccion a la base de datos OceanDexDB establecida satisfactoriamente"
        );
        app.listen(globalVar.port, () => {
            console.log(
                `Servidor corriendo correctamente en la url: localhost:${globalVar.port}`
            );
        });
    })
    .catch((err) => console.log(err));
