/** @format */
//how to import the library or go to the api and check the docs
// input from user use node.js readline
const readline = require("readline");
console.log("Welcome to pizza place");
const rl = readline.createInterface.apply({
	input: process.stdin, //keyboard
	output: process.stdout, // terminal or monitor
});

rl.question("what is your name", (answer) => {
	console.log(`Hi ${answer}`);
	rl.question("what pizza do you want", (pizzaType) => {
		console.log(`perfect ${pizzaType} is on its way`);
		rl.question("what estra toppings do you want", (toppings) => {
			console.log(`perfect ${toppings} is on its way`);
			rl.close();
		});
	});
});
