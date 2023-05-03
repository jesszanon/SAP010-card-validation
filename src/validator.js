const validator = {

  isValid: function (card) {
    const nCard = card.split("").reverse();
    let rescard = 0;

    for (let i = 0; i < nCard.length; i++) {
      const numCard = parseInt(nCard[i]);

      if (i % 2 !== 0 && numCard >= 5) {
        rescard = rescard + (numCard * 2) - 9;
      }

      else if (i % 2 !== 0 && numCard < 5) {
        rescard = rescard + (numCard * 2);
      }

      else {
        rescard = rescard + numCard;
      }
    }
    if (rescard % 10 === 0) {
      return true;
    }
    else {
      return false;
    }
  },
//Primeiro, ele separa o número de cartão em dígitos individuais usando o método split. Em seguida, um loop for é usado para percorrer os elementos do array x, exceto os últimos 4, e atribuir o caractere # para cada elemento. Por último, o método join é usado para juntar os elementos do array em uma string e retornar a string resultante.
  maskify: function(card){
    const x = card.split(''); 
    for (let i=0; i< x.length - 4; i++){
      x[i] = "#";
    }
    const maskedCard = x.join('');
    return maskedCard; 
  }
}
export default validator;
