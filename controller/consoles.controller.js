import { productoServices } from "../services/product-services.js";

const crearCatalogoConsolas = (id, url, categoria, nombre, precio, descripcion) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("consolas__card")

    const contenido = `<button class="consolas__btn">
                            <span class="material-symbols-outlined">shopping_cart</span>   
                        </button>
                        <img src="${url}" alt="" class="consolas__img">
                        <div class="consolas__container__data">
                            <label for="" class="consolas__data__name">${nombre}</label>
                            <h4 class="consolas__data__price">$${precio}</h4>
                            <button href="../watch-product.html?id=${id}" class="consolas__btn__watch" id="btn${id}">Ver Producto</button>
                        </div>`;

    tarjeta.innerHTML = contenido;

    let btnWatch = tarjeta.querySelector(".consolas__btn__watch");

    btnWatch.addEventListener("click", async () => {
        window.location.href = `watch-product.html?id=${id}`;
    });

    return tarjeta;
}

const catalogoConsolas = document.querySelector("[data-console-catalogue]");

productoServices.listaConsolas().then((data) => {
    data.forEach(({id, url, categoria, nombre, precio, descripcion}) => {
        const nuevaConsola = crearCatalogoConsolas(id, url, categoria, nombre, precio, descripcion);
        catalogoConsolas.appendChild(nuevaConsola);
    });
});