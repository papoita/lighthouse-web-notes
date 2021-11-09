Nov 8
# OOP part 3

When a subclass implements a method that already exists in the superclass, it is called method overriding.

OOP languages allow subclasses to have a reference on the parent class. This is usually done via the super keyword

## super
```
// Super class
class Person {
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}

class Mentor extends Person {
  // Mentor bios need to include a bit more info
  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  }
}

// DRIVER CODE

const bob = new Mentor('Bob Ross', 'I like mountains way too much');
console.log(bob.bio());
```

## validating Data and computed value

We could create a property to keep track of the price of a pizza. Every time the size or toppings change, we could just update this price property. 

The get and set syntax binds an object's property to a function that will be called when that value is looked up. 

### setter method: 
allows for data validation before updating infromation. rsults in more lines of code
and is less efficient

### getter method: 
allows you to compute a value when the valu eis needed rather than always keeping track of the value

### super
us esuper when overriding methods to execute the superclass'version of the methos
when override a method but want the superclass version of the method to still be called

# Dependency Injection

Dependency Injection. It's a fancy word that simply means "passing an object the things it needs rather than having the object access them itself". It makes for code that is much more modular and testable.