/* =========================================================
   YAKU: EVIDENCIA IA — AMPLIAR IMÁGENES
========================================================= */

(function() {

    // Obtener todas las imágenes ampliables
    const imagenes = document.querySelectorAll('.imagen-ampliable');
    const modal = document.getElementById('modalImagen');
    const imagenModal = document.getElementById('imagenModal');
    const cerrarModal = document.getElementById('cerrarModal');

    // Abrir modal con la imagen
    imagenes.forEach(function(imagen) {
        imagen.addEventListener('click', function() {
            imagenModal.src = this.src;
            imagenModal.alt = this.alt || 'Imagen ampliada';
            modal.classList.add('abierto');
            document.body.classList.add('bloqueado');
        });
    });

    // Cerrar con la X
    if (cerrarModal) {
        cerrarModal.addEventListener('click', function() {
            modal.classList.remove('abierto');
            document.body.classList.remove('bloqueado');
        });
    }

    // Cerrar al hacer clic fuera de la imagen
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('abierto');
            document.body.classList.remove('bloqueado');
        }
    });

    // Cerrar con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('abierto')) {
            modal.classList.remove('abierto');
            document.body.classList.remove('bloqueado');
        }
    });

})();