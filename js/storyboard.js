/* =========================================================
   YAKU | STORYBOARD
   JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function() {

    /* =====================================================
       MODO CLARO / OSCURO
    ====================================================== */

    const temaBtn = document.getElementById("temaBtn");
    const temaGuardado = localStorage.getItem("temaYaku");

    if (temaGuardado === "oscuro") {
        document.body.classList.add("modo-oscuro");
    }

    temaBtn.addEventListener("click", function() {
        document.body.classList.toggle("modo-oscuro");

        if (document.body.classList.contains("modo-oscuro")) {
            localStorage.setItem("temaYaku", "oscuro");
        } else {
            localStorage.setItem("temaYaku", "claro");
        }
    });

    /* =====================================================
       MENÚ LATERAL
    ====================================================== */

    const menuBtn = document.getElementById("menuBtn");
    const menuLateral = document.getElementById("menuLateral");
    const cerrarMenu = document.getElementById("cerrarMenu");

    menuBtn.addEventListener("click", function() {
        menuLateral.classList.add("abierto");
        document.body.classList.add("bloqueado");
    });

    cerrarMenu.addEventListener("click", function() {
        menuLateral.classList.remove("abierto");
        document.body.classList.remove("bloqueado");
    });

    /* =====================================================
       SUBMENÚ DE INICIO
    ====================================================== */

    const btnInicio = document.getElementById("btnInicio");
    const submenuInicio = document.getElementById("submenuInicio");

    btnInicio.addEventListener("click", function() {
        submenuInicio.classList.toggle("abierto");
        btnInicio.classList.toggle("abierto");
    });

    /* =====================================================
       CERRAR MENÚ AL HACER CLIC EN UN ENLACE
    ====================================================== */

    const enlacesMenu = document.querySelectorAll(".menu-lateral a");

    enlacesMenu.forEach(function(enlace) {
        enlace.addEventListener("click", function() {
            menuLateral.classList.remove("abierto");
            document.body.classList.remove("bloqueado");
        });
    });

    /* =====================================================
       MODAL PARA AMPLIAR IMÁGENES
    ====================================================== */

    const modalImagen = document.getElementById("modalImagen");
    const imagenAmpliada = document.getElementById("imagenAmpliada");
    const cerrarModalImagen = document.getElementById("cerrarModalImagen");
    const imagenesStoryboard = document.querySelectorAll(".imagen-escena img");

    imagenesStoryboard.forEach(function(imagen) {
        imagen.addEventListener("click", function() {
            imagenAmpliada.src = this.src;
            imagenAmpliada.alt = this.alt;
            modalImagen.classList.add("abierto");
            document.body.classList.add("bloqueado");
        });
    });

    /* CERRAR CON BOTÓN */
    cerrarModalImagen.addEventListener("click", cerrarModal);

    /* CERRAR AL HACER CLICK FUERA DE LA IMAGEN */
    modalImagen.addEventListener("click", function(evento) {
        if (evento.target === modalImagen) {
            cerrarModal();
        }
    });

    /* CERRAR CON LA TECLA ESC */
    document.addEventListener("keydown", function(evento) {
        if (evento.key === "Escape" && modalImagen.classList.contains("abierto")) {
            cerrarModal();
        }
    });

    function cerrarModal() {
        modalImagen.classList.remove("abierto");
        document.body.classList.remove("bloqueado");
    }

});