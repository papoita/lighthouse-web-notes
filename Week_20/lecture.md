March 19, 2022

Warren Uhrich
https://vimeo.com/689430503/9e5cd602f6

https://kentcdodds.com/blog/write-tests

https://cheatography.com/aiqbal/cheat-sheets/cypress-io/

https://docs.cypress.io/guides/overview/why-cypress#In-a-nutshell


We can write unit tests for a lot of JavaScript code using the core Jest framework.

Design and write test for React applications

Identify the difference between Jest and Cypress
Install and configure Cypress
Design End-to-End tests with Cypress
Write End-to-End tests with Cypress

# Jest vs Cypress
- Jest is a CLI approach
- Jest is intended for unit-testing, integration testing
- Jest runs very, very fast and is very efficient!
- Jest is used to test functions, components, more specific focus

# What is cypress
end to end
Holistic approach to testing
test core apps features many components working together

# Why cypress
flexibility test app without source code
screenshots and video of success and failures
 easy to share with stakeholders


# Setting up Cypress
Install the package and dependencies: npm i cypress --save-dev

First time set-up: ./node_modules/.bin/cypress install

Run cypress in-project via: ./node_modules/.bin/cypress open

Folders/Files and their Purposes!
/cypress.json: Used to override default configuration values.
/cypress/fixtures: Test data; often in JSON.
/cypress/integration: Our test specifications.
/cypress/plugins: Add-ons to expand on Cypress' functionality.
/cypress/support: Scripts; an area where we can add on to Cypress if needed.
Common Commands
describe(), it(), and beforeEach() are afforded to us by Mocha.
Describe is used to, well, describe a block of tests!
It is used to label a specific test block / unit.
BeforeEach allows us an opportunity to add code/setup that will run before each text in the block.
cy.visit() visits a web page.
cy.get() Retrieves an HTML element based on jQuery/CSS-like selectors.
.as() Assign an alias for later use in cy.get() or cy.wait(), use an @ in a selector to call upon an alias.
.find() Retrieves a child element from inside of a selected element.
cy.intercept() Used for "spying" (checking for use of a particular request) or "stubbing" (replacing the response for a particular request.)
cy.wait() Waits before proceding with test instructions.
.click(), .type(), .check() are used to interact with elements and forms in a web page.
Resources
Cypress (Official Website)
Trouble in WSL2? Follow the documentation carefully!
WSL2 requires X-Server, which usually requires Firewall tweaks to get through! It allows your Linux to reach Windows and render the program's GUI (Electron app: Cypress GUI.)
End-to-End Web Testing with Cypress (O'Reilly Book)

# add plugin
with CLI

 then add the line in package.json