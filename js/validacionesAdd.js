const inputs = document.querySelectorAll(".add__input");
const btnAdd = document.querySelector("[data-btn-iniciar]");
btnAdd.disabled = true;

const campoCheck = {
    // url: false,
    categoria: false,
    nombre: false,
    precio: false,
    descripcion: false,
}

const validarFormularioAdd = (e) => {

    switch (e.target.name){
        
        case "nombre":
            let inputNombre = e.target;
            let exNombre = /^[a-zA-ZÀ-ÿ\s]{0,50}$/;
            if(exNombre.test(inputNombre.value) && inputNombre.value != ""){
                document.getElementById("add-nombre").classList.remove("incorrecto");
                campoCheck.nombre = true;
            }else{
                document.getElementById("add-nombre").classList.add("incorrecto");
                campoCheck.nombre = false;
            }
            break;
        case "precio":
            let inputPrecio = e.target;
            let exPrecio = /^[0-9]{0,10}$/;
            if(exPrecio.test(inputPrecio.value) && inputPrecio.value != ""){
                document.getElementById("add-precio").classList.remove("incorrecto");
                campoCheck.precio = true;
            }else{
                document.getElementById("add-precio").classList.add("incorrecto");
                campoCheck.precio = false;
            }
            break;
        case "descripcion":
            let inputMensaje = e.target;
            let exMensaje = /^([A-Za-z0-9À-ÿ\_\-\.\,\#\?\¿\!\¡\s]){0,300}$/;
            if(exMensaje.test(inputMensaje.value) && inputMensaje.value != ""){
                document.getElementById("add-descripcion").classList.remove("incorrecto");
                campoCheck.descripcion = true;
            }else{
                document.getElementById("add-descripcion").classList.add("incorrecto");
                campoCheck.descripcion = false;
            }
            break;
    }
}

/* const validarUrl = () => {
    let inputUrl = document.getElementById("add-url").value;
    console.log(inputUrl)
    if(inputUrl != ""){
        document.getElementById("add-url").classList.remove("incorrecto");
        campoCheck.url = true;
    }else if(inputUrl == ""){
        document.getElementById("add-url").classList.add("incorrecto");
        campoCheck.url = false;
    }
} */

const validarCategoria = () => {
    let inputCategoria = document.getElementById("select-categoria").value;
    console.log(inputCategoria)
    if(inputCategoria == "consolas" || inputCategoria == "laptops"){
        document.getElementById("select-categoria").classList.remove("incorrecto");
        campoCheck.categoria = true;
    }else if(inputCategoria == "seleccionar"){
        document.getElementById("select-categoria").classList.add("incorrecto");
        campoCheck.categoria = false;
    }
}

const verificarcampoCheck = () => {
    
    if(campoCheck.categoria && campoCheck.nombre && campoCheck.precio && campoCheck.descripcion){
        console.log("todo bien");
        btnAdd.classList.remove("deshabilitado");
        btnAdd.disabled = false;
    }else {
        console.log("algo anda mal");
        btnAdd.classList.add("deshabilitado");
        btnAdd.disabled = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormularioAdd);
    input.addEventListener("blur", validarFormularioAdd);
    input.addEventListener("keyup", verificarcampoCheck);
    input.addEventListener("blur", verificarcampoCheck);
    input.addEventListener("keyup", validarCategoria);
    input.addEventListener("blur", validarCategoria);
});


