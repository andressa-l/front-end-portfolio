document.addEventListener("DOMContentLoaded", function () {
  // Inicializa Particles.js
  particlesJS.load("particles-js", "particles.json", function () {
    console.log("particles.js loaded");
  });

  // Inicializa WOW.js para animações de scroll
  new WOW().init();

  // Smooth scroll para links internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Adiciona funcionalidade ao botão de contato
  const contactBtn = document.querySelector(".btn-primary");
  if (contactBtn) {
    contactBtn.addEventListener("click", function () {
      const contactSection = document.querySelector("#contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário para validação
    const form = this; // Referência ao formulário
    const name = document.querySelector("input[placeholder='Name']");
    const email = document.querySelector("input[placeholder='Email']");
    const subject = document.querySelector("input[placeholder='Subject']");
    const message = document.querySelector("textarea[placeholder='Message']");
    let valid = true;

    // Limpa mensagens de erro anteriores
    document.querySelectorAll(".error").forEach(el => el.remove());

    // Validação do campo Nome
    if (!name.value.trim()) {
        showError(name, "O nome é obrigatório.");
        valid = false;
    }

    // Validação do campo Email
    if (!email.value.trim()) {
        showError(email, "O email é obrigatório.");
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        showError(email, "Por favor, insira um email válido.");
        valid = false;
    }

    // Validação do campo Assunto
    if (!subject.value.trim()) {
        showError(subject, "O assunto é obrigatório.");
        valid = false;
    }

    // Validação do campo Mensagem
    if (!message.value.trim()) {
        showError(message, "A mensagem é obrigatória.");
        valid = false;
    }

    // Se todos os campos forem válidos, envie o formulário
    if (valid) {
        alert("Formulário enviado com sucesso!");
        form.reset(); // Limpa os campos do formulário
    }
});

function showError(input, message) {
    const error = document.createElement("div");
    error.classList.add("error");
    error.style.color = "red";
    error.style.fontSize = "0.9em";
    error.style.marginTop = "5px";
    error.textContent = message;
    input.parentNode.appendChild(error);
}

