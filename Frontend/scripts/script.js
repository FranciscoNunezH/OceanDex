const especiesContainer = document.querySelector("#contenedor-especies");
const userCardTemplate = document.querySelector("[data-card-template]");
const spinner = document.querySelector("[spinner]");

fetch("https://ocean-dex-api.herokuapp.com/api/consultar-nombres")
    .then(res => {
        return res.json();
    })
    .then(data => {
        spinner.remove();
        datos = data.map(especie => {
            const card = userCardTemplate.content.cloneNode(true).children[0];
            const img = card.querySelector("[data-card-img_img]");
            const link = card.querySelector("[data-card-link]");
            const text = card.querySelector("[data-card-text]");
            const attr = document.createAttribute("href");
            attr.value = `./info.html?nombre=${especie.Nombre_cientifico}`;
            card.setAttributeNode(attr);
            text.textContent = especie.Nombre_cientifico;
            especiesContainer.append(card);
            return {
                nombre: especie.Nombre_cientifico.toLowerCase(),
                element: card,
            };
        });
    });

const search_input = document.querySelector(".input-filtro");

search_input.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    datos.forEach(especie => {
        const isVisible = especie.nombre.includes(value);
        especie.element.classList.toggle("hidden", !isVisible);
    });
});
