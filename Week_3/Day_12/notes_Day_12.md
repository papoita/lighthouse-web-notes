Nov 2, 2021

# this in music library

gist
https://gist.github.com/papoita/ac192838e3ea202518b2bf5a02dee933

to include the function of the music library to the object library:
Instead of referring to library inside of your methods, you should refer to this instead, ie. this.tracks
Outside of the library object, functions will need to be invoked as follows: library.printTracks()

plus 
const printPlaylists = function () {
    // ...
};
replaced to
printPlaylists: function () {
    // ...
  },

  and

  generateUid function had to call this.generateUid

  # recursion
a function that calls itself until it doesn't
anything that can be written in a for loop can be written with recursion
if(number<=12) is the recursive case
number>12 is the base case
it should brek down the problem into a smaller one
printing nested arrays is better solved using recursion

# introduction to modules
console.log(module);

each file that node runs is a separate module

Module {
  id: '.',
  exports: {},
  parent: null,
  filename: '/Users/superman/codes/moduleCheck.js',
  loaded: false,
  children: [],
  paths: [ ... ] 
}

to import a required function to the file

const sayHelloTo = require('./myModule');
assuming it is in the same directory

# importing and exporting modules 

We learned that in Node,

modules are its way of organizing code into individual files
every js file in node is implicitly a module
we can console.log(module) and see its details
module.exports tells node what to export from a file
it defaults to {}
we can use require with relative paths (like ./myModule)
it doesn't need the .js extension, as that is implied
With this knowledge, we can now start to DRY up our Lotide project!