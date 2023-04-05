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

        return await fetch(`http://localhost:3000/consolas/${id}`, {
            method: "DELETE",
        });
        
    }else if(categoria == "laptops"){
        
        return await fetch(`http://localhost:3000/laptops/${id}`, {
            method: "DELETE",
        });

    }
}

export const actualizarProducto = async (id, url, categoria, nombre, precio, descripcion) => {
    
    if(categoria == "consolas"){

        return await fetch(`http://localhost:3000/consolas/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id, url, categoria, nombre, precio, descripcion}),
        })
        .then(response => response)
        .catch(error => console.log(error));
        
    }else if(categoria == "laptops"){
        
        return await fetch(`http://localhost:3000/laptops/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id, url, categoria, nombre, precio, descripcion}),
        })
        .then(response => console.log(response.json))
        .catch(error => console.log(error));
        
    }
}

export const buscarProducto = async (buscar) => {
    try {
        const consolasResponse = await fetch(`http://localhost:3000/consolas?nombre_like=${buscar}`);
        const laptopsResponse = await fetch(`http://localhost:3000/laptops?nombre_like=${buscar}`);
        
        const [consolasProductos, laptopsProductos] = await Promise.all([consolasResponse, laptopsResponse].map(resp => resp.json()));
    
        const productos = [...consolasProductos, ...laptopsProductos];
        
        if (productos.length === 0) {
          throw new Error('Producto no encontrado');
        }
    
        return productos;
    
      } catch (error) {
        console.error(error);
      }
}

export const detallesProducto = async (id) =>{
    try{

        const consolasResponse = fetch(`http://localhost:3000/consolas/${id}`);
        const laptopsResponse = fetch(`http://localhost:3000/laptops/${id}`);

        const [consolasProducto, laptopsProducto] = await Promise.all([consolasResponse, laptopsResponse]);
        
        if (consolasProducto.status === 404 && laptopsProducto.status === 404) {
        throw new Error('Producto no encontrado');
        }

        let producto;
        
        if (consolasProducto.status === 200) {
        producto = await consolasProducto.json();
        } else {
        producto = await laptopsProducto.json();
        }

        return producto;

    } catch (error) {
        console.error(error);
    }
}


  
export const productoServices = {
    listaConsolas,
    listaLaptops,
    crearNuevoProducto,
    eliminarProducto,
    actualizarProducto,
    detallesProducto,
    buscarProducto,
}

