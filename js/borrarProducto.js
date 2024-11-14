import { conexionAPI } from "./conexionAPI.js";

export function eventoBorrarProducto(producto) {
    producto.querySelector(".productos__boton").addEventListener("click", async (evento) => {
        try {
            evento.preventDefault();
            const id = evento.target.closest("button").dataset.id;
            await conexionAPI.eliminarProducto(id);
            producto.remove(); // Elimina el elemento de la lista en el DOM
        } catch (e) {
            alert(e);
        }
    });
}
