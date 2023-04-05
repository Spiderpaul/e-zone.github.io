import { productoServices } from "../services/product-services.js";

const detallesProducto = (id, url, categoria, nombre, precio, descripcion) => {
    const detalles = document.createElement("div");
    detalles.classList.add("details__container__data");

    const contenido = `<img src="${url}" alt="" class="details__img">
                        <div class="details__conainer__text">
                            <button class="details__btn">Comprar</button>
                            <div class="details__title__price"> 
                                <h1 class="details__title">${nombre}</h1>
                                <h2 class="details__price">$${precio}</h2>
                            </div>
                            <div class="details__container__description">
                                <p class="details__description">${descripcion}</p>
                            </div>
                        </div>`;

    detalles.innerHTML = contenido;

    if(categoria == "consolas"){
        cargarRelacionadosConsolas();
    }else if(categoria == "laptops"){
        cargarRelacionadosLaptops();
    }

    return detalles; 
}

const obteniendoinformacion = async () => {

    const url = new URL(window.location);
    const idUrl = url.searchParams.get("id");
    
    const datosProducto = await productoServices.detallesProducto(idUrl);

    let id = datosProducto.id;
    let urlFile = datosProducto.url;
    let categoria = datosProducto.categoria;
    let nombre = datosProducto.nombre;
    let precio = datosProducto.precio;
    let descripcion = datosProducto.descripcion;
    
    const producto = detallesProducto(id, urlFile, categoria, nombre, precio, descripcion);

    const contenedor = document.querySelector("[data-details]");

    contenedor.appendChild(producto);
}

obteniendoinformacion();

const listaRelacionados = (count, id, url, categoria, nombre, precio, descripcion) => {
    if(count <= 6){
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("related__card");
        tarjeta.setAttribute("id", `card${count}`);
    
        const contenido = ` <img src="${url}" alt="" class="related__img">
                            <div class="related__container__data">
                                <label for="" class="related__data__name">${nombre}</label>
                                <h4 class="related__data__price">$${precio}</h4>
                                <button href="../watch-product.html?id=${id}" class="related__btn__watch" id="btn${id}">Ver</button>
                            </div>`;
    
        tarjeta.innerHTML = contenido;

        if(count > 4){
            tarjeta.classList.add("hidden");
        }

        const btnVer = tarjeta.querySelector(".related__btn__watch");

        btnVer.addEventListener("click", async () => {
            window.location.href = `watch-product.html?id=${id}`;
        })

        return tarjeta;
    }else{
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("products__card");
        tarjeta.innerHTML = "Sin productos para mostrar";       
    }   
}

const productosRelacionados = document.querySelector("[data-related]");

const cargarRelacionadosConsolas = () => {
    productoServices.listaConsolas().then((data) => {
        let count = 0;
        data.forEach(({id, url, categoria, nombre, precio, descripcion}) => {
            count++;
            const nuevaConsola = listaRelacionados(count, id, url, categoria, nombre, precio, descripcion);
            if(nuevaConsola){
                productosRelacionados.appendChild(nuevaConsola);
            }
        });
    });
};

const cargarRelacionadosLaptops = () => {
    productoServices.listaLaptops().then((data) => {
        let count = 0;
        data.forEach(({id, url, categoria, nombre, precio, descripcion}) => {
            count++;
            const nuevaConsola = listaRelacionados(count, id, url, categoria, nombre, precio, descripcion);
            if(nuevaConsola){
                productosRelacionados.appendChild(nuevaConsola);
            }
        });
    });
};