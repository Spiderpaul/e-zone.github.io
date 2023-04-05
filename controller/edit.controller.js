import { productoServices } from "../services/product-services.js";

const formEdit = document.querySelector("[data-form-edit]");

const obteniendoInformacion = async () => {

    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id == null){
        window.location.href = "error.html"
    }

    const urlFile = document.querySelector("#edit-url");
    const select = document.querySelector("#select-categoria");
    const nombre = document.querySelector("#edit-nombre");
    const precio = document.querySelector("#edit-precio");
    const descripcion = document.querySelector("#edit-descripcion");

    const producto = await productoServices.detallesProducto(id);
    

    if (producto.id) {
        urlFile.value = producto.url;
        select.value = producto.categoria;
        nombre.value = producto.nombre;
        precio.value = producto.precio;
        descripcion.value = producto.descripcion;
    } else {
      throw new Error();
    }
}

obteniendoInformacion();

formEdit.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const urlEdit = document.querySelector("#edit-url").value;
    const select = document.querySelector("#select-categoria").value;
    const nombre = document.querySelector("#edit-nombre").value;
    const precioEdit = document.querySelector("#edit-precio").value;
    const descripcion = document.querySelector("#edit-descripcion").value;

    let precio = parseInt(precioEdit);

    

    try{
        await productoServices.actualizarProducto(id, urlEdit, select, nombre, precio, descripcion);
        window.location.href = "products.html";
    }catch(error){
        console.error(error);
    }


})