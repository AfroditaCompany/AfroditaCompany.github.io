function facebook(){
    location.href="https://www.facebook.com/afroditacompany/";
}

function instagram(){
    location.href="https://www.instagram.com/afrodita_company/";
}





function mostrarPosterior(){
    document.getElementById("id_contenedor_tarjetas_carrusel_1").style.display="none";
    document.getElementById("id_contenedor_tarjetas_carrusel_2").style.display="flex";

    localStorage.setItem("estadoCarrusel", "mostrarCarrusel2");
}

function mostrarAnterior(){
    document.getElementById("id_contenedor_tarjetas_carrusel_1").style.display="flex";
    document.getElementById("id_contenedor_tarjetas_carrusel_2").style.display="none";

    localStorage.setItem("estadoCarrusel", "mostrarCarrusel1");
}


document.addEventListener("DOMContentLoaded", function () {
    const estadoGuardado = localStorage.getItem("estadoCarrusel");

    if (estadoGuardado === "mostrarCarrusel2") {
        mostrarPosterior();
    } else {
        // Si no hay un estado guardado o es otro valor, mostrar el estado predeterminado
        mostrarAnterior();
    }
});
