"use strict";

const dataModel = require("../models/data.model");
const axios = require("axios");
const cheerio = require("cheerio");

var controller = {
    getData: (req, res) => {
        dataModel.find().exec((err, datos) => {
            if (err)
                return res
                    .status(500)
                    .send({ message: "Ha ocurrido un error" });

            if (!datos)
                return res.status(404).send({
                    message: "Ha ocurrido un error: Datos no encontrados",
                });

            let datosLimpios = limpiarDatos(datos);

            return res.status(200).send(datosLimpios);
        });
    },

    getDataEspecifica: (req, res) => {
        let Nombre_cientifico = req.params.nombreCientifico;

        dataModel.findOne({ Nombre_cientifico }).exec((err, dato) => {
            if (err)
                return res
                    .status(500)
                    .send({ message: "Ha ocurrido un error" });

            if (!dato)
                return res.status(404).send({
                    message:
                        "Ha ocurrido un error: Animal de la busqueda no encontrado",
                });

            let datosLimpios = limpiarDatos(dato);

            return res.status(200).send(datosLimpios);
        });
    },

    getDataNombres: (req, res) => {
        dataModel.find().exec((err, datos) => {
            if (err)
                return res
                    .status(500)
                    .send({ message: "Ha ocurrido un error" });

            if (!datos)
                return res.status(404).send({
                    message: "Ha ocurrido un error: Datos no encontrados",
                });

            let datosLimpios = limpiarNombres(datos);

            return res.status(200).send(datosLimpios);
        });
    },

    getDataImagen: (req, res) => {
        let Nombre_cientifico = req.params.nombreCientifico;

        dataModel.findOne({ Nombre_cientifico }).exec((err, dato) => {
            if (err)
                return res
                    .status(500)
                    .send({ message: "Ha ocurrido un error" });

            if (!dato)
                return res.status(404).send({
                    message:
                        "Ha ocurrido un error: Animal de la busqueda no encontrado",
                });

            axios.get(dato.URL_Enciclovida).then((response) => {
                const html = response.data;
                const $ = cheerio.load(html);

                $("a.dropdown-item:contains('Naturalista')", html).each(
                    function () {
                        let urlImg = $(this).attr("href");
                        urlImg = urlImg.split("/");

                        axios
                            .get(
                                "https://api.inaturalist.org/v1/taxa/" +
                                    urlImg[urlImg.length - 1]
                            )
                            .then((response) => {
                                return res.status(200).send({
                                    img: response.data.results[0]
                                        .taxon_photos[0].photo.original_url,
                                });
                            });
                    }
                );
            });
        });
    },

    setData: (req, res) => {
        var data = new dataModel();
        var body = req.body;

        data.Nombre_cientifico = body["Nombre científico"];
        data.Nombres_comunes = body["Nombres comunes"];
        data.Reino = body["Reino"];
        data.división = body["división"];
        data.phylum = body["phylum"];
        data.clase = body["clase"];
        data.orden = body["orden"];
        data.familia = body["familia"];
        data.género = body["género"];
        data.especie = body["especie"];
        data.Norma_Oficial_Mexicana_NOM059 =
            body["Norma Oficial Mexicana NOM-059"];
        data.Observaciones_NOM059 = body["Observaciones NOM 059"];
        data.Union_Internacional_para_la_Conservacion_de_la_Naturaleza_IUCN =
            body[
                "Unión Internacional para la Conservación de la Naturaleza (IUCN)"
            ];
        data.Observaciones_IUCN = body["Observaciones IUCN"];
        data.Comercio_Internacional_CITES =
            body["Comercio Internacional (CITES)"];
        data.Observaciones_CITES = body["Observaciones CITES"];
        data.Tipo_distribucion = body["Tipo distribución"];
        data.Ambiente = body["Ambiente"];
        data.Numero_de_registros = body["Número de registros"];
        data.Identificador_unico = body["Identificador único"];
        data.Categoria_taxonomica = body["Categoria taxonómica"];
        data.Estatus = body["Estatus"];
        data.URL_Enciclovida = body["URL Enciclovida"];
        data.Bibliografía = body["Bibliografía"];

        if (body.Ejemplares) {
            data.Ejemplares = body.Ejemplares;
        } else {
            data.Ejemplares = [];
        }

        data.save((err, save) => {
            if (err)
                return res.status(500).send({ message: "Error al guardar" });

            if (!save)
                return res
                    .status(409)
                    .send({ message: "No se ha podido guardar" });

            return res.status(200).send({
                save,
            });
        });
    },

    setDataEjemplares: (req, res) => {
        var body = req.body;
        var Nombre_cientifico = body.especievalidabusqueda;

        console.log(body);

        dataModel
            .updateOne(
                { Nombre_cientifico },
                {
                    $addToSet: { Ejemplares: body },
                },
                { returnOriginal: false }
            )
            .exec((err, animal) => {
                if (err)
                    return res
                        .status(500)
                        .send({ message: "Ha ocurrido un error" });

                if (!animal)
                    return res
                        .status(404)
                        .send({ message: "Animal a actualizar no encontrado" });

                return res.status(200).send(animal);
            });
    },
};

const limpiarDatos = (arr) => {
    if (arr.length != undefined) {
        let newArr = [];
        arr.forEach((dato) => {
            newArr.push({
                Nombre_cientifico: dato.Nombre_cientifico,
                Nombres_comunes: dato.Nombres_comunes,
                Reino: dato.Reino,
                división: dato.división,
                phylum: dato.phylum,
                clase: dato.clase,
                orden: dato.orden,
                familia: dato.familia,
                género: dato.género,
                especie: dato.especie,
                Norma_Oficial_Mexicana_NOM059:
                    dato.Norma_Oficial_Mexicana_NOM059,
                Observaciones_NOM059: dato.Observaciones_NOM059,
                Union_Internacional_para_la_Conservacion_de_la_Naturaleza_IUCN:
                    dato.Union_Internacional_para_la_Conservacion_de_la_Naturaleza_IUCN,
                Observaciones_IUCN: dato.Observaciones_IUCN,
                Comercio_Internacional_CITES: dato.Comercio_Internacional_CITES,
                Observaciones_CITES: dato.Observaciones_CITES,
                Tipo_distribucion: dato.Tipo_distribucion,
                Ambiente: dato.Ambiente,
                Numero_de_registros: dato.Numero_de_registros,
                Identificador_unico: dato.Identificador_unico,
                Categoria_taxonomica: dato.Categoria_taxonomica,
                Estatus: dato.Estatus,
                URL_Enciclovida: dato.URL_Enciclovida,
                Bibliografía: dato.Bibliografía,
                Ejemplares: dato.Ejemplares,
            });
        });

        return newArr;
    } else {
        return {
            Nombre_cientifico: arr.Nombre_cientifico,
            Nombres_comunes: arr.Nombres_comunes,
            Reino: arr.Reino,
            división: arr.división,
            phylum: arr.phylum,
            clase: arr.clase,
            orden: arr.orden,
            familia: arr.familia,
            género: arr.género,
            especie: arr.especie,
            Norma_Oficial_Mexicana_NOM059: arr.Norma_Oficial_Mexicana_NOM059,
            Observaciones_NOM059: arr.Observaciones_NOM059,
            Union_Internacional_para_la_Conservacion_de_la_Naturaleza_IUCN:
                arr.Union_Internacional_para_la_Conservacion_de_la_Naturaleza_IUCN,
            Observaciones_IUCN: arr.Observaciones_IUCN,
            Comercio_Internacional_CITES: arr.Comercio_Internacional_CITES,
            Observaciones_CITES: arr.Observaciones_CITES,
            Tipo_distribucion: arr.Tipo_distribucion,
            Ambiente: arr.Ambiente,
            Numero_de_registros: arr.Numero_de_registros,
            Identificador_unico: arr.Identificador_unico,
            Categoria_taxonomica: arr.Categoria_taxonomica,
            Estatus: arr.Estatus,
            URL_Enciclovida: arr.URL_Enciclovida,
            Bibliografía: arr.Bibliografía,
            Ejemplares: arr.Ejemplares,
        };
    }
};

const limpiarNombres = (arr) => {
    let newArr = [];
    arr.forEach((dato) => {
        newArr.push({
            Nombre_cientifico: dato.Nombre_cientifico,
            Nombres_comunes: dato.Nombres_comunes,
        });
    });
    return newArr;
};

module.exports = controller;
