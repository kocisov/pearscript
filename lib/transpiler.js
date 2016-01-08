var beautify = require('js-beautify').js_beautify;

var transpile = function(source) {
  var parser = require('./parser').parser;
      parser.yy = require('./scope');

  var transpiled = parser.parse(source);
  var output = beautify(transpiled, { indent_size: 2, max_preserve_newlines: -1, end_with_newline: true, space_before_conditional: 0 });

  return output;
};

module.exports.transpile = transpile;