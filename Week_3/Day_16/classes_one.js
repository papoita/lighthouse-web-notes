



//let pizza1 = new Pizza();
//let pizza2 = new Pizza();

//pizza1 and pizza2 are pizza objects
//these objects are both instances of the same class
class Pizza {


  constructor() { //method
    this.toppings = ["cheese"];
  }

  addTopping(topping) { //method
    this.toppings.push(topping);
  }
}

class SomeClass {
  methodName(parameters) {
    //this is a method
    this.hello = "hi"; //created a property called hello
  }
}

let pizza1 = new Pizza();
console.log(pizza1.toppings); // ["cheese"]
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
console.log(pizza1.toppings); // ["cheese", "mushrooms", "peppers"]

let pizza2 = new Pizza();
console.log(pizza2.toppings); // ["cheese"]
pizza2.addTopping("more cheese");
console.log(pizza2.toppings); // ["cheese", "more cheese"];
//---

class Pizza {

  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

}

let pizza = new Pizza('large', 'thin');

let pizza = {
  size: 'large',
  crust: 'thin',
  toppings: ["cheese"]
}

//--

