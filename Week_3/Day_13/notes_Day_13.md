Nov 2-3, 2021

# Unit Testing

Manual testing repetitive process

vs

automated testing

## types of testings

[docs](http://codeutopia.net/blog/2015/04/11/what-are-unit-testing-integration-testing-and-functional-testing/)
 ### unit testing,
 testing small pieces of code, typically individual functions, alone and isolated. If your test uses some external resource, like the network or a database, it’s not a unit test.

 A unit tests should essentially just give the function that’s tested some inputs, and then check what the function outputs is correct. 

 reat for preventing regressions – bugs that occur repeatedly.
validate results in code
 tools for testing
 Mocha, Jasmine and Tape.
 ### integration testing, and 
 est how parts of the system work together – the integration of the parts. 
 slower
 added complexity

  you need to test two separate systems together, or if a piece of code is too complex to unit test
  validate results in code
 ### functional testing
 E2E
 slow
 difficult to maintain
 used for testing common user interactions

 validates as if you were a user of the page
 slenium, protractor, phantom, casper


# Back to unit testing

TDD Test driven development
BDD Behaviour driven development

isolated from dependencies
replace dependencies with fakes you can control

mocha helps write these tests and have better reporting
## TDD
1. write the test
2. run the test and any other test
3. write minimum ocede required tomake the test pass
4. run the test to check new test passes
5. refactor code
6. repeat from 1

code-coverage 90-100% meaning maintaining code and adding new features is easy
if function is updated you have to update the test
makes it modular
save time and money (in the long run)

## BDD
behaviour driven development:covers entire cycle development process from planning to writting code


set of best practices 
should be use together with TDD

addresses iplementation detail in unit tests "it should do something"

## Happy path 
testing path trhough a system where everything works, the data is correct, the system stays up, users are well behaved. 
Test thsi first we understand how the system works, want to ensure basic features work.

# Mocha and Chai intro

understand what BDD is and why it's used
install a BDD testing framework.
use describe and it to setup unit tests.
use assert to perform unit tests.
appreciate how unit testing applies to the world of web development (and not just command line scripts).

mocha testing framework
chai assertion library

## BDD Frameworks
