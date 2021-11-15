/** @format */

//Nov 13
//Test on js one
//question1
const tempConverter = function (value, cToF) {
	let fahrenheit = 0;
	let celcius = 0;
	if (typeof value === "number") {
		if (cToF) {
			fahrenheit = (value * 9) / 5 + 32;
			console.log(fahrenheit);
			return fahrenheit;
		} else if (!cToF) {
			celcius = ((value - 32) * 5) / 9;
			let roundedcelcius = Math.round(celcius * 10) / 10;
			console.log(celcius);
			return roundedcelcius;
		}
	} else {
		return NaN;
	}
};

tempConverter(32, true);
//question 2
const keyMatcher = function (firstObj, secondObj, key) {
	for (let key1 in firstObj) {
		if (key1 === key && firstObj[key1] === secondObj[key1]) {
			return true;
		}
	}
	return false;
};
keyMatcher(
	{ apple: "red", banana: "yellow", cherry: "red" },
	{ apple: "red", banana: "brown", cherry: "black" },
	"apple"
);

//question3
const countWhich = function (list, cb) {
	let truthyTimes = 0;
	if (Array.isArray(list)) {
		for (let num of list) {
			//console.log(cb(num));
			if (cb(num)) {
				truthyTimes += 1;
				//console.log(truthyTimes);
			}
		}
		return truthyTimes;
		//return cb.length;

		// console.log(list);
		// console.log(cb());
	}
	return false;
	/* IMPLEMENT ME */
};

console.log(countWhich([2, 4, 5, 7, 8, 10, 11], (x) => x % 2 === 0));

//question4
const range = function (count, skipZero, descending) {
	let newArray = [];
	if (typeof count === "number" && !skipZero && !descending) {
		for (let counter = 0; counter < count; counter++) {
			newArray.push(counter);
		}
		//console.log(newArray);
		return newArray;
	} else if (typeof count === "number" && skipZero && !descending) {
		for (let counter = 1; counter <= count; counter++) {
			//counter += counter;
			newArray.push(counter);
		}
		//console.log(newArray);
		return newArray;

		//     for (let i = count - 1; i > 0; i--);
		//     return count--;//if(skipZero && !descending)
	} else if (typeof count === "number" && skipZero && descending) {
		for (let counter = count; counter >= 1; counter--) {
			//counter += counter;
			newArray.push(counter);
		}
		//console.log(newArray);
		return newArray;
	} else if (typeof count === "number" && !skipZero && descending) {
		for (let counter = count - 1; counter >= 0; counter--) {
			//counter += counter;
			newArray.push(counter);
		}
		//console.log(newArray);
		return newArray;
	} else if (typeof count !== "number") {
		return [];
	}
};

console.log(range(5, false, false));
console.log(range(7, true, false));
//question 5

const minmax = function (list) {
	let min = 0;
	let max = 0;
	list.sort(function (a, b) {
		return b - a;
	});
	max = list[0];
	let lastindex = list.length - 1;
	// console.log(lastindex);
	min = list[lastindex];
	console.log(max);
	console.log(min);
	return [min, max];
};

console.log(minmax([1, 2, 3, 4, 5]));
