const btn = document.getElementById("openBtn");
const main = document.getElementById("contenido");
const cover = document.getElementById("inicio");
const music = document.getElementById("bgMusic");

btn.addEventListener("click", () => {

  // Música
  music.volume = 0.72;
  music.play().catch(() => {});

  // Quitar portada
  cover.style.display = "none";

  // Mostrar contenido
  main.classList.remove("hidden");
  main.style.display = "block";
  main.style.opacity = "1";
  main.style.visibility = "visible";

  // Mostrar las secciones
  document.querySelectorAll(".reveal").forEach(el => {
    el.classList.add("show");
  });

  // Volver arriba
  window.scrollTo(0, 0);
});


// ❤️ CONTADOR

const start = new Date("2025-12-05T11:00:00-05:00");

function tick() {

  const total = Math.max(
    0,
    Math.floor((Date.now() - start.getTime()) / 1000)
  );

  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");
}

tick();
setInterval(tick, 1000);


// 🎵 CONTROLES DE MÚSICA

const toggle = document.getElementById("musicToggle");
const volume = document.getElementById("volume");

toggle.addEventListener("click", () => {

  if (music.paused) {
    music.play();
    toggle.textContent = "❚❚ Pausar música";
  } else {
    music.pause();
    toggle.textContent = "▶ Reproducir música";
  }

});

volume.addEventListener("input", () => {
  music.volume = Number(volume.value);
});
// ==========================================
// ❤️ CORAZONES FLOTANTES
// ==========================================

const heartLayer = document.createElement("div");
heartLayer.className = "floating-hearts";
document.body.appendChild(heartLayer);

function crearCorazon() {
  const heart = document.createElement("span");

  heart.className = "floating-heart";

  const corazones = ["♡", "♥", "♡"];
  heart.textContent =
    corazones[Math.floor(Math.random() * corazones.length)];

  heart.style.left =
    Math.random() * 100 + "%";

  heart.style.fontSize =
    12 + Math.random() * 18 + "px";

  heart.style.animationDuration =
    8 + Math.random() * 6 + "s";

  heart.style.animationDelay =
    Math.random() * 1 + "s";

  heartLayer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 15000);
}

setInterval(crearCorazon, 1400);

/* =========================================
   ❤️ CORAZONES FLOTANTES DEL FONDO
   ========================================= */

.heart-layer {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 2;
}

.floating-heart {
  position: absolute;
  bottom: -50px;

  color: #f2c4d7;
  opacity: 0;

  pointer-events: none;

  text-shadow:
    0 0 8px rgba(242,196,215,.45),
    0 0 18px rgba(242,196,215,.20);

  animation-name: subirCorazon;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

@keyframes subirCorazon {

  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }

  12% {
    opacity: .55;
  }

  75% {
    opacity: .35;
  }

  100% {
    transform: translateY(-115vh) rotate(25deg);
    opacity: 0;
  }
}

/* La página queda por encima de los corazones */

.cover,
#contenido {
  position: relative;
  z-index: 3;
}
