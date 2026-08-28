/* =========================================================
   YAKU: EL AGUA NO SE DERRAMA
   JAVASCRIPT - MENCIÓN DESARROLLO DE SOFTWARE
========================================================= */


/* =========================================================
   ELEMENTOS DEL MENÚ
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const menuLateral = document.getElementById("menuLateral");
const cerrarMenu = document.getElementById("cerrarMenu");

const btnInicio = document.getElementById("btnInicio");
const submenuInicio = document.getElementById("submenuInicio");


/* =========================================================
   ABRIR MENÚ
========================================================= */

menuBtn.addEventListener("click", () => {

    menuLateral.classList.add("abierto");

});


/* =========================================================
   CERRAR MENÚ
========================================================= */

cerrarMenu.addEventListener("click", () => {

    menuLateral.classList.remove("abierto");

});


/* =========================================================
   SUBMENÚ INICIO
========================================================= */

btnInicio.addEventListener("click", () => {

    submenuInicio.classList.toggle("abierto");

    btnInicio.classList.toggle("abierto");

});


/* =========================================================
   CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
========================================================= */

const enlacesMenu = document.querySelectorAll(
    ".menu-lateral a"
);


enlacesMenu.forEach((enlace) => {

    enlace.addEventListener("click", () => {

        menuLateral.classList.remove("abierto");

    });

});


/* =========================================================
   CERRAR MENÚ CON ESCAPE
========================================================= */

document.addEventListener("keydown", (evento) => {

    if (evento.key === "Escape") {

        menuLateral.classList.remove("abierto");

    }

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
   ANIMACIÓN SUAVE AL HACER SCROLL
========================================================= */

const elementosAnimados = document.querySelectorAll(
    ".burbuja-chat, .mockup, .tabla-contenedor, .conclusion-tarjeta"
);


const observador = new IntersectionObserver(

    (elementos) => {

        elementos.forEach((elemento) => {

            if (elemento.isIntersecting) {

                elemento.target.style.animation =
                    "aparecer 0.8s ease forwards";

                observador.unobserve(elemento.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


elementosAnimados.forEach((elemento) => {

    elemento.style.opacity = "0";

    observador.observe(elemento);

});