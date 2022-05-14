## OceanDex API (https://ocean-dex-api.herokuapp.com/)

#### Guardar caracteristicas generales:

-   Metodo: POST
-   URL: https://ocean-dex-api.herokuapp.com/api/guardar
-   Formato:

```
{
    "Nombre científico": String,
    "Nombres comunes": String,
    "Reino": String,
    "división": String,
    "phylum": String,
    "clase": String,
    "orden": String,
    "familia": String,
    "género": String,
    "especie": String,
    "Norma Oficial Mexicana NOM-059": String,
    "Observaciones NOM 059": String,
    "Unión Internacional para la Conservación de la Naturaleza (IUCN)": String,
    "Observaciones IUCN": String,
    "Comercio Internacional (CITES)": String,
    "Observaciones CITES": String,
    "Tipo distribución": String,
    "Ambiente": String,
    "Número de registros": Number,
    "Identificador único": Number,
    "Categoria taxonómica": String,
    "Estatus": String,
    "URL Enciclovida": String,
    "Bibliografía": String
  }
    Ejemplares (OPCIONAL): [
        {
            idejemplar: String,
            idnombrecatvalidoorig: String,
            especievalidabusqueda: String,
            comentarioscatvalido: String,
            entid: Number,
            munid: Number,
            anpid: Number,
            ecorid: Number,
            latitud: Number,
            longitud: Number,
            localidad: String,
            municipiomapa: String,
            estadomapa: String,
            paismapa: String,
            categoriataxonomica: String,
            fechacolecta: String,
            colector: String,
            coleccion: String,
            probablelocnodecampo: String,
            ejemplarfosil: String,
            institucion: String,
            paiscoleccion: String,
            proyecto: String,
            urlproyecto: String,
            urlejemplar: String,
            urlorigen: String,
            id: Number,
            tipocoleccion: Number,
            idnombrecatvalido: String
        },
    ],
}
```

#### Guardar datos de los ejemplares:

-   Metodo: POST
-   URL: https://ocean-dex-api.herokuapp.com/api/guardar/ejemplar
-   Formato:

```
{
    "idejemplar": String,
    "idnombrecatvalidoorig": String,
    "especievalidabusqueda": String,
    "comentarioscatvalido": String,
    "entid": Number,
    "munid": Number,
    "anpid": Number,
    "ecorid": Number,
    "latitud": Number,
    "longitud": Number,
    "localidad": String,
    "municipiomapa": String,
    "estadomapa": String,
    "paismapa": String,
    "categoriataxonomica": String,
    "fechacolecta": String,
    "colector": String,
    "coleccion": String,
    "probablelocnodecampo": String,
    "ejemplarfosil": String,
    "institucion": String,
    "paiscoleccion": String,
    "proyecto": "gbif_2017",
    "urlproyecto": "",
    "urlejemplar": String,
    "urlorigen": String,
    "id": Number,
    "tipocoleccion": Number,
    "idnombrecatvalido": String,
}
```

#### Consultar todos los datos disponibles

-   Metodo: GET
-   URL: https://ocean-dex-api.herokuapp.com/api/consultar
-   Respuesta:

```
[
    {
        "Nombre_cientifico": String,
        "Nombres_comunes": String,
        "Reino": String,
        "división": String,
        "phylum": String,
        "clase": String,
        "orden": String,
        "familia": String,
        "género": String,
        "especie": String,
        "Norma_Oficial_Mexicana_NOM059": String,
        "Observaciones_NOM059": String,
        "Union_Internacional_para_la_Conservacion_de_la_Naturaleza_IUCN": String,
        "Observaciones_IUCN": String,
        "Comercio_Internacional_CITES": String,
        "Observaciones_CITES": String,
        "Tipo_distribucion": String,
        "Ambiente": String,
        "Numero_de_registros": Number,
        "Identificador_unico": Number,
        "Categoria_taxonomica": String,
        "Estatus": String,
        "URL_Enciclovida": String,
        "Bibliografía": String,
        "Ejemplares": [
            {
                "idejemplar": String,
                "idnombrecatvalidoorig": String,
                "especievalidabusqueda": String,
                "comentarioscatvalido": String,
                "entid": Number,
                "munid": Number,
                "anpid": Number,
                "ecorid": Number,
                "latitud": Number,
                "longitud": Number,
                "localidad": String,
                "municipiomapa": String,
                "estadomapa": String,
                "paismapa": String,
                "categoriataxonomica": String,
                "fechacolecta": String,
                "colector": String,
                "coleccion": String,
                "probablelocnodecampo": String,
                "ejemplarfosil": String,
                "institucion": String,
                "paiscoleccion": String,
                "proyecto": String,
                "urlproyecto": String,
                "urlejemplar": String,
                "urlorigen": String,
                "id": Number,
                "tipocoleccion": Number,
                "idnombrecatvalido": String
            }
        ]
    }
]

```

#### Consultar los datos disponibles de una especie por nombre cientifico

-   Metodo: GET
-   URL: https://ocean-dex-api.herokuapp.com/api/consultar/{Nombre cientifico}
-   Respuesta:

```
{
    "Nombre_cientifico": String,
    "Nombres_comunes": String,
    "Reino": String,
    "división": String,
    "phylum": String,
    "clase": String,
    "orden": String,
    "familia": String,
    "género": String,
    "especie": String,
    "Norma_Oficial_Mexicana_NOM059": String,
    "Observaciones_NOM059": String,
    "Union_Internacional_para_la_Conservacion_de_la_Naturaleza_IUCN": String,
    "Observaciones_IUCN": String,
    "Comercio_Internacional_CITES": String,
    "Observaciones_CITES": String,
    "Tipo_distribucion": String,
    "Ambiente": String,
    "Numero_de_registros": Number,
    "Identificador_unico": Number,
    "Categoria_taxonomica": String,
    "Estatus": String,
    "URL_Enciclovida": String,
    "Bibliografía": String,
    "Ejemplares": [
        {
            "idejemplar": String,
            "idnombrecatvalidoorig": String,
            "especievalidabusqueda": String,
            "comentarioscatvalido": String,
            "entid": Number,
            "munid": Number,
            "anpid": Number,
            "ecorid": Number,
            "latitud": Number,
            "longitud": Number,
            "localidad": String,
            "municipiomapa": String,
            "estadomapa": String,
            "paismapa": String,
            "categoriataxonomica": String,
            "fechacolecta": String,
            "colector": String,
            "coleccion": String,
            "probablelocnodecampo": String,
            "ejemplarfosil": String,
            "institucion": String,
            "paiscoleccion": String,
            "proyecto": String,
            "urlproyecto": String,
            "urlejemplar": String,
            "urlorigen": String,
            "id": Number,
            "tipocoleccion": Number,
            "idnombrecatvalido": String
        }
    ]
}
```

#### Consultar la imagen de una especie por nombre cientifico

-   Metodo: GET
-   URL: https://ocean-dex-api.herokuapp.com/api/consultar/img/{Nombre cientifico}
-   Respuesta:

```
{
  "img": String
}
```

Gracias por consultar la documentación
\- JosAnGoCa
