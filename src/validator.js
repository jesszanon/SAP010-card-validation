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
