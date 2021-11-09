class Pizza {
  constructor() {
    this._toppings = [];
  }
  addTopping(topping) {
    if (this._toppings.indexOf(topping) > -1) {
      // Topping already exists, deny!
      return false;
    }
    this.toppings.push(topping);
    return true;
  }
}

let pizza = new Pizza();
pizza.addTopping("cheese");
pizza.addTopping("mushrooms");
pizza._toppings.add("pineapple");