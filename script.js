alert("JS FUNCIONA ❤️");

// ==========================================
// 🧸 PARA MI OSITA ❤️
// JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("openBtn");
  const main = document.getElementById("contenido");
  const cover = document.getElementById("inicio");
  const music = document.getElementById("bgMusic");

  const toggle = document.getElementById("musicToggle");
  const volume = document.getElementById("volume");


  // ==========================================
  // ❤️ ABRIR SORPRESA
  // ==========================================

  if (btn && main && cover) {

    btn.addEventListener("click", () => {

      // Mostrar contenido
      main.classList.remove("hidden");

      main.style.display = "block";
      main.style.opacity = "1";
      main.style.visibility = "visible";

      // Mostrar secciones
      document.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("show");
      });


      // ======================================
      // 🎵 INICIAR MÚSICA
      // ======================================

      if (music) {

        music.volume = 0.72;

        music.play()
          .then(() => {

            if (toggle) {
              toggle.textContent = "❚❚ Pausar música";
            }

          })
          .catch((error) => {

            console.log(
              "Safari no permitió iniciar el audio:",
              error
            );

            if (toggle) {
              toggle.textContent = "▶ Reproducir música";
            }

          });

      }


      // ======================================
      // 🧸 QUITAR PORTADA
      // ======================================

      cover.style.display = "none";


      // Volver arriba
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });

    });

  }


  // ==========================================
  // ❤️ CONTADOR
  // ==========================================

  const start =
    new Date("2025-12-05T11:00:00-05:00");


  function tick() {

    const total = Math.max(
      0,
      Math.floor(
        (Date.now() - start.getTime()) / 1000
      )
    );


    const days =
      Math.floor(total / 86400);

    const hours =
      Math.floor((total % 86400) / 3600);

    const minutes =
      Math.floor((total % 3600) / 60);

    const seconds =
      total % 60;


    const daysEl =
      document.getElementById("days");

    const hoursEl =
      document.getElementById("hours");

    const minutesEl =
      document.getElementById("minutes");

    const secondsEl =
      document.getElementById("seconds");


    if (daysEl) {
      daysEl.textContent = days;
    }

    if (hoursEl) {
      hoursEl.textContent =
        String(hours).padStart(2, "0");
    }

    if (minutesEl) {
      minutesEl.textContent =
        String(minutes).padStart(2, "0");
    }

    if (secondsEl) {
      secondsEl.textContent =
        String(seconds).padStart(2, "0");
    }

  }


  tick();

  setInterval(tick, 1000);


  // ==========================================
  // 🎵 BOTÓN PLAY / PAUSA
  // ==========================================

  if (toggle && music) {

    toggle.addEventListener("click", () => {

      if (music.paused) {

        music.play()
          .then(() => {

            toggle.textContent =
              "❚❚ Pausar música";

          })
          .catch((error) => {

            console.log(
              "No se pudo reproducir:",
              error
            );

          });

      } else {

        music.pause();

        toggle.textContent =
          "▶ Reproducir música";

      }

    });

  }


  // ==========================================
  // 🔊 VOLUMEN
  // ==========================================

  if (volume && music) {

    music.volume =
      Number(volume.value);


    volume.addEventListener(
      "input",
      () => {

        music.volume =
          Number(volume.value);

      }
    );

  }


  // ==========================================
  // ❤️ CORAZONES FLOTANTES
  // ==========================================

  const heartLayer =
    document.createElement("div");

  heartLayer.className =
    "floating-hearts";

  document.body.appendChild(
    heartLayer
  );


  function crearCorazon() {

    const heart =
      document.createElement("span");


    heart.className =
      "floating-heart";


    const corazones = [
      "♡",
      "♥",
      "♡"
    ];


    heart.textContent =
      corazones[
        Math.floor(
          Math.random() *
          corazones.length
        )
      ];


    heart.style.left =
      Math.random() * 100 + "%";


    heart.style.fontSize =
      12 +
      Math.random() * 18 +
      "px";


    heart.style.animationDuration =
      8 +
      Math.random() * 6 +
      "s";


    heart.style.animationDelay =
      Math.random() +
      "s";


    heartLayer.appendChild(
      heart
    );


    setTimeout(() => {

      heart.remove();

    }, 15000);

  }


  // Crear algunos desde el principio

  for (let i = 0; i < 5; i++) {

    setTimeout(
      crearCorazon,
      i * 350
    );

  }


  // Seguir creando corazones

  setInterval(
    crearCorazon,
    1400
  );

});
