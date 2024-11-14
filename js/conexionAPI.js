// Función para listar productos
async function listarProductos() {
    const conexion = await fetch('http://localhost:3001/productos');
    const conexionConvertida = await conexion.json(); 
    return conexionConvertida;
}

// Función para agregar un producto
async function agregarProducto(nombre, precio, imagen) {
    const conexion = await fetch('http://localhost:3001/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            imagen: imagen
        })
    });

    if (!conexion.ok) {
        throw new Error('Error al agregar el producto');
    }

    const conexionConvertida = await conexion.json(); 
    return conexionConvertida;
}

// Función para eliminar un producto
async function eliminarProducto(id) {
    const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE"
    });

    if (!conexion.ok) {
        throw new Error('Error al eliminar el producto');
    }

    const conexionConvertida = await conexion.json(); 
    return conexionConvertida;
}

export const conexionAPI = {
    listarProductos,
    agregarProducto,
    eliminarProducto
}
