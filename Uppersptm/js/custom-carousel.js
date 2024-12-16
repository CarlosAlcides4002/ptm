//se agrego esta clase js con el motivo de dinamizar la pagina ptm 
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el carrusel
    var elems = document.querySelectorAll('.carousel');
    var options = {
        // Configura tus opciones del carrusel
        duration: 200,          // Duración de la transición en ms
        indicators: true,       // Indicadores de navegación
        fullWidth: true,        // Activa modo de ancho completo
    };
    // Inicializa los carruseles
    var instances = M.Carousel.init(elems, options);

    // Controlar instancias con botones (ejemplo)
    var instance = instances[0]; // Primera instancia de carrusel (si hay varios)

    // Evento siguiente
    document.querySelector('#nextButton').addEventListener('click', function () {
        instance.next(); // Mueve al siguiente slide
    });

    // Evento anterior
    document.querySelector('#prevButton').addEventListener('click', function () {
        instance.prev(); // Mueve al slide anterior
    });

    // Opción para ir al slide 3 (index comienza en 0)
    document.querySelector('#setSlideButton').addEventListener('click', function () {
        instance.set(2); // Ir directamente al tercer slide
    });
});
