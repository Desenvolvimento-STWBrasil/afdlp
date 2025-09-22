// main.js

document.addEventListener("DOMContentLoaded", function() {
  // --- LÓGICA PARA OCULTAR HEADER AO ROLAR ---
  const header = document.querySelector(".main-header");
  let lastScroll = 0;
  const offsetToHide = 50; // quantos px para começar a esconder

  window.addEventListener("scroll", function() {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > offsetToHide) {
      // rolando pra baixo
      header.classList.add("header-hidden");
    } else if (currentScroll < lastScroll) {
      // rolando pra cima
      header.classList.remove("header-hidden");
    }

    lastScroll = currentScroll;
  });



  // --- LÓGICA DO CARROSSEL INFINITO DE LOGOS ---

  const scrollers = document.querySelectorAll(".scroller");

  // só executa se houver scrollers
  scrollers.forEach((scroller) => {
    // marcamos que vai ser animado
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setupLogoScroll(scroller);
    }
  });

  function setupLogoScroll(scroller) {
    const inner = scroller.querySelector(".scroller__inner");
    if (!inner) return;

    // duplicar os filhos para permitir o loop contínuo
    const children = Array.from(inner.children);
    children.forEach((child) => {
      const clone = child.cloneNode(true);
      clone.setAttribute("aria-hidden", "true"); // acessibilidade
      inner.appendChild(clone);
    });

    // ativar animação via atributo ou classe
    scroller.setAttribute("data-animated", "true");

    // opcional: ajustar animação via CSS (já presente no seu CSS para .scroller[data-animated="true"] .scroller__inner)
  }

});
