document.addEventListener("DOMContentLoaded", function() {
    var progressBar = document.getElementById("myBar");

    // Obtén la altura total de la página
    var totalHeight = document.body.scrollHeight - window.innerHeight;

    window.onscroll = function() {
        // Calcula el progreso basado en la posición de desplazamiento
        var progress = (window.pageYOffset / totalHeight) * 100;
        progressBar.style.width = progress + "%";
    };
});
