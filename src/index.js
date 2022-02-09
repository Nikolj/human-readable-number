module.exports = function toReadable (number) {
   
   
   let onesArr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
   let teensArr = ['','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   let tensArr = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   let bykw = Math.floor(number / 100);
   let na = bykw * 100;
   let bon = Math.floor((number - na) / 10);
   let aws = bon * 10;
   let num = number - (na + aws);
   let hundreds = onesArr[bykw] + ' hundred';;
   let teens = teensArr[number - 10];
   let tens = tensArr[bon - 1];
   let ones = onesArr[num];
   
   if(number === 0) {
       return 'zero';
   }

    
    if(number < 100) {
        if (number < 10) {
           return ones; 
        }

        else if(number % 10 === 0) {
            return tens;
        }

        else if (number > 10 && number < 20) {
            return teens;
        }
        
        else return tens + ' ' + ones;
    }

    if (number >= 100 ) {
        if (number % 100 === 0) {
        return hundreds;
       }

       if(number % 10 === 0) {
           return hundreds + ' ' + tens;
       }

       if ((number - na) > 10 && (number - na) < 20) {
        teens = teensArr[(number - na) - 10];
        return hundreds + ' ' + teens;
       }
       
       if(number % 100 < 10) {
           return hundreds + ' ' + ones;
       }
        else return hundreds + ' ' + tens + ' ' + ones;
    } 
}
