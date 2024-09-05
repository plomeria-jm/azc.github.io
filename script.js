// Animación de Scroll para la Sección de Servicios
window.addEventListener('scroll', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    const triggerPoint = window.innerHeight / 1.2;

    serviceCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerPoint) {
            card.classList.add('visible');
        }
    });
});


// Animación de Scroll para la Sección de Servicios
window.addEventListener('scroll', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    const triggerPoint = window.innerHeight * 0.8; // Ajustado el triggerPoint para mejor precisión

    serviceCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerPoint) {
            card.classList.add('visible');
        } else {
            card.classList.remove('visible'); // Remover la clase si la tarjeta ya no está en el punto de activación
        }
    });
});