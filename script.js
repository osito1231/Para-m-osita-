document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("openBtn");
  const contenido = document.getElementById("contenido");
  const cover = document.getElementById("cover");
  const music = document.getElementById("bgMusic");
  const toggle = document.getElementById("musicToggle");
  const vol = document.getElementById("volume");

  // =========================
  // ABRIR SORPRESA
  // =========================

  if (btn) {
    btn.addEventListener("click", () => {

      // Mostrar TODO el contenido
      if (contenido) {
        contenido.classList.remove("hidden");
        contenido.style.display = "block";
        contenido.style.visibility = "visible";
        contenido.style.opacity = "1";
      }

      // Música
      if (music) {
        music.volume = 0.72;
        music.play().catch(() => {});
      }

      // Quitar portada
      if (cover) {
        cover.style.transition = "opacity .7s ease";
        cover.style.opacity = "0";

        setTimeout(() => {
          cover.style.display = "none";

          // Nos lleva al principio de la sorpresa
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }, 700);
      }
    });
  }


  // =========================
  // CONTADOR ❤️
  // =========================

  const start = new Date("2025-12-05T11:00:00-05:00");

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  function updateCounter() {

    let diff = Date.now() - start.getTime();

    if (diff < 0) diff = 0;

    const total = Math.floor(diff / 1000);

    const days = Math.floor(total / 86400);
    const hours = Math.floor((total % 86400) / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const seconds = total % 60;

    if (daysEl) daysEl.textContent = days;

    if (hoursEl)
      hoursEl.textContent = String(hours).padStart(2, "0");

    if (minutesEl)
      minutesEl.textContent = String(minutes).padStart(2, "0");

    if (secondsEl)
      secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  updateCounter();
  setInterval(updateCounter, 1000);


  // =========================
  // PLAY / PAUSA
  // =========================

  if (toggle && music) {

    toggle.addEventListener("click", () => {

      if (music.paused) {

        music.play().catch(() => {});

        toggle.textContent = "Ⅱ Pausar música";

      } else {

        music.pause();

        toggle.textContent = "▶ Reproducir música";
      }

    });
  }


  // =========================
  // VOLUMEN
  // =========================

  if (vol && music) {

    vol.addEventListener("input", () => {

      music.volume = Number(vol.value);

    });
  }


  // =========================
  // ANIMACIONES
  // =========================

  const elements = document.querySelectorAll(
    ".reveal, .letter-section, .counter-section, .music-section"
  );

  const observer = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

        }

      });

    },
    {
      threshold: 0.08
    }
  );

  elements.forEach(el => observer.observe(el));


  // =========================
  // CORAZONES ❤️
  // =========================

  function createHeart() {

    // Solo después de abrir la sorpresa
    if (cover && cover.style.display !== "none") return;

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    const emojis = ["❤️", "💕", "🩷"];

    heart.textContent =
      emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left =
      Math.random() * 95 + "vw";

    heart.style.fontSize =
      (14 + Math.random() * 10) + "px";

    heart.style.animationDuration =
      (7 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 11000);
  }

  setInterval(createHeart, 2600);

});
