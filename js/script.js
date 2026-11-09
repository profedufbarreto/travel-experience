const botaoCriar = document.getElementById("botaoCriar");
const botaoApagar = document.getElementById("botaoApagar");
const retorno = document.getElementById("retorno");

const frases = [
    "Você está arrasando! 🚀",
    "Hora de codar! 💻",
    "Café, código e criatividade! ☕",
    "JavaScript é mágica! 🌟"
];

const cores = ["#fde68a", "#bfdbfe", "#bbf7d0", "#fbcfe8"];

botaoCriar.addEventListener("click", () => {
    const i = Math.floor(Math.random() * frases.length);
    retorno.textContent = frases[i];
    retorno.style.backgroundColor = cores[i];
    retorno.style.fontSize = "24px";
    retorno.style.padding = "15px";
    retorno.style.borderRadius = "10px";
    retorno.style.textAlign = "center";
});

botaoApagar.addEventListener("click", () => {
    retorno.textContent = "";
    retorno.style.background = "";
    retorno.style.fontSize = "";
    retorno.style.padding = "";
    retorno.style.borderRadius = "";
    retorno.style.textAlign = "";
});