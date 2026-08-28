/* =========================================================
   YAKU: EL AGUA NO SE DERRAMA
   JAVASCRIPT DEL GUION
========================================================= */

/* =========================================================
   BOTÓN DEL MENÚ
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const menuLateral = document.getElementById("menuLateral");
const cerrarMenu = document.getElementById("cerrarMenu");

menuBtn.addEventListener("click", () => {
    menuLateral.classList.add("abierto");
    document.body.classList.add("bloqueado");
});

cerrarMenu.addEventListener("click", () => {
    menuLateral.classList.remove("abierto");
    document.body.classList.remove("bloqueado");
});

/* =========================================================
   CERRAR MENÚ AL HACER CLIC EN UN ENLACE
========================================================= */

const enlacesMenu = document.querySelectorAll(".menu-lateral a");

enlacesMenu.forEach(enlace => {
    enlace.addEventListener("click", () => {
        menuLateral.classList.remove("abierto");
        document.body.classList.remove("bloqueado");
    });
});

/* =========================================================
   SUBMENÚ INICIO
========================================================= */

const btnInicio = document.getElementById("btnInicio");
const submenuInicio = document.getElementById("submenuInicio");

btnInicio.addEventListener("click", () => {
    submenuInicio.classList.toggle("abierto");
    btnInicio.classList.toggle("abierto");
});

/* =========================================================
   CAMBIO DE TEMA
========================================================= */

const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
    const modoOscuro = document.body.classList.contains("oscuro");
    localStorage.setItem("temaYaku", modoOscuro ? "oscuro" : "claro");
});

/* =========================================================
   RECUPERAR TEMA
========================================================= */

const temaGuardado = localStorage.getItem("temaYaku");

if (temaGuardado === "oscuro") {
    document.body.classList.add("oscuro");
}

/* =========================================================
   ANIMACIÓN DE MENSAJES
========================================================= */

const mensajes = document.querySelectorAll(".mensaje");

const observador = new IntersectionObserver(
    (entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
                observador.unobserve(entrada.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

mensajes.forEach((mensaje, indice) => {
    mensaje.style.animationDelay = `${indice * 0.04}s`;
    observador.observe(mensaje);
});