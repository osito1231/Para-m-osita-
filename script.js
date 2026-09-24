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
