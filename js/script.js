const formCalculo = document.getElementById("formCalculo");
const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const resultadoCalculo = document.getElementById("resultadoCalculo");

function somar(event){
    event.preventDefault();

    const a = Number(numero1.value);
    const b = Number(numero2.value);

    resultadoCalculo.textContent = "Resultado: " + (a + b);
}

formCalculo.addEventListener("submit", somar);