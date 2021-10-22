const args = process.argv;
//console.log(args); prints program, file path, args

//slice allows t only print the arguments
//console.log(args.slice(2));

//adding numbers 
console.log(Number(args[2]) + Number(args[3]));


//function

function sum(args) {
  let arguments = args.slice(2);
  let sumResult = args[0] + args[1];
  console.log(sumResult);

}

//after linting

function sum(args) {
  args.slice(2);
  args[0] + args[1];
}
console.log(sum());


//secret gist
//https://gist.github.com/papoita/a318ace7d77d70f27108d35f05f22853
