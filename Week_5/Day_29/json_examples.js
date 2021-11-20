/** @format */

const jsonString = '{"a":1, "b":2, "foo":"bar"}'; // string version of a JS Object
jsonString; // a string, of course :)

const obj = JSON.parse(jsonString);
obj;

delete obj.foo;
obj;
JSON.stringify(obj);
