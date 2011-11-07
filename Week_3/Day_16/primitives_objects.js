typeof (true);
// "boolean" 
typeof (Boolean(true));
// => "boolean" 
typeof (new Boolean(true));
// => "object"

const greeting = "Hello, world!"
const objGreeting = new String("Hello, world!");

//the == (type-coercion vulnerable) comparative returns true, while the === comparative returns false.
greeting == objGreeting;
// => true

greeting === objGreeting;
// => false