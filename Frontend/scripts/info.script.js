const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

var especieData;
var markers = [];

if (!params.nombre) {
    window.location.href = "./";
}

// initialize the map on the "map" div with a given center and zoom
var map = L.map("map").setView([24.334917, -103.185994], 5);

L.tileLayer(
    "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
    {
        attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
).addTo(map);

fetch("https://ocean-dex-api.herokuapp.com/api/consultar/" + params.nombre)
    .then(data => {
        return data.json();
    })
    .then(especie => {
        especieData = especie;
        obterImagen();
    })
    .catch(err => {
        console.log(err);
    });

function obterImagen() {
    fetch(
        "https://ocean-dex-api.herokuapp.com/api/consultar/img/" + params.nombre
    )
        .then(data => {
            return data.json();
        })
        .then(imagen => {
            especieData.img = imagen.img;
            incorporarTexto();
        })
        .catch(err => {
            console.log(err);
        });
}

function incorporarTexto() {
    document.querySelector(".nombre_cientifico").textContent =
        especieData.Nombre_cientifico;
    document.querySelector(".familia").textContent = especieData.familia;
    document.querySelector(".especie").textContent = especieData.especie;
    document.querySelector(".ambiente").textContent = especieData.Ambiente;
    document.querySelector(".registros").textContent =
        especieData.Numero_de_registros;
    document.querySelector(".estatus").textContent = especieData.Estatus;
    document.querySelector(".clase").textContent = especieData.clase;

    document.querySelector(
        ".imagen-img"
    ).innerHTML = `<img src="${especieData.img}" alt="${especieData.Nombre_cientifico}" />`;

    agregarMarcadores();
}

function agregarMarcadores() {
    especieData.Ejemplares.forEach(ejemplar => {
        markers.push(
            L.marker([ejemplar.latitud, ejemplar.longitud])
                .addTo(map)
                .openPopup()
        );
    });
}
