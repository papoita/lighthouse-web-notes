<!-- @format -->

Nov14

## Asynch control flow

### setTimeout

used to delay the execution of some code to later. We specify the code via a callback, and the delay in ms
console.log('first line');

````setTimeout(() => {
  console.log('timeout line');
}, 1000);
console.log('last line'); ```

````

The setTimeout function is used to defer code execution by a specified number of milliseconds
A callback is passed in to setTimeout and setTimeout calls it after x ms
It's used on many websites to delay a message or response

### process.stdout.write(char)

so it prints in the same line
