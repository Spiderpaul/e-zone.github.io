const listaConsolas = () => 
    fetch("http://localhost:3000/consolas").then((respuesta) => respuesta.json());

const listaLaptops = () => 
    fetch("http://localhost:3000/laptops").then((respuesta) => respuesta.json());

const crearNuevoProducto = (id, url, categoria, nombre, precio, descripcion) => {
    // let nuevaURL = "assets/img/productos/consolas/switch.jpg";
    
    const data = {
        id,
        url,
        categoria,
        nombre,
        precio,
        descripcion
    };

    if(categoria == "consolas"){
        return fetch("http://localhost:3000/consolas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(json => console.log("Nuevo producto creado: ", json))
        .catch(err => console.log(err));
        
    }else if(categoria == "laptops"){
        
        return fetch("http://localhost:3000/laptops", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(json => console.log("Nuevo producto creado: ", json))
        .catch(err => console.log(err));
    }

}

export const eliminarProducto = async (id, categoria) => {
    if(categoria == "consolas"){
        await fetch(`http://localhost:3000/consolas/${id}`, {
            method: "DELETE",
        });
    }
}
  
export const productoServices = {
    listaConsolas,
    listaLaptops,
    crearNuevoProducto,
    eliminarProducto,
}

