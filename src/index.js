import validator from './validator.js';
 
document.getElementById("buttonverif").addEventListener("click", validar);  //criar um evento para fazer o botão funcionar através do click (Um 'addEventListener' pra ouvir o click)
function validar(event) {
  event.preventDefault() // esse preventDefault é chamado pra evitar que a ação padrão do navegador seja executada.
  
  const numCard = document.getElementById("cardNumber").value;  // essa função getElementById() do JavaScript pega o valor de um elemento HTML com o ID "cardNumber" e armazena na variável numCard.
  const alert = document.getElementById("resultado"); //Aqui essa função foi usada para pegar um elemento HTML com ID=resultado e armazená-lo na variável alert.
 
  const card = validator.isValid(numCard);  // Foi usada para puxar a função isValid do validator e verificar se o número de cartão armazenado na variável numCard é válido.
  const masc = validator.maskify(numCard); // Foi usada para mascarar o número de cartão armazenado na variável numCard. A função retorna um número de cartão mascarado e armazena o valor na variável masc.

 
  if (numCard === "") {
    alert.innerHTML = "Insira o número do cartão";  // criar uma condição if e else para mostrar no console as opções do código
  
  } else if (card === true) {
    alert.innerText = `Cartão ${masc} válido`; //posso usar a propriedade innerHTML para alterar o conteúdo de um elemento de alerta quando um usuário interage com a página.
  } else {
    alert.innerText = "Cartão Inválido";

  }
}




