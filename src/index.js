import validator from './validator.js';
  //criar um evento para fazer o botão funcionar através do click (Um 'addEventListener' pra ouvir o click)
document.getElementById("buttonverif").addEventListener("click", validar);
function validar(event) {
  event.preventDefault()
  // fazer uma declaração const pra pegar o valor que o usuário vai colocar
  const numCard = document.getElementById("cardNumber").value;
  const alert = document.getElementById("resultado");
  // fazer uma declaração const para puxar o código do validador, tanto o isValid, quanto o maslify
  const card = validator.isValid(numCard);
  const masc = validator.maskify(numCard);

  console.log(validator, numCard);
  // criar uma condição if e else para mostrar no console as opções do código
  if (numCard === "") {
    alert.innerHTML = "Insira o número do cartão";
  } else if (card === true){
    alert.innerText = `Cartão ${masc} válido`;
  } else {
    alert.innerText = "Cartão Inválido";

  }
}




