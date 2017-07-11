exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	var bitStr = num.toString(2); // convert to base2
  	var bitPos = bitStr.length - bit;
  	return parseInt(bitStr.charAt(bitPos));
  },

  base10: function(str) {
  	return parseInt(str, 2);
  },

  convertToBinary: function(num) {
  	return num.toString(2).padStart(8, '0'); // convert to base2
  },

  multiply: function(a, b) {
  	return parseFloat((a*b).toPrecision(1));
  }
};
