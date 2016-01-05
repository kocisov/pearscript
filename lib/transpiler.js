var transpile = function(source) {
  var parser = require('./parser').parser;
      parser.yy = require('./scope');

  var transpiled = parser.parse(source);

  return transpiled;
};

module.exports.transpile = transpile;