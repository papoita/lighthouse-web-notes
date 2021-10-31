# Oct 31
## Anonymous functions

are called inline and do not have a name

## Arrow functions
new syntax

// BEFORE: anonymous callback as function expression 
[1,2,3].forEach(function (num) {
  console.log('num: ', num);
});

// AFTER: anonymous callback as arrow function
[1,2,3].forEach((num) => {
  console.log('num: ', num);
});


[1,2,3].forEach(num => console.log('num: ', num));

## First-class citizens /objects

An object with no restrictions on its creation, destruction, or usage

Correct, this includes the ability to be passed as an argument, returned from a function, and assigned to a variable

# filtering Using  allbacks

filter iterates over array and returns tue or false whether lement should be included in reslts

# gist findingWaldoAnonymously
https://gist.github.com/papoita/a2de6a5dbf00f970ffd21ffce3b3bfc9

# gist passingGradesOnly
https://gist.github.com/papoita/06c5d3edc00982975c2deb65e4e29c56