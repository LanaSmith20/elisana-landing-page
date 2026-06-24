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
  ".services, .about, .cities,  .testimonials,  .care, .faq, .contact",
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


// FAQ ABRE E FECHA
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function (item) {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", function () {
    item.classList.toggle("active");
  });
});

// GALERIA POR SERVIÇO
const serviceButtons = document.querySelectorAll(".service-gallery-btn");

const serviceModal = document.querySelector(".service-modal");
const serviceModalTitle = document.querySelector(".service-modal-title");
const serviceModalGallery = document.querySelector(".service-modal-gallery");
const serviceModalClose = document.querySelector(".service-modal-close");

const serviceGalleries = {
  sobrancelhas: {
    title: "Resultados de Sobrancelhas",
    images: [
      "image/sobrancelha-1.jpeg",
      "image/sobrancelha-2.jpeg",
      "image/sobrancelha-3.jpeg"
      
    ]
  },

  labios: {
    title: "Resultados de Micropigmentação Labial",
    images: [
      "image/labios-1.jpeg",
      "image/labios-2.jpeg",
      "image/labios-3.jpeg"
     
    ]
  },

  melasma: {
    title: "Cuidados para Melasma",
    images: [
      "image/melasma-1.jpeg",
      "image/melasma-2.jpeg",
      "image/melasma-3.jpeg"
      
    ]
  },

  botox: {
    title: "Botox / Toxina Botulínica",
    images: [
      "image/botox-1.jpeg",
      "image/botox-2.jpeg",
      "image/botox-3.jpeg"
    
    ]
  }
};

if (
  serviceButtons.length > 0 &&
  serviceModal &&
  serviceModalTitle &&
  serviceModalGallery &&
  serviceModalClose
) {
  serviceButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const serviceName = button.dataset.service;

      const gallery = serviceGalleries[serviceName];

      serviceModalTitle.textContent = gallery.title;

      serviceModalGallery.innerHTML = "";

      gallery.images.forEach(function (imagePath) {
        const img = document.createElement("img");
        img.src = imagePath;
        img.alt = gallery.title;

        serviceModalGallery.appendChild(img);
      });

      serviceModal.classList.add("active");
    });
  });

  serviceModalClose.addEventListener("click", function () {
    serviceModal.classList.remove("active");
  });

  serviceModal.addEventListener("click", function (event) {
    if (event.target === serviceModal) {
      serviceModal.classList.remove("active");
    }
  });
}