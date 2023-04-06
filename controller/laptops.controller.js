import { productoServices } from "../services/product-services.js";

const crearCatalogoLaptops = (id, url, categoria, nombre, precio, descripcion) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("laptops__card");

    const contenido = ` <button class="laptops__btn">
                            <span class="material-symbols-outlined">shopping_cart</span>   
                        </button>
                        <img src="${url}" alt="" class="laptops__img">
                        <div class="laptops__container__data">
                            <label for="" class="laptops__data__name">${nombre}</label>
                            <h4 class="laptops__data__price">$${precio}</h4>
                            <button href="../watch-product.html?id=${id}" class="laptops__btn__watch" id="btn${id}">Ver Producto</button>
                        </div>`;

    tarjeta.innerHTML = contenido;

    let btnWatch = tarjeta.querySelector(".laptops__btn__watch");

    btnWatch.addEventListener("click", async () => {
        window.location.href = `watch-product.html?id=${id}`;
    });

    return tarjeta;
}

const catalogoLaptops = document.querySelector("[data-laptop-catalogue]");

productoServices.listaLaptops().then((data) => {
    data.forEach(({id, url, categoria, nombre, precio, descripcion}) => {
        const nuevaLaptop = crearCatalogoLaptops(id, url, categoria, nombre, precio, descripcion);
        catalogoLaptops.appendChild(nuevaLaptop);
    });
});