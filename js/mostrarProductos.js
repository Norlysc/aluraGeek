import { conexionAPI } from "./conexionAPI.js";
import { eventoBorrarProducto } from "./borrarProducto.js";

const lista = document.querySelector("[data-lista]");

function crearCarta(id, nombre, imagen, precio) {
    const producto = document.createElement("li");
    producto.className = "productos__item";
    producto.innerHTML = `
        <img class="productos__imagen" src="${imagen}" alt="${nombre}">
        <p class="productos__nombre">${nombre}</p>
        <div class="productos__info">
            <p class="productos__precio">$ ${precio}</p>
            <button class="productos__boton" data-id="${id}">
                <img class="boton__eliminar" src="/assets/Vector.png" alt="boton eliminar">
            </button>
        </div>`;

    eventoBorrarProducto(producto); // Llama a la función para agregar el evento
    return producto;
}

async function listarProductos() {

    try {
        const listaAPI = await conexionAPI.listarProductos();
        listaAPI.forEach(producto => lista.appendChild(crearCarta(producto.id, producto.nombre, producto.imagen, producto.precio)));
    } catch {
        lista.innerHTML = "<h2 class='mensaje__no-encontrado'>No se encontraron productos :(</h2>"
    }
}

listarProductos();
