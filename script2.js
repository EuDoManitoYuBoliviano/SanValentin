document.getElementById("mostrarBtn").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("contenidoOculto").classList.toggle("hidden");
});