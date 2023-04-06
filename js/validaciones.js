const formContacto = document.querySelector("[data-contact]");
const input = document.querySelectorAll("#contact-name input");
const textarea = document.querySelectorAll("#contact-message textarea");
const btnContacto = document.querySelector("#contact-btn");

const campos = {
    nombre: false,
    mensaje: false,
}

const validarFormulario = (e) => {

    console.log("Entrando a alidaciones")
    switch (e.target.name){
        case "name":
            let inputNombre = e.target;
            let exNombre = /^[a-zA-ZÀ-ÿ\s]{0,50}$/;
            if(exNombre.test(inputNombre.value) && inputNombre.value != ""){
                document.getElementById("contact__form__name").classList.remove("incorrecto");
                campos.nombre = true;
            }else{
                document.getElementById("contact__form__name").classList.add("incorrecto");
                campos.nombre = false;
            }
            break;
        case "message":
            let inputMensaje = e.target;
            let exMensaje = /^([A-Za-z0-9À-ÿ\_\-\.\,\#\?\¿\!\¡\s]){0,300}$/;
            if(exMensaje.test(inputMensaje.value) && inputMensaje.value != ""){
                document.getElementById("contact__form__textarea").classList.remove("incorrecto");
                campos.mensaje = true;
            }else{
                document.getElementById("contact__form__textarea").classList.add("incorrecto");
                campos.mensaje = false;
            }
            break;
    }
}

const verificarCampos = () => {
    if(campos.nombre && campos.mensaje){
        console.log("Todo bien");
    }else{
        console.log("Algo anda mal");
    }
}

input.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
    input.addEventListener("keyup", verificarCampos);
    input.addEventListener("blur", verificarCampos);
});

textarea.forEach((textarea) => {
    textarea.addEventListener("keyup", validarFormulario);
    textarea.addEventListener("blur", validarFormulario);
    textarea.addEventListener("keyup", verificarCampos);
    textarea.addEventListener("blur", verificarCampos);
})

btnContacto.addEventListener("click", (e) => {
    e.preventDefault();

    alert("Sin funcionalidad por el momento");
})