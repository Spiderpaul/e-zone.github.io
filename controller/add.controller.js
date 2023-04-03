import { productoServices } from "../services/product-services.js";

const formAdd = document.querySelector("[data-form-add]");


formAdd.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const imgAdd = document.querySelector("[data-img]");
    const categoriaAdd = document.querySelector("#select-categoria");
    const nombreAdd = document.querySelector("[data-nombre]");
    const precioAdd = document.querySelector("[data-precio]");
    const descripcionAdd = document.querySelector("[data-descripcion]");

    if(categoriaAdd.value == "consolas"){
        let categoria = categoriaAdd.value;
        let nombre = nombreAdd.value;
        let descripcion = descripcionAdd.value;
        let precio = parseInt(precioAdd.value);
        
        console.log(categoria, nombre, descripcion, precio);

        try{
            // let urlFile = `assets/img/productos/consolas/${imgAdd.files[0].name}`;
            ;
            // productoServices.crearNuevoProducto(newID, categoriaAdd.value, nombreAdd.value, precio, descripcionAdd.value);
            fetch("http://localhost:3000/consolas", {
            method: "POST",
            body: JSON.stringify({ categoria, nombre, precio, descripcion}),
            header: {
                "Content-Type": "application/json",
            },
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
            window.location.replace("../products.html");
        }catch(error){
            console.log(error) 
            // window.location.href = "error.html";
        }
    }

    /* switch(categoriaAdd.value){
        case "consolas":
            // let newID;
            let categoria = categoriaAdd.value;
            let nombre = nombreAdd.value;
            let descripcion = descripcionAdd.value;
            // productoServices.listaConsolas().then((data) => {
            //     newID = data[data.length - 1].id + 1;
                
            // });
            try{
                // let urlFile = `assets/img/productos/consolas/${imgAdd.files[0].name}`;
                let precio = parseInt(precioAdd.value);
                // productoServices.crearNuevoProducto(newID, categoriaAdd.value, nombreAdd.value, precio, descripcionAdd.value);
                fetch("http://localhost:3000/consolas", {
                method: "POST",
                body: JSON.stringify({ categoria, nombre, precio, descripcion}),
                header: {
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
                    "Content-Type": "application/json",
                },
            })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err));
                window.location.replace("../products.html");
            }catch(error){
                console.log(error) 
                // window.location.href = "error.html";
            }
            break;
        case "laptops":
            productoServices.listaLaptops().then((data) => {
                let newID = data[data.length - 1].id + 1;
                let urlFile = `assets/img/productos/laptops/${imgAdd.files[0].name}`;
                let precio = parseInt(precioAdd.value);
                try{
                    productoServices.crearNuevoProducto(newID, urlFile, categoriaAdd.value, nombreAdd.value, precio, descripcionAdd.value);
                    window.location.replace("../products.html");
                }catch(error){
                    console.log(error) 
                    // window.location.href = "error.html";
                }
            });
            break;
    } */
});

