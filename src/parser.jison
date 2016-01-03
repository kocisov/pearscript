/* lexical grammar */
%lex
%%

\s+                                   /* skip whitespace */
"//".*                                /* Ignore */
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]   /* Ignore */

'if'                                  return 'IF'
'else'                                return 'ELSE'
'for'                                 return 'FOR'
'while'                               return 'WHILE'
'switch'                              return 'SWITCH'
'log'                                 return 'CLOG'
'al'                                  return 'ALERT'
'len'                                 return 'LEN'
'return'                              return 'RETURN'
'func'                                return 'FUNCTION'
'j.parse'                             return 'j.parse'
'j.strin'                             return 'j.strin'
'$'                                   return '$'
'g'                                   return 'g'

'bool'                                return 'BOOL'
'undefined'                           return 'UNDEFINED'
'null'                                return 'NULL'

'{'                                   return '{'
'}'                                   return '}'
'('                                   return '('
')'                                   return ')'
'['                                   return '['
']'                                   return ']'
'=['                                  return '=['
'=>'                                  return '=>'
'='                                   return '='
'!='                                  return '!='
'->'                                  return '->'
'!'                                   return '!'
'?'                                   return '?'
'+'                                   return '+'
'-'                                   return '-'
'*'                                   return '*'
'/'                                   return '/'
'<'                                   return '<'
'>'                                   return '>'
','                                   return ','
'.'                                   return '.'
':'                                   return ':'
';'                                   return ';'

(['](\\.|[^']|\\\')*?['])+            return 'STRING'
(["](\\.|[^"]|\\\")*?["])+            return 'STRING'

[0-9]+("."[0-9]+)?\b                  return 'NUMBER'
[_a-zA-Z]+[_a-zA-Z0-9]*\b             return 'VAR'

<<EOF>>                               return 'EOF'

/lex

%start program

%% /* language grammar */

program
  : statements EOF
    { return yy.mainExp($1); }
  ;

statements
  : statement
    { $$ = $1; }
  | statements statement
    { $$ = $1.concat($2); }
  ;

statement
  : CLOG '.' i
    { $$ = yy.printStatement($3); }
  | CLOG '.' '{' statements '}'
    { $$ = yy.printStatement($4); }
  | IF p '{' statements '}'
    { $$ = yy.ifStatement($2, $4); }
  | IF p '{' statements '}' ELSE '{' statements '}'
    { $$ = yy.ifElseStatement($2, $4, $8); }
  | SWITCH '(' i ')' '{' cases '}'
    { $$ = yy.switchStatement($3, $6); }
  | FUNCTION i '(' i ')' '{' statements '}'
    { $$ = yy.createFuncWith($2, $4, $7); }
  | i '=' sm
    { $$ = yy.setVar($1, $3); }
  | i '=' '[' arr ']'
    { $$ = yy.arrayStatement($1, $4); }
  | ALERT '.' i
    { $$ = yy.alertStatement($3); }
  | WHILE '(' i ')' p '{' statements ap '}'
    { $$ = yy.whileLoopStatement($3, $5, $7, $8); }
  | FOR i NUMBER p ap '{' statements '}'
    { $$ = yy.forLoopStatement($2, $3, $4, $5, $7); }
  | RETURN sm
    { $$ = yy.returnStatement($2); }
  | i '->' '{' objects '}'
    { $$ = yy.createObjectStatement($1, $4); }
  | 'j.parse' i
    { $$ = yy.jsonParseStatement($2, 0); }
  | 'j.strin' i
    { $$ = yy.jsonStringifyStatement($2, 0); }
  | 'j.parse' i '.'
    { $$ = yy.jsonParseStatement($2, 1); }
  | 'j.strin' i '.'
    { $$ = yy.jsonStringifyStatement($2, 1); }
  | i '=' '$' '.' i
    { $$ = yy.querySelector($1, $5); }
  | i '=' '$' 'g' '.' i
    { $$ = yy.getElById($1, $6); }
  | ap
  ;

sm
  : i
  | m
  ;

i
  : STRING
    { $$ = $1; }
  | VAR
    { $$ = $1; }
  | NUMBER
    { $$ = $1; }
  | NULL
    { $$ = $1; }
  ;

objects
  : objExpr
  ;

objExpr
  : i ':' i
    { $$ = $1 + ': ' + $3 + ','; }
  | objExpr i ':' i
    { $$ = $1 + $2 + ': ' + $4 + ','; }
  ;

ap
  : i '+' '+'
    { $$ = $1 + '++'; }
  | i '-' '-'
    { $$ = $1 + '--'; }
  ;

m
  : i '+' i
    { $$ = $1 + ' + ' + $3; }
  | i '-' i
    { $$ = $1 + ' - ' + $3; }
  | i '*' i
    { $$ = $1 + ' * ' + $3; }
  | i '/' i
    { $$ = $1 + ' / ' + $3; }
  ;

cases
  : '->' i statements
    { $$ = 'case ' + $2 + ': ' + $3 + '\nbreak;'; }
  | cases '->' i statements
    { $$ = $1 + ' case ' + $3 + ': ' + $4 + '\nbreak;'; }
  ;

p
  : i
    { $$ = $1; }
  | i '!=' i
    { $$ = $1 + ' != ' + $3; }
  | i '=' i
    { $$ = $1 + ' === ' + $3; }
  | i '>' i
    { $$ = $1 + ' > ' + $3; }
  | i '<' i
    { $$ = $1 + ' < ' + $3; }
  | i '>' i '.' LEN
    { $$ = $1 + ' > ' + $3 + '.length'; }
  | i '<' i '.' LEN
    { $$ = $1 + ' < ' + $3 + '.length'; }
  ;

arr
  : arrExpr
  ;

arrExpr
  : i
  | arrExpr i
    { $$ = $1 + ', ' + $2; }
  ;

%%