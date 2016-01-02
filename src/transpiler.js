var fs = require('fs');
var jison = require('jison');
var path = require('path');

var transpile = function(source) {
  var bnf = fs.readFileSync(path.join(__dirname, './parser.jison'), 'utf-8');

  var parser = new jison.Parser(bnf);
      parser.yy = require('./ast');

  var transpiled = parser.parse(source);

  return transpiled;
};

module.exports.transpile = transpile;