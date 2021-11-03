
//matches package name for readability
//console.log(assert);
const sayHi = function (name) {
  return `Hi ${name}`;
};
const actual = sayHi("charlote");
const expected = "Hi Che";

//option1
//only exporting one thing
module.exports = sayHi; //code exported needs to be above the export

//option2 exporting (key/value)
module.exports = sayHi;
module.exports.sayHi = sayHola; //anpther function

// option3 commonly used, exzporting more than one 

//assert test




//option about moving the strict, it provides better ui and


// const assert = require("assert").strict; //name matches package name for readability
// //console.log(assert);
// const sayHi = function (name) {
//   return `Hi ${name}`;
// };
// const actual = sayHi("charlote");
// const expected = "Hi Che";


// //assert test

// assert.Equal(actual, expected);
// console.log("run this code if code is running");