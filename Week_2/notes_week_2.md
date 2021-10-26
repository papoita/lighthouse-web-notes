# Oct 25_2021

# middle function
make sure to read the aim of the function before starting on the result

think about complexity only in certain cases, mantain a balance between depth and speed

# primitive data types
6 types
-undefined
-null
-boolean
-string
-number
-symbol

# object not primitive
eg date
functions are objects in js

contain key value pairs: each key maps to a value
keys are always strings
have unique keys
have keys point to values of any type

object literal assigned to a value
const tinyObject = { "size": "Tiny" }; 
key is size and value is tiny

objects are like a table with 2 columns

control + c to cacel node REPL

to access a value within an object []
'''
const person = { firstName: "Khurram" };
const firstName = person["firstName"];
person.firstName //alternative
'''

when a key doesn't exist we get undefined

## Asigning a new value to a key
const mary = { name: "Mary Sue" };
mary["name"] = "Mary Jane";
mary["age"]  = 22;
mary // shows the resulting object with both properties

## objects as values
const person = {
  name: "Paul",
  address: {
    street: "310 W 95th",
    city: "New York",
    zipCode: 10027
  }
};
person["address"]["city"]; // => "New York"

## insert a new array
person["phoneNumbers"]= 3143585
to insepct it
typeOf person["phoneNumbers"];

## example needed to clarify
const spam = "spam";
person["dislikes"] = { food: spam, "e-mail": "spam" };

## to inspect objects
To inspect an object's keys, there is a method 
Object.keys(...) that returns an array of keys.


# Objects and Iteration
for-loop – for PropertyX in ObjectY

# objectives from past week

integrate functions within functions
callback functions
other type of syntax to declare functions
revise functions from lotide week1

# countOnly function


uses assertEqual (need primitive values to work)