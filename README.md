<img src="https://kocisov.github.io/pearscript/pearscript.png" width="300">

[![npm package][npm-badge]][npm]
[![david-dm][david-badge]][david-dm]

**PearScript** - Little language that compiles into Javascript

# Usage
Install pearscript **globally**
```
npm install -g pearscript
```
###### U can install it locally too of course

Then use it with **pear** command - File must have **pear** extension

```
pear your-file.pear
```

It will produce your-file.js

# Features

More features coming soon

## If else
```
if n > 3 {
  log.'i is greater than 3'
} else {
  log.'i is not greater than 3'
}
```

**compiles into**

```
if(n > 3) {
  console.log('i is greater than 3');
} else {
  console.log('i is not greater than 3');
}
```

## Set variable
```
variable = variable
variable = "string"
variable = 'string'
variable = 128
```

**compiles into**

```
var variable = variable;
var variable = "string";
var variable = 'string';
var variable = 128;
```

## Set querySelector to var
```
variable = $.'main'
```

**compiles into**

```
var variable = document.querySelector('main');
```

## Set getElementById to var
```
el = $g.'#main'
```

**compiles into**

```
var el = document.getElementById('#main');
```

## Create function
```
func double(x) {
  num = x * x
  return num
}
```

**compiles into**

```
var double = function(x) {
  var num = x * x;
  return num;
}
```

## Alert and console.log
```
log.'hello world'
al.'hello world'
```

**compiles into**

```
console.log('hello world');
alert('hello world');
```

If you want to console.log some function use this
```
log.{ not_object -> {message: 'hello'}  }
```

**which compiles into**

```
console.log(var not_object = {
  message: 'hello',
});
```

## Array
```
array_name = [variable "string" 'string' 128]
```

**compiles into**

```
var array_name = [variable, "string", 'string', 128];
```

## JSON
```
j.parse json
j.strin variabel
```

**compiles into**

```
JSON.parse(json)
JSON.stringify(variabel)

// without ;
// u can add . at the end for ;
j.parse json.
```

## Objects
```
object -> {
  hero: 'Superman'
  power: 'Brilliant'
}
```

**compiles into**

```
var object = {
  hero: 'Superman',
  power: 'brilliant',
}
```

## For and While loop
```
// for
for i 0 i > k.len i++ {
  log.i
}

// while
while i < 3 {
  log.'i is smaller than 3'
  i++
}
```

**compiles into**

```
for(i = 0; i > k.length; i++) {
  console.log(i);
}
while(i < 3) {
  console.log('i is smaller than 3');
  i++;
}
```

## Switch
```
switch(num) {
  -> 1337 log.'num is 1337'
  -> 420 log.'num is 420'
  -> 12 log.'num is 12'
  -> 360 log.'num is 360'
}
```

**compiles into**

```
switch(num) {
  case 1337:
    console.log('num is 1337');
    break;
  case 420:
    console.log('num is 420');
    break;
  case 12:
    console.log('num is 12');
    break;
  case 360:
    console.log('num is 360');
    break;
}
```

[npm-badge]: https://img.shields.io/badge/npm-v0.1.5-brightgreen.svg
[npm]: https://www.npmjs.com/package/pearscript

[david-badge]: https://david-dm.org/kocisov/pearscript.svg
[david-dm]: https://david-dm.org/kocisov/pearscript