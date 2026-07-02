/* =====================================================================
   CELEBRAR — script.js
   Responsável por:
   1. Menu mobile (abrir/fechar)
   2. Header com sombra ao rolar a página
   3. Animação de entrada dos elementos (.reveal) ao aparecer na tela
   4. Fechar o menu ao clicar em um link
   5. Botão "voltar ao topo"
   6. Envio do formulário de contato (feedback visual, sem backend)
   7. Ano atual automático no rodapé
   ===================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* -------------------------------------------------------------
     1 e 2. HEADER: menu mobile + sombra ao rolar
  ------------------------------------------------------------- */
  const header = document.getElementById("header");
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");

  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // 4. Fecha o menu mobile ao clicar em qualquer link de navegação
  nav.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Adiciona sombra/borda no header assim que a página é rolada
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* -------------------------------------------------------------
     3. ANIMAÇÃO DE ENTRADA (scroll reveal)
     Qualquer elemento com a classe .reveal ganha a classe
     .reveal--visible assim que entra na viewport.
  ------------------------------------------------------------- */
  const revealTargets = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // pequeno atraso escalonado para elementos vizinhos (ex: cards da grade)
            entry.target.classList.add("reveal--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    revealTargets.forEach((el) => revealObserver.observe(el));
  } else {
    // Navegadores sem suporte: mostra tudo direto
    revealTargets.forEach((el) => el.classList.add("reveal--visible"));
  }

  /* -------------------------------------------------------------
     5. BOTÃO VOLTAR AO TOPO
  ------------------------------------------------------------- */
  const backToTop = document.getElementById("backToTop");
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* -------------------------------------------------------------
     6. FORMULÁRIO DE CONTATO
     Aqui não há backend conectado — apenas validação simples e
     feedback visual. Para ligar a um serviço real (ex: e-mail,
     planilha, WhatsApp API), troque o bloco marcado abaixo.
  ------------------------------------------------------------- */
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = form.nome.value.trim();
    const telefone = form.telefone.value.trim();

    if (!nome || !telefone) {
      feedback.textContent = "Preencha nome e WhatsApp para enviar.";
      feedback.style.color = "#E85D75";
      return;
    }

    // ---- PONTO DE INTEGRAÇÃO ----
    // Troque este trecho por uma chamada real (fetch para um backend,
    // serviço de formulário, ou link direto para o WhatsApp com os dados).
    console.log("Pedido de orçamento:", {
      nome,
      telefone,
      tema: form.tema.value.trim(),
      data: form.data.value,
      mensagem: form.mensagem.value.trim(),
    });
    // -------------------------------

    feedback.textContent = `Recebido, ${nome}! Vamos te chamar no WhatsApp em breve. 🎈`;
    feedback.style.color = "#3EC6C1";
    form.reset();
  });

  /* -------------------------------------------------------------
     7. ANO ATUAL NO RODAPÉ
  ------------------------------------------------------------- */
  document.getElementById("year").textContent = new Date().getFullYear();
});
