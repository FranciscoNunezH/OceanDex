"use strict";

var express = require("express");
var dataController = require("../controllers/data.controller");

var router = express.Router();

router.get("/consultar", dataController.getData);
router.get("/consultar/:nombreCientifico", dataController.getDataEspecifica);
router.get("/consultar/img/:nombreCientifico", dataController.getDataImagen);
router.post("/guardar", dataController.setData);
router.post("/guardar/ejemplar", dataController.setDataEjemplares);

module.exports = router;
