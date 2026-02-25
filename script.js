document.addEventListener("DOMContentLoaded", () => {
  // ── Configurações ──────────────────────────────────────────────
  const WHATSAPP_NUMBER = "5500000000000"; // ⚠️ Substitua pelo número real
  const WHATSAPP_MSG =
    "Olá! Gostaria de agendar uma consulta para extensão de cílios no CN Divas Club. 💫";

  // ── Função para abrir WhatsApp ─────────────────────────────────
  function abrirWhatsApp() {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
    window.open(url, "_blank");
  }

  // ── Botões de agendamento ──────────────────────────────────────
  const btnsAgendar = [
    document.getElementById("btnAgendar"),
    document.getElementById("btnAgendarNav"), // Certifique-se que adicionou este ID no HTML do header
    document.getElementById("btnAgendarMid"),
  ];

  btnsAgendar.forEach((btn) => {
    if (btn)
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        abrirWhatsApp();
      });
  });

  // Link de WhatsApp na seção de contato
  const btnWpp = document.getElementById("btnWhatsApp");
  if (btnWpp) {
    btnWpp.addEventListener("click", (e) => {
      e.preventDefault();
      abrirWhatsApp();
    });
  }

  // Efeito de Scroll no Header
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Smooth scroll no menu
  document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Ajuste para o header fixo (aprox 100px)
        const headerOffset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Animação de Reveal ao Rolar
  const revealElements = document.querySelectorAll(".reveal");
  function checkReveal() {
    const triggerBottom = window.innerHeight * 0.85;
    revealElements.forEach((el) => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add("visible");
      }
    });
  }
  window.addEventListener("scroll", checkReveal);
  checkReveal(); // Checa no carregamento inicial

  // ── Geração das Partículas (Estrelas Piscantes) ─────────────────
  function createTwinklingStars() {
    const heroSection = document.getElementById("home");
    if (!heroSection) return;

    const numberOfStars = 50; // Quantidade de estrelas

    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement("div");
      star.classList.add("glitter-star");

      // Posição aleatória na tela
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;

      // Tamanho aleatório (entre 4px e 10px)
      const size = Math.random() * 6 + 4;

      // Atraso e duração da animação aleatórios para não piscarem juntos
      const delay = Math.random() * 5;
      const duration = Math.random() * 3 + 2; // Entre 2s e 5s

      star.style.left = `${posX}%`;
      star.style.top = `${posY}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.animationDelay = `${delay}s`;
      star.style.animationDuration = `${duration}s`;

      heroSection.appendChild(star);
    }
  }

  createTwinklingStars();
});

const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav ul li a");

    // Abrir/Fechar menu
    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Fechar menu ao clicar em um link (opcional, mas recomendado)
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
});
