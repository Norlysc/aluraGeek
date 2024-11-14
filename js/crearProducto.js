import { conexionAPI } from "./conexionAPI";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento) {
    // Prevenir el comportamiento por defecto de enviar el formulario
    evento.preventDefault();


    const nombre = document.querySelector("[data-nombre]").value;
    const precio = parseFloat(document.querySelector("[data-precio]").value);
    const imagen = document.querySelector("[data-imagen]").value;

    const mensaje = document.createElement("p");
    formulario.appendChild(mensaje);
    try {
        if (isNaN(precio)) { // Comprobar si precio es un número
            mensaje.textContent = "El precio debe ser un número válido";
            mensaje.classList.add("mensaje__error");
        } else {
            await conexionAPI.agregarProducto(nombre, precio, imagen);
        }
    } catch (e) {
        alert(e)
    }
}

formulario.addEventListener("submit", (evento) => {
    crearProducto(evento);
});

