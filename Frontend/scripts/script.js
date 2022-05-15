var especiesContainer = document.querySelector("#contenedor-especies");

fetch("https://ocean-dex-api.herokuapp.com/api/consultar-nombres")
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
    });

// especiesContainer.innerHTML = `
// <a href="#" class="card-especies">
//                         <div class="card-especies_img">
//                             <img
//                                 src="https://inaturalist-open-data.s3.amazonaws.com/photos/38667818/original.jpg?1557664973"
//                                 alt="Nodilittorina ziczac"
//                             />
//                         </div>
//                         <div class="card-especies_nombre">
//                             Nodilittorina ziczac
//                         </div>
//                     </a>
//                     <a href="#" class="card-especies">
//                         <div class="card-especies_img">
//                             <img
//                                 src="https://inaturalist-open-data.s3.amazonaws.com/photos/38667818/original.jpg?1557664973"
//                                 alt="Nodilittorina ziczac"
//                             />
//                         </div>
//                         <div class="card-especies_nombre">
//                             Nodilittorina ziczac
//                         </div>
//                     </a>
// `;

/*
var map = L.map("map").setView([23.446657, -102.007883], 5);

L.tileLayer(
    "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=SITCjiQQojKS2PVJ6BOa",
    {
        attribution:
            '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: "your.mapbox.access.token",
    }
).addTo(map);

var marker = L.marker([23.446657, -102.007883]).addTo(map);
var marker2 = L.marker([23.446657, -100.007883]).addTo(map);

marker.bindPopup("<b>Hola OceanDex Team.</b>").openPopup();
marker2.bindPopup("<b>Hello world!</b><br>I am a popup.");

setTimeout(() => {
    marker.remove();
}, 3000);
*/
