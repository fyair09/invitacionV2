const audio = document.getElementById('bg-audio');

    // Intenta reproducir automáticamente y fuerza mute si es necesario
    window.addEventListener('DOMContentLoaded', () => {
      audio.volume = 100;

      audio.play().catch(() => {
        // Si el navegador bloquea autoplay con sonido, activamos mute
        audio.muted = false;
        audio.play();
      });
    });