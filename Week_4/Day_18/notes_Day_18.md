Nov 9

# OOP best practices
goals: reduce duplicated code (reusable)
breaking code into units (modular)

# private properties
making something private, but if we add an _ to the start of a property name, other developers will know that they shouldn't access it directly.

# Single responsbility principle
a class should be responsible for a single part of the app's functionality, giving it only one reason to change. Or more simply, a class should only have one job.

# inheritance
When we're not using OO, we use functions and modules to reduce duplicate code and make our code more reusable. When we're using OO we can use inheritance to achieve this

# when to use object orientation OO
popular strategy for modularization that you can use whenever you need to.
programming in language like Ruby, C++, or Swift, you will use OO
OO is often a good option
doe snot need classes
but Es6 introduced class keyword

# summary
A class is a blueprint from which instances of objects can be created (i.e. newTask vs a task)

Classes have data in the form of value properties and behaviour in the form of methods

Classes can inherit behaviour from other classes using the extends keyword

Subclasses can override methods that are inherited in their superclass

JavaScript also gives us get and set keywords to more cleverly define methods that are data getters and setters