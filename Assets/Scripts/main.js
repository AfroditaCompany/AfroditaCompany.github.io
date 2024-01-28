document.addEventListener("DOMContentLoaded", function () {
    // Configura el intervalo para cambiar las imágenes cada 3 segundos
    setInterval(cambiarImagen, 3000);
    // Inicializa los indicadores
    inicializarIndicadores();
});

let indiceImagen = 0;

function cambiarImagen() {
    const carrusel = document.getElementById("carrusel");
    const anchoImagen = document.querySelector(".imagen_tarjeta_portada_2").width;

    if (indiceImagen < 2) {
        indiceImagen++;
    } else {
        indiceImagen = 0;
    }

    carrusel.style.transform = `translateX(${-anchoImagen * indiceImagen}px)`;

    // Actualiza los indicadores
    actualizarIndicadores();
}

function inicializarIndicadores() {
    const carrusel = document.getElementById("carrusel");
    const totalImagenes = carrusel.children.length;

    const indicadoresContainer = document.getElementById("indicadores");

    for (let i = 0; i < totalImagenes; i++) {
        const indicador = document.createElement("div");
        indicador.classList.add("indicador");
        indicador.addEventListener("click", () => cambiarImagenPorIndicador(i));
        indicadoresContainer.appendChild(indicador);
    }

    // Marca el primer indicador como activo
    actualizarIndicadores();
}

function actualizarIndicadores() {
    const indicadores = document.querySelectorAll(".indicador");

    indicadores.forEach((indicador, i) => {
        indicador.classList.toggle("activo", i === indiceImagen);
    });
}

function cambiarImagenPorIndicador(indice) {
    indiceImagen = indice;
    cambiarImagen();
}





// Supongamos que la página tiene un total de 100% de contenido
const contenidoTotal = 100;

// Función para actualizar la barra de progreso
function actualizarProgreso() {
    // Obtener la posición actual del usuario en la página
    const posicionActual = window.scrollY || window.pageYOffset;
    // Obtener la altura total de la página
    const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
    // Calcular el progreso en porcentaje
    const progreso = (posicionActual / alturaTotal) * contenidoTotal;

    // Actualizar el valor de la barra de progreso
    document.getElementById('barraProgreso').value = progreso;
}

// Asociar la función a eventos de desplazamiento
window.addEventListener('scroll', actualizarProgreso);
window.addEventListener('resize', actualizarProgreso);
document.addEventListener('DOMContentLoaded', actualizarProgreso);