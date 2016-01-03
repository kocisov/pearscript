module.exports = {
  ifStatement: function(nav, val) {
    return 'if(' + nav + ')' + '{' + val + '}';
  },

  ifElseStatement: function(nav, val, elseval) {
    return 'if(' + nav + ')' + '{' + val + '} else {' + elseval + '}';
  },

  printStatement: function(val) {
    return 'console.log(' + val + ');';
  },

  switchStatement: function(nav, val) {
    return 'switch(' + nav + ') {' + val + '}';
  },

  setVar: function(name, val) {
    return 'var ' + name + ' = ' + val + ';';
  },

  arrayStatement: function(name, val) {
    return 'var ' + name + ' = [' + val + '];';
  },

  querySelector: function(name, val) {
    return 'var ' + name + ' = document.querySelector(' + val + ');';
  },

  getElById: function(name, val) {
    return 'var ' + name + ' = document.getElementById(' + val + ');';
  },

  createFunc: function(name, dothis) {
    return 'var ' + name + ' = function() {' + dothis + '}';
  },

  createFuncWith: function(name, op, dothis) {
    return 'var ' + name + ' = function(' + op + ') {' + dothis + '}';
  },

  createObjectStatement: function(name, val) {
    return 'var ' + name + ' = {' + val + '}';
  },

  alertStatement: function(val) {
    return 'alert(' + val + ');';
  },

  jsonParseStatement: function(val, opt) {
    switch(opt) {
      case 1:
        return 'JSON.parse(' + val + ');';
        break;
      case 0:
        return 'JSON.parse(' + val + ')';
        break;
    }
  },

  jsonStringifyStatement: function(val, opt) {
        switch(opt) {
      case 1:
        return 'JSON.stringify(' + val + ');';
        break;
      case 0:
        return 'JSON.stringify(' + val + ')';
        break;
    }
  },

  returnStatement: function(val) {
    return 'return ' + val + ';';
  },

  forLoopStatement: function(o, val, exp, ft, stat) {
    return 'for(' + o + ' = ' + val + '; ' + exp + '; ' + ft + ') {' + stat + '}';
  },

  whileLoopStatement: function(o, stat, ap) {
    return 'while(' + o + ') {' + stat + ap + ';}';
  }
};