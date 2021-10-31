// forEach in reverse
//loop through elements in the array reverse
// takes the callback as a parameter
// run it against each element

//last elemet of my array is 
//array.length -1 // is the last index of my array

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const forEachInReverse = (array) => {
  for (let i = array.length - 1; i = 0; i--) {
    console.log(array[i]);
  }
}
forEachInReverse(numbersArr);