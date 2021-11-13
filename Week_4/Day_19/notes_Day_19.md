Nov 10
# Mocha vs Chai

mocha gives the describe an dit functions
each it test shoul have at least one assrtion

chai is an assertion library. so no longer our assertion functions are necessary.

## comparing arrays, 
Chai gives us assert.deepEqual, because assert.strictEqual simply uses === to compare values, which will not work for comparing objects and arrays.
tail and middle with deepEqual
head with strictEqual

# exporting functions
require lotide can use a single master index file that contains all the requirement functions using an object that 
example of import
const assertArraysEqual = require('./assertArraysEqual');
example of export
module.exports = without;

# property value shorthand
ES6 has a new, shorter object syntax which allows us to assign properties to objects using fewer characters.
if you want to define an object who's keys have the same name as the variables passed-in as properties, you can use the shorthand and simply pass the key name.