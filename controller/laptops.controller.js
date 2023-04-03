import { productoServices } from "../services/product-services.js";

const crearCatalogoLaptops = (id, url, categoria, nombre, precio, descripcion) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("laptops__card");

    const contenido = `<img src="${url}" alt="" class="laptops__img">
                        <div class="laptops__container__data">
                            <label for="" class="laptops__data__name">${nombre}</label>
                            <h4 class="laptops__data__price">${precio}</h4>
                            <a href="#" class="laptops__data__link">Ver producto</a>
                        </div>`;

    tarjeta.innerHTML = contenido;

    return tarjeta;
}

const catalogoLaptops = document.querySelector("[data-laptop-catalogue]");

productoServices.listaLaptops().then((data) => {
    data.forEach(({id, url, categoria, nombre, precio, descripcion}) => {
        const nuevaLaptop = crearCatalogoLaptops(id, url, categoria, nombre, precio, descripcion);
        catalogoLaptops.appendChild(nuevaLaptop);
    });
});