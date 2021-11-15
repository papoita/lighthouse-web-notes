/** @format */

//How to create many empty arrays
const transpose = function (matrix) {
	let newMatrix = [];
	for (let i = 0; i < matrix.length; i++) {
		newMatrix.push([]);
	}
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix.length === 1) {
				newMatrix[i].push([matrix[i][j]]);
				console.log(matrix[i][j]);
			} else {
				newMatrix[j].push(matrix[i][j]);
			}
		}
	}

	return newMatrix;
};

// Do not edit this function.
const printMatrix = (matrix) => {
	for (const row of matrix) {
		for (const el of row) {
			process.stdout.write(el + " ");
		}
		process.stdout.write("\n");
	}
};

printMatrix(
	transpose([
		[1, 2, 3, 4],
		[1, 2, 3, 4],
		[1, 2, 3, 4],
		[1, 2, 3, 4],
	])
);

console.log("----");
printMatrix(
	transpose([
		[1, 2],
		[3, 4],
		[5, 6],
	])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));

//using console.logs
//only works for 2 first cases..
// /** @format */

// //https://www.freecodecamp.org/news/nesting-for-loops-in-javascript/

// //https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript

// /** @format */

// //How to create many empty arrays
// const transpose = function (matrix) {
// 	// Put your solution here

// 	let newMatrix = [];

// 	for (let i = 0; i < matrix.length; i++) {
// 		//console.log(`Sub-array ${i}: ${matrix[i]}`);
// 		newMatrix.push([]);
// 	}
// 	for (let i = 0; i < matrix.length; i++) {
// 		//console.log(`Sub-array ${i}: ${matrix[i]}`);

// 		for (let j = 0; j < matrix[i].length; j++) {
// 			console.log(`element ${j}: ${matrix[i][j]}`); //is the whole matrix
// 			console.log(`newmatrixj before ${j}: ${newMatrix[j]}`);
// 			newMatrix[j].push(matrix[i][j]);
// 			console.log(`newmatrixj after ${j}: ${newMatrix[j]}`);
// 			//newMatrix.push(matrix[0]);
// 			//console.log(newMatrix);
// 		}
// 	}
// 	//console.log(newMatrix);
// 	return newMatrix;

// 	//console.log(newMatrix);
// };

// transpose([
//   [1, 2, 37, 4],
//   [1, 25, 3, 4],
//   [1, 9, 3, 4],
//   [1, 2, 6, 44]
// ]);

// Do not edit this function.
// const printMatrix = (matrix) => {
// 	for (const row of matrix) {
// 		for (const el of row) {
// 			process.stdout.write(el + " ");
// 		}
// 		process.stdout.write("\n");
// 	}
// };

// printMatrix(
// 	transpose([
// 		[1, 2, 3, 4],
// 		[1, 2, 3, 4],
// 		[1, 2, 3, 4],
// 		[1, 2, 3, 4],
// 	])
// );

// console.log("----");
// printMatrix(
// 	transpose([
// 		[1, 2],
// 		[3, 4],
// 		[5, 6],
// 	])
// );
// printMatrix(transpose([
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]));

// console.log('----')

// printMatrix(transpose([
//   [1, 2, 3, 4, 5, 6, 7]
// ]));
