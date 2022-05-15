// initialize the map on the "map" div with a given center and zoom
var map = L.map('map').setView([20.674089, -105.264793], 13);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([20.662607, -105.276858])
.addTo(map)
.bindPopup("<h1> Turtle </h1> <p> Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p> <img class = 'displayed' src='./src/tortuga.png' />")
.openPopup();
