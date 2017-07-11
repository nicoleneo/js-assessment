exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
  	var countObj = {
  		run: true,
  		count: function() {
  			var curr = start;
  			console.log(curr);
  			setInterval(function() {
  				if (countObj.run && curr < end) {
  				curr += 1;
  				console.log(curr);
  				}
  			}, 100);
  		},
  		cancel: function() {
  			countObj.run = false;
  		},
  	};
  	countObj.count();
  	return countObj;
  }
};
