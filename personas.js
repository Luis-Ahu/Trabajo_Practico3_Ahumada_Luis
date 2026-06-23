const formulario = document.getElementById("formulario");
const tablaPersonas = document.getElementById("tablaPersonas");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;

    const imc = (peso / (altura * altura)).toFixed(2);

    const fila = document.createElement("tr");

    fila.innerHTML =
        "<td>" + nombre + "</td>" +
        "<td>" + apellido + "</td>" +
        "<td>" + edad + "</td>" +
        "<td>" + altura + "</td>" +
        "<td>" + peso + "</td>" +
        "<td>" + imc + "</td>" +
        "<td><button class='eliminar'>Eliminar</button></td>";

    tablaPersonas.appendChild(fila);

    const botonEliminar = fila.querySelector(".eliminar");

    botonEliminar.addEventListener("click", function() {
        fila.remove();
    });

    formulario.reset();

});