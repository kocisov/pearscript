const ___ = [];

module.exports = {

  createVars: function() {

    if(___ == undefined || ___.length == 0) {
      // why add const; FeelsBadMan
      return ' ';
    } else {
      const uniq = [ ...new Set(___) ];
      return 'const ' + uniq + ';';
    }
  },

  mainExp: function(vars, val) {
    return "(function() {\n 'use strict';\n" + vars + val + "\n})();";
  },

  ifStatement: function(nav, val) {
    return 'if(' + nav + ')' + '{' + val + '}';
  },

  innerHTMLobj: function(name, val) {
    ___.push(name);
    return name + '.innerHTML = ' + val + ';';
  },

  ifElseStatement: function(nav, val, elseval) {
    return 'if(' + nav + ')' + '{' + val + '} else {' + elseval + '}';
  },

  printStatement: function(val) {
    return 'console.log(' + val + ');';
  },

  switchStatement: function(nav, val) {
    ___.push(nav);
    return 'switch(' + nav + ') {' + val + '}';
  },

  setVar: function(name, val) {
    ___.push(name);
    return name + ' = ' + val + ';';
  },

  setVarSlice: function(name, val) {
    ___.push(name);
    const h = val.slice(1, -1);
    return name + ' = ' + h + ';';
  },

  arrayStatement: function(name, val) {
    ___.push(name);
    return name + ' = [' + val + '];';
  },

  querySelector: function(name, val) {
    ___.push(name);
    return name + ' = document.querySelector(' + val + ');';
  },

  getElById: function(name, val) {
    ___.push(name);
    return name + ' = document.getElementById(' + val + ');';
  },

  createFunc: function(name, dothis) {
    ___.push(name);
    return name + ' = function() {' + dothis + '}';
  },

  createFuncWith: function(name, op, dothis) {
    ___.push(name);
    return name + ' = function(' + op + ') {' + dothis + '}';
  },

  createObjectStatement: function(name, val) {
    ___.push(name);
    return name + ' = {' + val + '};';
  },

  testAST: function(a, b, c, d) {
    console.log(a + b + c + d);
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
    ___.push(o);
    return 'for(' + o + ' = ' + val + '; ' + exp + '; ' + ft + ') {' + stat + '}';
  },

  whileLoopStatement: function(o, op, stat, ap) {
    ___.push(o);
    return 'while(' + op + ') {' + stat + ap + ';}';
  },

  allText: function(val) {
    var res = val.slice(1, -1);
    return res;
  }
};