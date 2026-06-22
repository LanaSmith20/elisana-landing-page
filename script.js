const contactForm = document.querySelector(".contact-form");

const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone");
const messageInput = document.querySelector("#message");

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
Meu telefone é: ${phone}

Mensagem:
${message}

Vim pelo site da Elisana Pereira.
  `;

  const encodedMessage = encodeURIComponent(finalMessage);

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappLink, "_blank");

  contactForm.reset();
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
