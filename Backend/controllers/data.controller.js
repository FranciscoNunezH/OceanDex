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

        dataModel
            .findOne({ "Nombre científico": Nombre_cientifico })
            .exec((err, dato) => {
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

                let URL_Enciclovida = datosLimpios.URL_Enciclovida.split("/");

                let codigo =
                    URL_Enciclovida[URL_Enciclovida.length - 1].split("-");

                let ejemplares_url = `https://enciclovida.mx/especies/${codigo[0]}/consulta-registros.json?coleccion=snib&formato=json`;

                axios.get(ejemplares_url).then((response) => {
                    datosLimpios.Ejemplares = response.data;
                    return res.status(200).send(datosLimpios);
                });
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

        dataModel
            .findOne({ "Nombre científico": Nombre_cientifico })
            .exec((err, dato) => {
                if (err)
                    return res
                        .status(500)
                        .send({ message: "Ha ocurrido un error" });

                if (!dato)
                    return res.status(404).send({
                        message:
                            "Ha ocurrido un error: Animal de la busqueda no encontrado",
                    });

                axios.get(dato["URL Enciclovida"]).then((response) => {
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
                                    if (
                                        response.data.results[0] &&
                                        response.data.results[0]
                                            .taxon_photos[0] &&
                                        response.data.results[0].taxon_photos[0]
                                            .photo &&
                                        response.data.results[0].taxon_photos[0]
                                            .photo.original_url
                                    ) {
                                        return res.status(200).send({
                                            img: response.data.results[0]
                                                .taxon_photos[0].photo
                                                .original_url,
                                        });
                                    } else {
                                        return res.status(200).send({
                                            img: "",
                                        });
                                    }
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
        data.division = body["división"];
        data.phylum = body["phylum"];
        data.clase = body["clase"];
        data.orden = body["orden"];
        data.familia = body["familia"];
        data.genero = body["género"];
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
        data.Bibliografia = body["Bibliografía"];

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
                Nombre_cientifico: dato["Nombre científico"],
                Nombres_comunes: dato["Nombres comunes"],
                Reino: dato["Reino"],
                division: dato["división"],
                phylum: dato["phylum"],
                clase: dato["clase"],
                orden: dato["orden"],
                familia: dato["familia"],
                genero: dato["género"],
                especie: dato["especie"],
                Norma_Oficial_Mexicana_NOM059:
                    dato["Norma Oficial Mexicana NOM-059"],
                Observaciones_NOM059: dato["Observaciones NOM 059"],
                Union_Internacional_para_la_Conservacion_de_la_Naturaleza_IUCN:
                    dato[
                        "Unión Internacional para la Conservación de la Naturaleza (IUCN)"
                    ],
                Observaciones_IUCN: dato["Observaciones IUCN"],
                Comercio_Internacional_CITES:
                    dato["Comercio Internacional (CITES)"],
                Observaciones_CITES: dato["Observaciones CITES"],
                Tipo_distribucion: dato["Tipo distribución"],
                Ambiente: dato["Ambiente"],
                Numero_de_registros: dato["Número de registros"],
                Identificador_unico: dato["Identificador único"],
                Categoria_taxonomica: dato["Categoria taxonómica"],
                Estatus: dato["Estatus"],
                URL_Enciclovida: dato["URL Enciclovida"],
                Bibliografia: dato["Bibliografía"],
            });
        });

        return newArr;
    } else {
        return {
            Nombre_cientifico: arr["Nombre científico"],
            Nombres_comunes: arr["Nombres comunes"],
            Reino: arr["Reino"],
            division: arr["división"],
            phylum: arr["phylum"],
            clase: arr["clase"],
            orden: arr["orden"],
            familia: arr["familia"],
            genero: arr["género"],
            especie: arr["especie"],
            Norma_Oficial_Mexicana_NOM059:
                arr["Norma Oficial Mexicana NOM-059"],
            Observaciones_NOM059: arr["Observaciones NOM 059"],
            Union_Internacional_para_la_Conservacion_de_la_Naturaleza_IUCN:
                arr[
                    "Unión Internacional para la Conservación de la Naturaleza (IUCN)"
                ],
            Observaciones_IUCN: arr["Observaciones IUCN"],
            Comercio_Internacional_CITES: arr["Comercio Internacional (CITES)"],
            Observaciones_CITES: arr["Observaciones CITES"],
            Tipo_distribucion: arr["Tipo distribución"],
            Ambiente: arr["Ambiente"],
            Numero_de_registros: arr["Número de registros"],
            Identificador_unico: arr["Identificador único"],
            Categoria_taxonomica: arr["Categoria taxonómica"],
            Estatus: arr["Estatus"],
            URL_Enciclovida: arr["URL Enciclovida"],
            Bibliografia: arr["Bibliografía"],
        };
    }
};

const limpiarNombres = (arr) => {
    let newArr = [];
    arr.forEach((dato) => {
        newArr.push({
            Nombre_cientifico: dato["Nombre científico"],
            Nombres_comunes: dato["Nombres comunes"],
        });
    });
    return newArr;
};

module.exports = controller;
