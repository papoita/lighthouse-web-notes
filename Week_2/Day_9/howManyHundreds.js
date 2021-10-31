// input given a number
//return how many hundreds fit into that number
//The Math.trunc() function returns the integer part of a number by removing any fractional digits.


const howManyHundreds = function(value) {
  let newValue = Math.trunc(value / 100);
  return newValue;
};





//testcases
howManyHundreds(1000); //10
howManyHundreds(894); //8
howManyHundreds(520); // 5


console.log(howManyHundreds(1000), "=?", 10);
//console.log(howManyHundreds(894), "=?", 8);
//console.log(howManyHundreds(520), "=?", 5);
//console.log(howManyHundreds(99), "=?", 0);
//console.log(howManyHundreds(0), "=?", 0);

