/* =========================================================
   YAKU: EL AGUA NO SE DERRAMA
   JAVASCRIPT PRINCIPAL
========================================================= */


/* =========================================================
   MENÚ LATERAL
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const menuLateral = document.getElementById("menuLateral");
const cerrarMenu = document.getElementById("cerrarMenu");


/* ABRIR MENÚ */

menuBtn.addEventListener("click", () => {

    menuLateral.classList.add("abierto");

    document.body.classList.add("bloqueado");

});


/* CERRAR MENÚ */

cerrarMenu.addEventListener("click", () => {

    menuLateral.classList.remove("abierto");

    document.body.classList.remove("bloqueado");

});


/* =========================================================
   SUBMENÚ DE INICIO
========================================================= */

const btnInicio = document.getElementById("btnInicio");
const submenuInicio = document.getElementById("submenuInicio");


btnInicio.addEventListener("click", () => {

    submenuInicio.classList.toggle("abierto");

    btnInicio.classList.toggle("abierto");

});


/* =========================================================
   CERRAR MENÚ AL HACER CLIC EN UNA SECCIÓN DEL INICIO
========================================================= */

const enlacesInternos =
    document.querySelectorAll(".submenu a");


enlacesInternos.forEach((enlace) => {

    enlace.addEventListener("click", () => {

        menuLateral.classList.remove("abierto");

        document.body.classList.remove("bloqueado");

    });

});


/* =========================================================
   MODO CLARO Y OSCURO
========================================================= */

const temaBtn = document.getElementById("temaBtn");


temaBtn.addEventListener("click", () => {

    document.body.classList.toggle("oscuro");

});


/* =========================================================
   CARRUSEL DEL RELATO
========================================================= */

const slides = document.querySelectorAll(".slide");
const puntos = document.querySelectorAll(".punto");

const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");


let slideActual = 0;


/* MOSTRAR UNA IMAGEN */

function mostrarSlide(indice) {

    slides.forEach((slide) => {

        slide.classList.remove("activo");

    });


    puntos.forEach((punto) => {

        punto.classList.remove("activo");

    });


    slides[indice].classList.add("activo");

    puntos[indice].classList.add("activo");

    slideActual = indice;

}


/* SIGUIENTE IMAGEN */

siguiente.addEventListener("click", () => {

    let nuevoSlide = slideActual + 1;


    if (nuevoSlide >= slides.length) {

        nuevoSlide = 0;

    }


    mostrarSlide(nuevoSlide);

});


/* IMAGEN ANTERIOR */

anterior.addEventListener("click", () => {

    let nuevoSlide = slideActual - 1;


    if (nuevoSlide < 0) {

        nuevoSlide = slides.length - 1;

    }


    mostrarSlide(nuevoSlide);

});


/* CAMBIAR CON LOS PUNTOS */

puntos.forEach((punto, indice) => {

    punto.addEventListener("click", () => {

        mostrarSlide(indice);

    });

});


/* =========================================================
   MODAL PARA AMPLIAR IMÁGENES
========================================================= */

const imagenes =
    document.querySelectorAll(".imagen-ampliable");

const modal =
    document.getElementById("modalImagen");

const imagenModal =
    document.getElementById("imagenModal");

const cerrarModal =
    document.getElementById("cerrarModal");


/* ABRIR IMAGEN */

imagenes.forEach((imagen) => {

    imagen.addEventListener("click", () => {

        imagenModal.src = imagen.src;

        imagenModal.alt = imagen.alt;

        modal.classList.add("abierto");

        document.body.classList.add("bloqueado");

    });

});


/* CERRAR CON LA X */

cerrarModal.addEventListener("click", () => {

    modal.classList.remove("abierto");

    document.body.classList.remove("bloqueado");

});


/* CERRAR AL HACER CLIC FUERA DE LA IMAGEN */

modal.addEventListener("click", (evento) => {

    if (evento.target === modal) {

        modal.classList.remove("abierto");

        document.body.classList.remove("bloqueado");

    }

});


/* =========================================================
   CERRAR ELEMENTOS CON LA TECLA ESC
========================================================= */

document.addEventListener("keydown", (evento) => {

    if (evento.key === "Escape") {

        /* Cerrar menú */
        menuLateral.classList.remove("abierto");

        /* Cerrar modal */
        modal.classList.remove("abierto");

        /* Desbloquear la página */
        document.body.classList.remove("bloqueado");

    }

});