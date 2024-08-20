document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var overlay = document.querySelector('.overlay');
        overlay.classList.add('fade-out');

        overlay.addEventListener('animationend', function() {
            overlay.style.display = 'none';

            // Activar animación del logo después de que el overlay desaparezca
            var logoImage = document.querySelector('.logo-container img');
            logoImage.classList.add('animate-logo');
        });
    }, 2000); // Tiempo de carga simulado en milisegundos (2000 = 2 segundos)
});
