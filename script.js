// Variables principales
let puntos = 0;
let multiplicador = 1;
const puntosElemento = document.getElementById("points");
const multiplicadorElemento = document.getElementById("multiplier");
const clickBoton = document.getElementById("click-button");
const contenedorCartas = document.getElementById("cards");

// Función para actualizar puntos
function actualizarPuntos() {
  puntos += 1 * multiplicador;
  puntosElemento.textContent = puntos;
}

// Al hacer clic
clickBoton.addEventListener("click", actualizarPuntos);

// Simulación de cartas NFT
const cartas = [
  {
    nombre: "🔥 Fénix Dorado",
    imagen: "https://via.placeholder.com/100x100?text=Fénix",
    bonus: 2,
    descripcion: "Multiplica tus puntos por 2."
  },
  {
    nombre: "🌊 Leviatán de Agua",
    imagen: "https://via.placeholder.com/100x100?text=Leviatán",
    bonus: 3,
    descripcion: "Multiplica tus puntos por 3."
  },
  {
    nombre: "⚡ Dragón Eléctrico",
    imagen: "https://via.placeholder.com/100x100?text=Dragón",
    bonus: 4,
    descripcion: "Multiplica tus puntos por 4."
  }
];

// Mostrar cartas simuladas y aplicar bonus
function cargarCartasJugador() {
  cartas.forEach(carta => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="${carta.imagen}" alt="${carta.nombre}">
      <h3>${carta.nombre}</h3>
      <p>${carta.descripcion}</p>
    `;
    contenedorCartas.appendChild(div);
    multiplicador *= carta.bonus; // Aplicar bonus al multiplicador
  });

  multiplicadorElemento.textContent = multiplicador;
}

document.getElementById("loginButton").addEventListener("click", loginWithWallet);

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginButton");
  if (loginBtn) {
    loginBtn.addEventListener("click", loginWithWallet);
  } else {
    console.error("No se encontró el botón con ID loginButton");
  }
});

// Iniciar juego
cargarCartasJugador();
