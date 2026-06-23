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
  ".services, .about, .cities, .results, .testimonials, .care, .faq, .contact",
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

// BOTÃO PARA ABRIR E FECHAR GALERIA COMPLETA
const galleryButton = document.querySelector(".gallery-toggle-btn");
const galleryMore = document.querySelector(".gallery-more");

if (galleryButton && galleryMore) {
  galleryButton.addEventListener("click", function () {
    galleryMore.classList.toggle("show-gallery");

    if (galleryMore.classList.contains("show-gallery")) {
      galleryButton.textContent = "Ver menos fotos";
    } else {
      galleryButton.textContent = "Ver galeria completa";
    }
  });
}

// ABRIR IMAGEM DA GALERIA EM TELA GRANDE
const galleryImages = document.querySelectorAll(".gallery img, .gallery-more img");
const imageModal = document.querySelector(".image-modal");
const modalImage = document.querySelector(".image-modal img");
const modalClose = document.querySelector(".modal-close");

if (galleryImages && imageModal && modalImage && modalClose) {
  galleryImages.forEach(function (image) {
    image.addEventListener("click", function () {
      modalImage.src = image.src;
      modalImage.alt = image.alt;

      imageModal.classList.add("active");
    });
  });

  modalClose.addEventListener("click", function () {
    imageModal.classList.remove("active");
  });

  imageModal.addEventListener("click", function (event) {
    if (event.target === imageModal) {
      imageModal.classList.remove("active");
    }
  });
}

// FAQ ABRE E FECHA
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function (item) {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", function () {
    item.classList.toggle("active");
  });
});