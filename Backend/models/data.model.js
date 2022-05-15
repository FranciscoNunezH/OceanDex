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
    Ejemplares: [
        {
            idejemplar: {
                type: String,
                trim: true,
            },
            idnombrecatvalidoorig: {
                type: String,
                trim: true,
            },
            especievalidabusqueda: {
                type: String,
                trim: true,
            },
            comentarioscatvalido: {
                type: String,
                trim: true,
            },
            entid: {
                type: Number,
                trim: true,
            },
            munid: {
                type: Number,
                trim: true,
            },
            anpid: {
                type: Number,
                trim: true,
            },
            ecorid: {
                type: Number,
                trim: true,
            },
            latitud: {
                type: Number,
                trim: true,
            },
            longitud: {
                type: Number,
                trim: true,
            },
            localidad: {
                type: String,
                trim: true,
            },
            municipiomapa: {
                type: String,
                trim: true,
            },
            estadomapa: {
                type: String,
                trim: true,
            },
            paismapa: {
                type: String,
                trim: true,
            },
            categoriataxonomica: {
                type: String,
                trim: true,
            },
            fechacolecta: {
                type: String,
                trim: true,
            },
            colector: {
                type: String,
                trim: true,
            },
            coleccion: {
                type: String,
                trim: true,
            },
            probablelocnodecampo: {
                type: String,
                trim: true,
            },
            ejemplarfosil: {
                type: String,
                trim: true,
            },
            institucion: {
                type: String,
                trim: true,
            },
            paiscoleccion: {
                type: String,
                trim: true,
            },
            proyecto: {
                type: String,
                trim: true,
            },
            urlproyecto: {
                type: String,
                trim: true,
            },
            urlejemplar: {
                type: String,
                trim: true,
            },
            urlorigen: {
                type: String,
                trim: true,
            },
            id: {
                type: Number,
                trim: true,
            },
            tipocoleccion: {
                type: Number,
                trim: true,
            },
            idnombrecatvalido: {
                type: String,
                trim: true,
            },
        },
    ],
});

module.exports = mongoose.model("dato", dataSchema);
