const formIniciar = document.querySelector("[data-form-login]");
const email = document.querySelector("[data-email]");
const pass = document.querySelector("[data-password]");


formIniciar.addEventListener("submit", (event) => {
    event.preventDefault();

    if(email.value == "admin@ezone.com"){
        if(pass.value == "1234*"){
            window.location.replace("../products.html");
        }else{
            alert("La contraseña es incorrecta");
        }
    }else{
        alert("El correo es incorrecto");
    }
});