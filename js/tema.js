const boton = document.querySelector("[data-checkbox]");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const titulos = document.querySelectorAll("h2");
const formInputs = document.querySelectorAll(".formulario__input");
const formBotones = document.querySelectorAll("button");

// Función para activar el tema de noche
function activarTemaNoche() {
    header.classList.add("dark__header");
    formInputs.forEach((input) => input.classList.add("dark"));
    formBotones.forEach((boton) => boton.classList.add("dark"));
    main.classList.add("dark");
    titulos.forEach((h2) => h2.classList.add("dark__h2"));
    footer.classList.add("dark__footer");
}

// Función para desactivar el tema de noche
function desactivarTemaNoche() {
    header.classList.remove("dark__header");
    formInputs.forEach((input) => input.classList.remove("dark"));
    formBotones.forEach((boton) => boton.classList.remove("dark"));
    main.classList.remove("dark");
    titulos.forEach((h2) => h2.classList.remove("dark__h2"));
    footer.classList.remove("dark__footer");
}

// Al cargar la página, revisa si el tema de noche estaba activado
if (localStorage.getItem("temaNoche") === "activado") {
    activarTemaNoche();
    boton.checked = true; // Actualiza el estado del checkbox
}

// Escucha los cambios en el checkbox
boton.addEventListener("change", (event) => {
    if (event.target.checked) {
        activarTemaNoche();
        localStorage.setItem("temaNoche", "activado"); // Guarda el estado en localStorage
    } else {
        desactivarTemaNoche();
        localStorage.setItem("temaNoche", "desactivado"); // Guarda el estado en localStorage
    }
});
