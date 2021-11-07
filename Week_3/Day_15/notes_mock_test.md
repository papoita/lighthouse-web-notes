Nov 7, 2021
# notes on mock test 1 
basic js
new directory assessment exams

# counting values
* For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function (arr) {
  const obj = {};
  arr.forEach(number => {
    if (!obj[number]) {
      obj[number] = 1;
    } else {
      obj[number] += 1;
    }
  })
  let highestValue = 0;
  let highestValueKey = 0;

  for (let key in obj) {
    const value = obj[key];
    if (value > highestValue) {
      highestValue = value;
      highestValueKey = key;
    }
  }
  return Number(highestValueKey);
};
//loop
//arra[i]


console.log(mode([6, 2, 3, 4, 9, 6, 1, 0, 5]));


// let count = [];
// let maxIndex = 0;


// /* IMPLEMENT ME */
// for (let i = 0; i < arr.length; i++) {
//   let index = arr[i];
//   //console.log("this is index", index);
//   count[index] = (count[index] || 0) + 1;
//   //console.log("This is count of index", count[index]);
//   if (count[index] > maxIndex) {



//   }
//   return index;
// }

// //

// const map = arr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());

// console.info([...map.keys()])
// console.info([...map.values()])
// console.info([...map.entries()])
// Don't change below: