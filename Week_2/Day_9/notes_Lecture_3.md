# Lecture 3

arrow functions are preferred

each function has 

organized piece of code that helps keep reusable and dynamic, efficient

When calling a function data in 

passed to the function as a value =argument eg. paola, 30

function takes in =parameter eg. name, age

functional programming

## function declaration

function printUserName(){}

printUserName(); //invoking the function
## function expression
anonymus function

const printUserName = function(){}

printUserName();

## anonymous functions
//difficult to get good errors

(function(){
  console.log("hello Mars!");
})();

 //becomes an expression that creates a function you can invoke

 ## Arrow functions
 //makes code more robust
 //reduce code writting, 
 //do not use a variable before declaring
 //code is more predictable/more organized


 const printUserName = () => {
   console.log (userName);
 }

is the same as
const sum = (a,b) => a+b;

# Things to revise
hoisting

# functions in js are first class citizens
can be treated mostly like variables or any other value in JS

can be passed as arguments and as parameters

# higher function
take in another function


.map
.reduce
.filter
.forEach
.some
.every

a function that accepts another function as an input parameter or return another function

functions should only do one thing at a time

callbacks vs high order functions

callbacks
function sayHi(){
  console.log("Hello there!");
}

 function that's passed into another function is the callback function, and the function that accepts the callback function is the higher-order function

function greet (sayHi){
  sayHi
}
