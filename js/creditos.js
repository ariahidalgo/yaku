/* =========================================================
   YAKU: EL AGUA NO SE DERRAMA
   JAVASCRIPT - CRÉDITOS
========================================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       ELEMENTOS DEL MENÚ
    ===================================================== */

    const menuBtn = document.getElementById("menuBtn");

    const menuLateral =
        document.getElementById("menuLateral");

    const cerrarMenu =
        document.getElementById("cerrarMenu");

    const btnInicio =
        document.getElementById("btnInicio");

    const submenuInicio =
        document.getElementById("submenuInicio");

    const temaBtn =
        document.getElementById("temaBtn");


    /* =====================================================
       ABRIR MENÚ
    ===================================================== */

    if (menuBtn) {

        menuBtn.addEventListener("click", function () {

            menuLateral.classList.add("abierto");

            document.body.classList.add("bloqueado");

        });

    }


    /* =====================================================
       CERRAR MENÚ
    ===================================================== */

    if (cerrarMenu) {

        cerrarMenu.addEventListener("click", function () {

            menuLateral.classList.remove("abierto");

            document.body.classList.remove("bloqueado");

        });

    }


    /* =====================================================
       SUBMENÚ INICIO
    ===================================================== */

    if (btnInicio) {

        btnInicio.addEventListener("click", function () {

            btnInicio.classList.toggle("abierto");

            submenuInicio.classList.toggle("abierto");

        });

    }


    /* =====================================================
       CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
    ===================================================== */

    const enlacesMenu =
        document.querySelectorAll(".menu-lateral a");


    enlacesMenu.forEach(function (enlace) {

        enlace.addEventListener("click", function () {

            menuLateral.classList.remove("abierto");

            document.body.classList.remove("bloqueado");

        });

    });


    /* =====================================================
       MODO OSCURO
    ===================================================== */

    const temaGuardado =
        localStorage.getItem("yaku-tema");


    if (temaGuardado === "oscuro") {

        document.body.classList.add("oscuro");

    }


    if (temaBtn) {

        temaBtn.addEventListener("click", function () {

            document.body.classList.toggle("oscuro");


            if (document.body.classList.contains("oscuro")) {

                localStorage.setItem(
                    "yaku-tema",
                    "oscuro"
                );

            } else {

                localStorage.setItem(
                    "yaku-tema",
                    "claro"
                );

            }

        });

    }


    /* =====================================================
       ESC PARA CERRAR EL MENÚ
    ===================================================== */

    document.addEventListener("keydown", function (evento) {

        if (evento.key === "Escape") {

            menuLateral.classList.remove("abierto");

            document.body.classList.remove("bloqueado");

        }

    });


});