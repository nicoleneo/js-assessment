exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	return new Promise(function(resolve, reject) {
  		setTimeout(function() {
  			resolve(value);
  	}, 10);
  	});
  },

  manipulateRemoteData: function(url) {
  	return new Promise(function(resolve, reject) {
  		$.get(url)
  		.done(function(result) {
  			var people = result.people;
  			var sorted = people.map(function(val) {
  				return val.name;
  			}).sort();
  			resolve(sorted);
  		});
  	});
  }
};
