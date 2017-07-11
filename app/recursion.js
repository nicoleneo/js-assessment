exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
  	var found = false;
  	var result = [];
  	for (var prop in data) {
  		if (data.hasOwnProperty(prop) && prop == 'dir' && data[prop] == dirName) {
  			result.push(data.prop);
  		}
  	}
  	return result;
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
