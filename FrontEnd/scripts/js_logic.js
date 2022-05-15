// initialize the map on the "map" div with a given center and zoom
var map = L.map("map").setView([23.446657, -102.007883], 5);

L.tileLayer(
    "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
    {
        attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
).addTo(map);
