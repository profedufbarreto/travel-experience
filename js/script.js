const botao = document.querySelector("#botaoMostrar");
const retorno = document.querySelector("#retorno");

botao.addEventListener("click", function(){

    retorno.textContent = "Você clicou no botão!";

})