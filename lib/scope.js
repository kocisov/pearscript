module.exports = {

  mainExp: function(val) {
    return "(function() {\n 'use strict';\n\n" + val + "\n})();";
  },

  ifStatement: function(nav, val) {
    return 'if(' + nav + ')' + '{' + val + '}';
  },

  innerHTMLobj: function(name, val) {
    return name + '.innerHTML = ' + val + ';';
  },

  ifElseStatement: function(nav, val, elseval) {
    return 'if(' + nav + ')' + '{' + val + '} else {' + elseval + '}';
  },

  printStatement: function(val) {
    return 'console.log(' + val + ');';
  },

  switchStatement: function(nav, val) {
    return this.createVar(nav) + 'switch(' + nav + ') {' + val + '}';
  },

  setVar: function(name, val) {
    return 'var ' + name + ' = ' + val + ';';
  },

  createVar: function(name) {
    return 'var ' + name + ';';
  },

  arrayStatement: function(name, val) {
    return this.createVar(name) + name + ' = [' + val + '];';
  },

  querySelector: function(name, val) {
    return this.createVar(name) + name + ' = document.querySelector(' + val + ');';
  },

  getElById: function(name, val) {
    return this.createVar(name) + name + ' = document.getElementById(' + val + ');';
  },

  createFunc: function(name, dothis) {
    return this.createVar(name) + name + ' = function() {' + dothis + '}';
  },

  createFuncWith: function(name, op, dothis) {
    return this.createVar(name) + name + ' = function(' + op + ') {' + dothis + '}';
  },

  createObjectStatement: function(name, val) {
    return this.createVar(name) + name + ' = {' + val + '};';
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
    return this.createVar(o) + 'for(' + o + ' = ' + val + '; ' + exp + '; ' + ft + ') {' + stat + '}';
  },

  whileLoopStatement: function(o, op, stat, ap) {
    return this.createVar(o) + 'while(' + op + ') {' + stat + ap + ';}';
  },

  allText: function(val) {
    var res = val.slice(1, -1);
    return res;
  }
};