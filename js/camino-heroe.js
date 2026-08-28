/* =========================================================
   YAKU: EL AGUA NO SE DERRAMA
   CAMINO DEL HÉROE
========================================================= */


/* =========================================================
   BOTÓN DEL MENÚ
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const menuLateral = document.getElementById("menuLateral");
const cerrarMenu = document.getElementById("cerrarMenu");


menuBtn.addEventListener("click", () => {

    menuLateral.classList.add("abierto");

});


cerrarMenu.addEventListener("click", () => {

    menuLateral.classList.remove("abierto");

});


/* =========================================================
   CERRAR MENÚ AL HACER CLIC EN UN ENLACE
========================================================= */

const enlacesMenu = document.querySelectorAll(".menu-lateral a");

enlacesMenu.forEach(enlace => {

    enlace.addEventListener("click", () => {

        menuLateral.classList.remove("abierto");

    });

});


/* =========================================================
   SUBMENÚ INICIO
========================================================= */

const btnInicio = document.getElementById("btnInicio");
const submenuInicio = document.getElementById("submenuInicio");


btnInicio.addEventListener("click", () => {

    btnInicio.classList.toggle("abierto");

    submenuInicio.classList.toggle("abierto");

});


/* =========================================================
   CAMBIO DE TEMA
========================================================= */

const temaBtn = document.getElementById("temaBtn");


temaBtn.addEventListener("click", () => {

    document.body.classList.toggle("oscuro");


    /* Guardar preferencia */

    if (document.body.classList.contains("oscuro")) {

        localStorage.setItem("temaYaku", "oscuro");

    } else {

        localStorage.setItem("temaYaku", "claro");

    }

});


/* =========================================================
   RECUPERAR TEMA
========================================================= */

const temaGuardado = localStorage.getItem("temaYaku");


if (temaGuardado === "oscuro") {

    document.body.classList.add("oscuro");

}


/* =========================================================
   CERRAR MENÚ CON ESC
========================================================= */

document.addEventListener("keydown", (evento) => {

    if (evento.key === "Escape") {

        menuLateral.classList.remove("abierto");

    }

});


/* =========================================================
   ANIMACIÓN SUAVE DE LAS FILAS
========================================================= */

const filas = document.querySelectorAll("tbody tr");


const observador = new IntersectionObserver(

    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.style.animation =
                    "aparecer 0.6s ease forwards";

                observador.unobserve(entrada.target);

            }

        });

    },

    {
        threshold: 0.08
    }

);


filas.forEach((fila, indice) => {

    fila.style.opacity = "0";

    fila.style.animationDelay =
        `${indice * 0.04}s`;

    observador.observe(fila);

});