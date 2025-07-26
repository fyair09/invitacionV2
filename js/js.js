  // Bloquea el clic derecho
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();

      // Bloquea menú contextual en móviles (mantener pulsado)
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    });

    // Bloquea pulsación larga
    document.addEventListener('touchstart', function preventTouch(e) {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    }, { passive: false });