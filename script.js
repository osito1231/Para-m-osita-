document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // ELEMENTOS PRINCIPALES
  // =========================
  const openBtn = document.getElementById("openBtn");
  const contenido = document.getElementById("contenido");
  const cover = document.getElementById("cover");
  const music = document.getElementById("bgMusic");

  const musicToggle = document.getElementById("musicToggle");
  const volume = document.getElementById("volume");


  // =========================
  // ABRIR LA SORPRESA ❤️
  // =========================
  if (openBtn) {
    openBtn.addEventListener("click", () => {

      if (contenido) {
        contenido.classList.remove("hidden");
      }

      // Música
      if (music) {
        music.volume = 0.72;

        const playPromise = music.play();

        if (playPromise !== undefined) {
          playPromise.catch(() => {
            console.log("El navegador bloqueó temporalmente el audio.");
          });
        }
      }

      // Desvanecer portada
      if (cover) {
        cover.style.transition = "opacity .8s ease";
        cover.style.opacity = "0";

        setTimeout(() => {
          cover.style.display = "none";
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }, 800);
      }
    });
  }


  // =========================
  // CONTADOR DESDE
  // 5 DICIEMBRE 2025 - 11:00 AM
  // HORA DE PERÚ 🇵🇪
  // =========================

  const start = new Date("2025-12-05T11:00:00-05:00");

  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  function updateCounter() {

    const now = new Date();

    let difference = now.getTime() - start.getTime();

    if (difference < 0) {
      difference = 0;
    }

    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / 86400);

    const hours = Math.floor(
      (totalSeconds % 86400) / 3600
    );

    const minutes = Math.floor(
      (totalSeconds % 3600) / 60
    );

    const seconds = totalSeconds % 60;


    if (daysElement) {
      daysElement.textContent = days;
    }

    if (hoursElement) {
      hoursElement.textContent =
        String(hours).padStart(2, "0");
    }

    if (minutesElement) {
      minutesElement.textContent =
        String(minutes).padStart(2, "0");
    }

    if (secondsElement) {
      secondsElement.textContent =
        String(seconds).padStart(2, "0");
    }
  }

  updateCounter();

  setInterval(updateCounter, 1000);


  // =========================
  // BOTÓN PLAY / PAUSA 🎵
  // =========================

  if (musicToggle && music) {

    musicToggle.addEventListener("click", () => {

      if (music.paused) {

        music.play()
          .then(() => {
            musicToggle.textContent = "Ⅱ Pausar música";
          })
          .catch(() => {});

      } else {

        music.pause();

        musicToggle.textContent = "▶ Reproducir música";
      }

    });


    music.addEventListener("play", () => {
      musicToggle.textContent = "Ⅱ Pausar música";
    });


    music.addEventListener("pause", () => {
      musicToggle.textContent = "▶ Reproducir música";
    });

  }


  // =========================
  // VOLUMEN
  // =========================

  if (volume && music) {

    volume.addEventListener("input", () => {

      music.volume = Number(volume.value);

    });

  }


  // =========================
  // ANIMACIONES AL HACER SCROLL
  // =========================

  const animatedElements =
    document.querySelectorAll(
      ".reveal, .letter-section, .counter-section, .music-section"
    );


  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add("visible");

              observer.unobserve(entry.target);
            }

          });

        },
        {
          threshold: 0.12
        }
      );


    animatedElements.forEach((element) => {
      observer.observe(element);
    });

  } else {

    animatedElements.forEach((element) => {
      element.classList.add("visible");
    });

  }


  // =========================
  // CORAZONES FLOTANTES ❤️
  // =========================

  function createHeart() {

    const heart = document.createElement("span");

    heart.className = "floating-heart";

    const hearts = [
      "❤️",
      "💕",
      "💗",
      "🩷"
    ];

    heart.textContent =
      hearts[
        Math.floor(Math.random() * hearts.length)
      ];

    heart.style.left =
      Math.random() * 100 + "vw";

    heart.style.fontSize =
      (12 + Math.random() * 12) + "px";

    heart.style.animationDuration =
      (6 + Math.random() * 5) + "s";

    document.body.appendChild(heart);


    setTimeout(() => {

      heart.remove();

    }, 11000);

  }


  // No llenamos demasiado la pantalla
  setInterval(createHeart, 2400);


  // =========================
  // PEQUEÑO DETALLE 🧸
  // =========================

  console.log(
    "Para mi Osita ❤️ — hecho por tu Osito 🧸"
  );

});
