document.querySelector('.formulario__form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita el envío del formulario de la manera tradicional

    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    const imagenFile = document.querySelector('[data-imagen]').files[0];

    if (imagenFile) {
        const imagenBase64 = await convertirImagenABase64(imagenFile);

        // Ahora puedes enviar la imagen en formato Base64 junto con los otros datos
        const respuesta = await agregarProducto(nombre, precio, imagenBase64);
        console.log(respuesta);
    } else {
        alert('Por favor, selecciona una imagen.');
    }
});

async function convertirImagenABase64(archivo) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result); // El resultado es una cadena Base64
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(archivo); // Convierte el archivo a Base64
    });
}

async function agregarProducto(nombre, precio, imagenBase64) {
    const conexion = await fetch('http://localhost:3001/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            imagen: imagenBase64 // Enviar la imagen como Base64
        })
    });

    if (!conexion.ok) {
        throw new Error('Error al agregar el producto');
    }

    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}
