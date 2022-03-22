MArch 18, 2022
repetitive so automation can be done
testing code provides confidence on code

regression testing
veryfying previous bugs have not returned in subsequent version of the software

Write tests: Certain types of testing should be automated.
Not too many: We don't need 100% code coverage to have a high level of confidence.
Mostly integration: These types of tests are more thorough and test how the different parts of the application work together.

https://www.youtube.com/watch?v=Fha2bVoC8SE&ab_channel=OKG%21-PaulDowman%27stecheventsandinterviews

Guillermo Rausch
TDD test driven development
code coverage how much of the coed is covered

# Static code analysis ESLINT
linting and static typing
Two popular options are TypeScript and Flow
https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

# Unit tests 
## in the case of scheduler app
Testing our Button
Testing the DayListItem
Transforming Data
Building a Hook
Adding an Interviewers Selector

# integretation test
request to aPI a lot of buisness logic
small setup
 the process of proving that two or more units of code work together.


# end to end test
CYPREss tool

test higher up your tree

# User acceptance testing


# test- Driven Development TDD
We can call the process we use during test-driven development "Red, Green, Refactor":

Red - Write a small test that doesn't pass.
Green - Do the minimal amount of work to make the test pass.
Refactor - Improve the code, continuing to ensure all tests still pass.

https://www.youtube.com/watch?v=zqdCM8zR6Mc&ab_channel=OKG%21-PaulDowman%27stecheventsandinterviews

https://www.youtube.com/watch?v=6pYUzEduLyU

```jsx
describe('', () =>{
  it('should remove', () => {
expect(function()).toContain(;hello);
  })
  it('should add', () => {

  })
})
```
# The setup and teardown methods
 allow us to execute functions before and after the tests are run. There are four functions available to us, each with a descriptive name. We will be returning to these in future activities.

beforeAll(fn, timeout)
beforeEach(fn, timeout)
afterEach(fn, timeout)
afterAll(fn, timeout)
Note
Jest puts a number of methods in the global environment for test files. This is why we can use it and afterEach without importing them.

# prop-types
prop-types library is another option for providing us with confidence in our code. We can enforce a contract between the components that we write and the code that uses them. With tools like this, we are informed early of potential bugs caused by inconsistent types. Deciding not to use the prop-types library is reasonable as long as we can gain the same level of confidence elsewhere (for example, if we're using TypeScript).

# unit testing in scheduler project

We can break a unit test into three phases.

Initialize the component that we would like to test.
Trigger the change that executes the unit.
Verify that the unit produced the expected result.

# test- render
most basic test for react component

# testing helpers
```jsx

it("renders its `children` prop as text", () => {
  const { getByText } = render(<Button>Default</Button>);
  expect(getByText("Default")).toBeInTheDocument();
});
```

The render function is imported from the react-testing-library.
The expect function is injected into the global scope by Jest.
The getByText query function is returned by the render function but is a part of the the dom-testing-library.
The toBeInTheDocument function is a matcher provided through Jest by the jest-dom library.

# Jest
https://jestjs.io/docs/expect

matchers are toBe, toHaveLength, toHaveProperty and toBeGreaterThan. We can add more matchers by extending the defaults.

toHaveClass and toHaveValue matchers are examples of the types of helpers that make DOM testing easier. These matchers help us verify expected behaviour.
# react-testing-library
cleanup and act.

# DOM testing library
 query we want to use is getByText. The variant is getBy and the type is ByText.

# Expecting
 expect(getByText("Default")).toHaveClass("button");
expect(getByPlaceholderText("Enter Student Name")).toHaveValue("");
expect(getByTestId("student-name-input")).toHaveValue("Lydia Miller-Jones");


# Mocking functions
With unit testing and integration testing requiring us to "poke holes in reality". We use a feature called mock functions to replace real functions.
spies
part of Jest

```jsx
it("doesn't call the function", () => {
  const fn = jest.fn();
  expect(fn).toHaveBeenCalledTimes(0);
});
```
We can capture the different calls made to the function and the arguments for each call.
We can configure the function to return any value that we want for the specific test.

# Scheduler
When we use getByText we should be confident that the element exists. If it does not exist, then it throws an error instead. We can test for the absence of something by using queryByText and checking that the value is null.
It is a case insensitive regular expression. This search is more general than the absolute string "Student name cannot be blank".
The onSave reference is a mock function that we can pass to the Form component.

# Code Coverage

metric used to track code execution through test suite

using it in the Form component of scheduler project

Code coverage only provides a measure of how many lines of code run in a program, not how well tested the behaviour is.

```
npm test -- --coverage --watchAll=false
```
## RESULTS IN A TABLE
with 6 columns
1. "File" contains the project files labelled by file or directory name.
2. Code "statements" covered during testing.
3. Code "branches" covered during testing.
4. "Functions" called during testing.
5. "Lines" of code executed during testing.
6. Untested line numbers.

fireEvent.change helper which is provided by the react-testing-library. We can use this to trigger the onChange event for the input field. 
## to skip a test
If we declare a test with xit() instead of it(), it will skip the test. We can also use test.skip() if we prefer that style. When we skip the "calls onSave function when the name is defined" and regenerate the coverage report, we can see an example of coverage overlap. The improved test that we wrote covers the same statements in addition to the ones covered through the onChange event.

xit("calls onSave function when the name is defined", () => {});