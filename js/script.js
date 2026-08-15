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
     6. FORMULÁRIO DE CONTATO → ENVIA DIRETO PARA O WHATSAPP
     Não temos backend próprio (e-mail, planilha, etc.), então o
     formulário não "guarda" o pedido em lugar nenhum — ele só monta
     uma mensagem com os dados preenchidos e abre o WhatsApp da
     Celebrar já com tudo escrito, faltando só a pessoa apertar
     "enviar" por lá. É o WhatsApp que efetivamente recebe o pedido.

     Para trocar o número de destino, edite a constante abaixo.
  ------------------------------------------------------------- */
  const WHATSAPP_NUMBER = "5531985074372"; // DDI 55 + DDD 31 + número, só dígitos

  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = form.nome.value.trim();

    if (!nome) {
      feedback.textContent = "Preencha seu nome para enviar.";
      feedback.style.color = "#E85D75";
      return;
    }

    const tema = form.tema.value.trim();
    const data = form.data.value; // formato aaaa-mm-dd
    const mensagem = form.mensagem.value.trim();

    // Deixa a data no formato dd/mm/aaaa para ficar legível na mensagem
    let dataFormatada = "";
    if (data) {
      const [ano, mes, dia] = data.split("-");
      dataFormatada = `${dia}/${mes}/${ano}`;
    }

    // Monta o texto que vai abrir pronto na conversa do WhatsApp
    const linhas = [
      `Olá! Meu nome é ${nome} e vim pelo site da Celebrar 🎈`,
      tema ? `Tema da festa: ${tema}` : null,
      dataFormatada ? `Data do evento: ${dataFormatada}` : null,
      mensagem ? `Mensagem: ${mensagem}` : null,
    ].filter(Boolean); // remove linhas vazias (campos não preenchidos)

    const textoWhatsApp = encodeURIComponent(linhas.join("\n"));
    const linkWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${textoWhatsApp}`;

    // Abre o WhatsApp (app no celular, ou WhatsApp Web no computador)
    window.open(linkWhatsApp, "_blank", "noopener");

    feedback.textContent = `Show, ${nome}! Abrimos o WhatsApp com sua mensagem — é só enviar por lá. 🎈`;
    feedback.style.color = "#3EC6C1";
    form.reset();
  });

  /* -------------------------------------------------------------
     7. ANO ATUAL NO RODAPÉ
  ------------------------------------------------------------- */
  document.getElementById("year").textContent = new Date().getFullYear();
});
