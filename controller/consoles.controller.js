import { productoServices } from "../services/product-services.js";

const crearCatalogoConsolas = (id, url, categoria, nombre, precio, descripcion) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("consolas__card")

    const contenido = `<img src="${url}" alt="" class="consolas__img">
                        <div class="consolas__container__data">
                            <label for="" class="consolas__data__name">${nombre}</label>
                            <h4 class="consolas__data__price">${precio}</h4>
                            <a href="#" class="consolas__data__link">Ver producto</a>
                        </div>`;

    tarjeta.innerHTML = contenido;

    return tarjeta;
}

const catalogoConsolas = document.querySelector("[data-console-catalogue]");

productoServices.listaConsolas().then((data) => {
    data.forEach(({id, url, categoria, nombre, precio, descripcion}) => {
        const nuevaConsola = crearCatalogoConsolas(id, url, categoria, nombre, precio, descripcion);
        catalogoConsolas.appendChild(nuevaConsola);
    });
});