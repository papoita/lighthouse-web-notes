//How to create many empty arrays
const transpose = function (matrix) {
  // Put your solution here


  let newMatrix = [];

  for (let i = 0; i < matrix[0].length; i++) {
    let row = [];
    for (let j = 0; j < matrix.length; j++) {
      //console.log(matrix[i][j]); //is the whole matrix
      row.push(matrix[j][i]);
    }
    newMatrix.push(row);


  }
  console.log(newMatrix);
};




// transpose([
//   [1, 2, 37, 4],
//   [1, 25, 3, 4],
//   [1, 9, 3, 4],
//   [1, 2, 6, 44]
// ]);

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n')
  }
}

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----')
transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]);
// printMatrix(transpose([
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]));

// console.log('----')

// printMatrix(transpose([
//   [1, 2, 3, 4, 5, 6, 7]
// ]));