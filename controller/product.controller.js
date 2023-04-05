import { productoServices } from "../services/product-services.js";

//Creando tarjetas de productos por medio del DOM
const crearNuevoProducto = (count, id, url, categoria, nombre, precio, descripcion) => {
    if(count <= 6){
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("products__card");
        tarjeta.setAttribute("id", `card${count}`);
    
        const contenido = ` <button class="products__btn">
                                <span class="material-symbols-outlined">shopping_cart</span>   
                            </button>
                            <img src="${url}" alt="" class="products__img">
                            <div class="products__container__data">
                                <label for="" class="Products__data__name">${nombre}</label>
                                <h4 class="products__data__price">$${precio}</h4>
                                <button href="../watch-product.html?id=${id}" class="products__btn__watch" id="btn${id}">Ver Producto</button>
                            </div>`;
    
        tarjeta.innerHTML = contenido;

        if(count > 4){
            tarjeta.classList.add("hidden");
        }

        let btnWatch = tarjeta.querySelector(".products__btn__watch");

        btnWatch.addEventListener("click", async () => {
            window.location.href = `watch-product.html?id=${id}`;
        });

        return tarjeta;
    }else{
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("products__card");
        tarjeta.innerHTML = "Sin productos para mostrar";       
    }
}

const consolas = document.querySelector("[data-container-console]");
const laptops = document.querySelector("[data-container-laptop]");

productoServices.listaConsolas().then((data) => {
    let count = 0;
    data.forEach(({id, url, categoria, nombre, precio, descripcion}) => {
        count++;
        const nuevaConsola = crearNuevoProducto(count, id, url, categoria, nombre, precio, descripcion);
        if(nuevaConsola){
            consolas.appendChild(nuevaConsola);
        }
    });
});

productoServices.listaLaptops().then((data) => {
    let count = 0;
    data.forEach(({id, url, categoria, nombre, precio, descripcion}) => {
        count++;
        const nuevaLaptop = crearNuevoProducto(count, id, url, categoria, nombre, precio, descripcion);
        if(nuevaLaptop){
            laptops.appendChild(nuevaLaptop);
        }
    })
});

