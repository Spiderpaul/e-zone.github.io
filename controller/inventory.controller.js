import { productoServices } from "../services/product-services.js";

const crearInventario = (id, url, categoria, nombre, precio, descripcion) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("inventory__card");
   
    const contenido = `<img src="${url}" alt="" class="inventory__img">
                        <div class="inventory__container__data">
                            <label for="" class="inventory__data__name">${nombre}</label>
                            <h4 class="inventory__data__price">${precio}</h4>
                            <a href="#" class="inventory__data__link">Ver producto</a>
                        </div>`;

    tarjeta.innerHTML = contenido;

    return tarjeta;
}

const inventario = document.querySelector("[data-inventory]");
const seleccion = document.querySelector("[data-select-inventory]");

function consolas(){
    productoServices.listaConsolas().then((data) => {
        data.forEach(({id, url, categoria, nombre, precio, descripcion}) => {
            const nuevaConsola = crearInventario(id, url, categoria, nombre, precio, descripcion);
            inventario.appendChild(nuevaConsola);
        });
    });
}

function laptops(){
    productoServices.listaLaptops().then((data) => {
        data.forEach(({id, url, categoria, nombre, precio, descripcion}) => {
            const nuevaLaptop = crearInventario(id, url, categoria, nombre, precio, descripcion);
            inventario.appendChild(nuevaLaptop);
        });
    });
}

function cargarInventarioCompleto(){
    consolas();
    laptops();
}

cargarInventarioCompleto();

seleccion.addEventListener("change", () => {
    switch(seleccion.value){
        case "Completo":
            inventario.innerHTML = "";
            consolas();
            laptops();
            break;
        case "Consolas":
            inventario.innerHTML = "";
            consolas();
            break;
        case "Laptops":
            inventario.innerHTML = "";
            laptops();
            break;
    }
});
