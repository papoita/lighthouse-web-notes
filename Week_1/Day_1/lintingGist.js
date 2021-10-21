var foo = 'hello';
bar = 'world'

if (foo == 'hello') {
  console.log(foo + ' ' + bar);
}

// to this after lint
let foo = 'hello';
let bar = 'world';

if (foo === 'hello') {
  console.log(foo + ' ' + bar);
}
/*
whats for lunch
https://gist.github.com/papoita/4e3b2dd3ecef253c7988d59b199b4ac1
*/