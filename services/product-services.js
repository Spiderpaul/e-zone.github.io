const listaConsolas = () => 
    fetch("http://localhost:3000/consolas").then((respuesta) => respuesta.json());

const listaLaptops = () => 
    fetch("http://localhost:3000/laptops").then((respuesta) => respuesta.json());

const crearNuevoProducto = (id, categoria, nombre, precio, descripcion) => {
    // let nuevaURL = "assets/img/productos/consolas/switch.jpg";
    
    let _datos = {
        "id": id,
        // "url": "assets/img/productos/consolas/switch.jpg",
        "categoria": categoria,
        "nombre": nombre,
        "precio": precio,
        "descripcion": descripcion
    }

    switch(categoria){
        case "consolas":
            return fetch("http://localhost:3000/consolas", {
                method: "POST",
                body: JSON.stringify(_datos),
                header: {
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
                    "Content-Type": "application/json",
                },
            })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err));
            
            break;
        case "laptops": 
            return fetch("http://localhost:3000/laptops", {
                method: "POST",
                header: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(_datos),
            });
            break;
    }
}

  
export const productoServices = {
    listaConsolas,
    listaLaptops,
    crearNuevoProducto,
}