/** @format */

const wordSearch = (letters, word) => {
	const horizontalJoin = letters.map((ls) => ls.join(""));
	//const verticalJoin = newMatrix.map((ls) => ls.join(""));

	if (horizontalJoin.includes(word)) {
		return true;
	} else {
		return false;
	}

	// for (let m of verticalJoin) {
	// 	if (verticalJoin.includes(word)) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }
};

// const transpose = function (matrix) {
// 	let newMatrix = [];
// 	for (let i = 0; i < matrix.length; i++) {
// 		newMatrix.push([]);
// 	}
// 	for (let i = 0; i < matrix.length; i++) {
// 		for (let j = 0; j < matrix[i].length; j++) {
// 			if (matrix.length === 1) {
// 				newMatrix[i].push([matrix[i][j]]);
// 				console.log(matrix[i][j]);
// 			} else {
// 				newMatrix[j].push(matrix[i][j]);
// 			}
// 		}
// 	}
// 	return newMatrix;
// };

// let matrix = [
// 	["A", "W", "C", "F", "Q", "U", "A", "L"],
// 	["S", "E", "I", "N", "F", "E", "L", "D"],
// 	["Y", "F", "C", "F", "Q", "U", "A", "L"],
// 	["H", "M", "J", "T", "E", "V", "R", "G"],
// 	["W", "H", "C", "S", "Y", "E", "R", "L"],
// 	["B", "F", "R", "E", "N", "E", "Y", "B"],
// 	["U", "B", "T", "W", "A", "P", "A", "I"],
// 	["O", "D", "C", "A", "K", "U", "A", "S"],
// 	["E", "Z", "K", "F", "Q", "U", "A", "L"],
// ];

//console.log(transpose(matrix));

// const printMatrix = (matrix) => {
// 	for (const row of matrix) {
// 		for (const el of row) {
// 			process.stdout.write(el + " ");
// 		}
// 		process.stdout.write("\n");
// 	}
// };
module.exports = wordSearch;
