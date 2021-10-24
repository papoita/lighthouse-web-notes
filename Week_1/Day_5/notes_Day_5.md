# debugging errors
divide code into snippets
use console log to identify the bugs
example is pig_latin_translator

# Coercion and Truthy/Falsey
double
== compare dif types because it forces different one to be the same - called coercion
such as 23 == "23" returns True

triple is preferred method
23 === "23" returns False

Boolean values, everything has one referred to Truthy or Falsey

# All of the following are inherently falsey:

False
// False is False. Makes sense, right?

0
// 0 is the only falsey Number

""
// an empty string is falsey

null
// a null, or empty value, is falsey.

undefined
// an object that has not been defined is considered falsey.

NaN
// Not a Number. You'll learn more about NaN as we go on.

# examples
username = ''; //returns falsey

if (!username) {
  username = 'Siobhan';
}
# examples
shoppingList = [];

if (!shoppingList.length) {
  shoppingList.push('coconut milk');
}

#worked on the follwing:
-rolling dice
-truthy falsy
coersion
debugging
function eqArrays
assertArraysEqual
without
flatten