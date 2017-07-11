exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {
  fizzBuzz: function(num) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number
    var divisibleBy3 = num%3 == 0;
    var divisibleBy5 = num%5 == 0;
    var returnStr = "";
    if (parseInt(num)) {
        if (!divisibleBy3 && !divisibleBy5) {
            return num;
        }
        if (divisibleBy3) {
            returnStr += "fizz";
        }
        if (divisibleBy5) {
            returnStr += "buzz";
        }
        return returnStr;
    }
    else {
        return false;
    }

  }
};
