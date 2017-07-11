exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce(function (acc, val) {
      return acc+val;
    });
  },

  remove: function(arr, item) {
    return arr.filter(function (val) {
      if (item != val) {
        return item;
      }
    });
  },

  removeWithoutCopy: function(arr, item) {
    while (arr.indexOf(item) != -1) { // item still exists
      var index = arr.indexOf(item);
        arr.splice(index, 1);
      }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.splice(0, 0, item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.filter(function (val) {
      if (item == val) {
        return item;
      }
    }).length;
  },

  duplicates: function(arr) {
    return arr.reduce(function (acc, val, index) {
      if (acc.indexOf(val) == -1 && arr.lastIndexOf(val) != index) {
        acc.push(val);
      }
      return acc;
    }, []);
  },

  square: function(arr) {
    return arr.map(function(val) {
      return val*val;
    });
  },

  findAllOccurrences: function(arr, target) {
    var indicesOfOccurences = []
    while (arr.indexOf(target) != -1) { // item still exists
      var index = arr.indexOf(target);
        arr.splice(index, 1, ''); //replace with placeholder to indicate processed
        indicesOfOccurences.push(index);
      }
    return indicesOfOccurences;
  }
};
