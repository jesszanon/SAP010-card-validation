import validator from './validator.js';

document.getElementById("buttonverif").addEventListener("click", validar);
function validar(event) {
  event.preventDefault()

  const numCard = document.getElementById("cardNumber").value;
  const alert = document.getElementById("resultado");

  const card = validator.isValid(numCard);
  const masc = validator.maskify(numCard);

  console.log(validator, numCard);

  if (numCard === "") {
    alert.innerHTML = "Insira o número do cartão";
  } else if (card === true){
    alert.innerText = `Cartão ${masc} válido`;
  } else {
    alert.innerText = "Cartão Inválido";

  }
}




