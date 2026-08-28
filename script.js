/* ===================================================================
   script.js
   -------------------------------------------------------------------
   Responsável por criar, do zero, o botão "Voltar ao topo" e controlar
   seu comportamento. O botão NÃO existe no HTML: ele é inteiramente
   montado e inserido na página por este arquivo.
   =================================================================== */

// 1. Cria o elemento do botão
const botaoVoltarAoTopo = document.createElement("button");

// 2. Define o tipo, o texto/símbolo e um rótulo acessível
botaoVoltarAoTopo.setAttribute("type", "button");
botaoVoltarAoTopo.textContent = "▲";
botaoVoltarAoTopo.setAttribute("aria-label", "Voltar ao topo da página");

// 3. Adiciona a classe usada pelo CSS para estilizar e animar o botão
botaoVoltarAoTopo.classList.add("voltar-ao-topo");

// 4. Insere o botão no final do <body>
document.body.appendChild(botaoVoltarAoTopo);

// Distância de rolagem (em pixels) a partir da qual o botão aparece
const LIMITE_DE_ROLAGEM = 400;

// 5. Mostra o botão apenas depois que o usuário rolar parte da página
//    e o esconde novamente quando ele estiver perto do topo
window.addEventListener("scroll", () => {
  if (window.scrollY > LIMITE_DE_ROLAGEM) {
    botaoVoltarAoTopo.classList.add("visivel");
  } else {
    botaoVoltarAoTopo.classList.remove("visivel");
  }
});

// 6. Ao clicar, a página rola suavemente até o topo
botaoVoltarAoTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
