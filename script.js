// FORMULÁRIO ABRINDO WHATSAPP
const contactForm = document.querySelector(".contact-form");

const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone");
const messageInput = document.querySelector("#message");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "" || phone === "" || message === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const whatsappNumber = "553598550413";

    const finalMessage = `
Olá, meu nome é ${name}.
Meu WhatsApp / telefone é: ${phone}

Mensagem:
${message}

Vim pelo site da Elisana Pereira.
    `;

    const encodedMessage = encodeURIComponent(finalMessage);

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappLink, "_blank");

    contactForm.reset();
  });
}

// MENU MOBILE
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  const menuItems = document.querySelectorAll(".nav-links a");

  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });
}

// NAVBAR COM SOMBRA AO ROLAR
const navbar = document.querySelector(".navbar");

if (navbar) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// ANIMAÇÃO SUAVE AO DESCER A PÁGINA
const revealElements = document.querySelectorAll(
  ".services, .about, .cities, .results, .testimonials, .contact",
);

revealElements.forEach(function (element) {
  element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach(function (element) {
  revealObserver.observe(element);
});
