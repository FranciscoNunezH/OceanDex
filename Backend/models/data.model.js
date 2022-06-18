"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var dataSchema = Schema({
    "Nombre científico": {
        type: String,
        trim: true,
    },
    "Nombres comunes": {
        type: String,
        trim: true,
    },
    Reino: {
        type: String,
        trim: true,
    },
    división: {
        type: String,
        trim: true,
    },
    phylum: {
        type: String,
        trim: true,
    },
    clase: {
        type: String,
        trim: true,
    },
    orden: {
        type: String,
        trim: true,
    },
    familia: {
        type: String,
        trim: true,
    },
    género: {
        type: String,
        trim: true,
    },
    especie: {
        type: String,
        trim: true,
    },
    "Norma Oficial Mexicana NOM-059": {
        type: String,
        trim: true,
    },
    "Observaciones NOM 059": {
        type: String,
        trim: true,
    },
    "Unión Internacional para la Conservación de la Naturaleza (IUCN)": {
        type: String,
        trim: true,
    },
    "Observaciones IUCN": {
        type: String,
        trim: true,
    },
    "Comercio Internacional (CITES)": {
        type: String,
        trim: true,
    },
    "Observaciones CITES": {
        type: String,
        trim: true,
    },
    "Tipo distribución": {
        type: String,
        trim: true,
    },
    Ambiente: {
        type: String,
        trim: true,
    },
    "Número de registros": {
        type: Number,
        trim: true,
    },
    "Identificador único": {
        type: Number,
        trim: true,
    },
    "Categoria taxonómica": {
        type: String,
        trim: true,
    },
    Estatus: {
        type: String,
        trim: true,
    },
    "URL Enciclovida": {
        type: String,
        trim: true,
    },
    Bibliografía: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model("dato", dataSchema);
