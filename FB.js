const juegos = [
    "Minecraft",
    "Fortnite",
    "Valorant",
    "GTA V",
    "FIFA",
    "Rocket League"
];

const contenedor = document.getElementById("contenedor");
const boton = document.getElementById("btnResaltar");

function mostrarJuegos() {
    contenedor.innerHTML = "";

    juegos.forEach(juego => {
        const tarjeta = document.createElement("div");

        tarjeta.classList.add("tarjeta");
        tarjeta.textContent = juego;

        contenedor.appendChild(tarjeta);
    });
}

mostrarJuegos();

boton.addEventListener("click", () => {
    const tarjetas = document.querySelectorAll(".tarjeta");

    tarjetas.forEach(tarjeta => {
        tarjeta.classList.toggle("destacada");
    });
});