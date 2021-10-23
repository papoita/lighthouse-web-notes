//to test first
//console.log(process.argv);

//console.log(input);

//writting in the terminal node index.js 2 3

//input.slice(2);

const input = process.argv.slice(2);

function convertToNumber() {
  const number = [];
  for (let i = 0; i < input.length; i++) {
    number.push(Number(input[i]));
    console.log(typeof input[i]);
  }
  return number;
}

for loop, if !== Number
isNaN(number){
  console.log("error");
}

Number.isInteger(number)
finalNumbersArray.push(number);

function sum() {
  let sum = 0;
  for (const number of arrayToSum) {
    sum = sum + number;
  }
  return sum;
}
process.exit();

//checkForNumber
//isWholeNumber
//sum
//convertedNumbers
//finalNumbersArray
//sumTotal

console.log(`The sum is ${sumTotal}`);