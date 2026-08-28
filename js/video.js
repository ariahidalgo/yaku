/* =========================================================
   YAKU: VIDEO — AMPLIAR A PANTALLA COMPLETA
========================================================= */

(function() {

    const btnAmpliar = document.getElementById('btnAmpliarVideo');
    const modalVideo = document.getElementById('modalVideo');
    const cerrarModalVideo = document.getElementById('cerrarModalVideo');
    const videoModal = document.getElementById('videoModal');
    const videoPrincipal = document.getElementById('videoProyecto');

    // Abrir modal
    btnAmpliar.addEventListener('click', function() {
        if (!videoPrincipal.paused) {
            videoPrincipal.pause();
        }
        videoModal.currentTime = videoPrincipal.currentTime;
        modalVideo.classList.add('abierto');
        document.body.classList.add('bloqueado');
        videoModal.play().catch(function(e) {});
    });

    // Cerrar con la X
    cerrarModalVideo.addEventListener('click', function() {
        videoModal.pause();
        modalVideo.classList.remove('abierto');
        document.body.classList.remove('bloqueado');
        videoPrincipal.currentTime = videoModal.currentTime;
    });

    // Cerrar al hacer clic fuera del video
    modalVideo.addEventListener('click', function(e) {
        if (e.target === modalVideo) {
            videoModal.pause();
            modalVideo.classList.remove('abierto');
            document.body.classList.remove('bloqueado');
            videoPrincipal.currentTime = videoModal.currentTime;
        }
    });

    // Cerrar con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalVideo.classList.contains('abierto')) {
            videoModal.pause();
            modalVideo.classList.remove('abierto');
            document.body.classList.remove('bloqueado');
            videoPrincipal.currentTime = videoModal.currentTime;
        }
    });

})();