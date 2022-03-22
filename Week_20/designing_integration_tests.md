# desiging test for application component

We will mock the functions we use from the axios library.
We will write a test to confirm that the scheduler can load data.
We will write an asynchronous test that waits for a component to update before proceeding.
We will use containers to find specific DOM nodes.
We will chain promises to handle asynchronous testing.
We will override mock implementations for specific tests.
We will use setup and teardown functions provided by Jest to perform common tasks.

# Mocking modules
already used the jest.fn() to mock individual functions so that we can spy on them but we have only scratched the surface of what mocks can do for us in support of testing our components in isolation

We can mock external libraries by making a file with the same name in the __mocks__ directory. The file will export an object with the three functions that we use in the useApplicationData Hook.

Create a new src/__mocks__ folder with an empty axios.js file. It is important that the name of the module matches the name of the library that we are mocking.

There is a constraint that we place on ourselves when using the 

# @testing-library packages.
https://testing-library.com/docs/queries/about/#priority 
We decide to avoid selecting elements based on their class or id. The test id is different as it is intentionally added to an element when we want to take advantage of scoping our queries. If we find ourselves having to use the 

test id attribute too often then it can be used as an indicator that the application may not be accessible to assistive technology.

# Queries Accessible to Everyone 
Queries that reflect the experience of visual/mouse users as well as those that use assistive technology.
## getByRole: 
This can be used to query every element that is exposed in the accessibility tree. With the name option you can filter the returned elements by their accessible name. This should be your top preference for just about everything. There's not much you can't get with this (if you can't, it's possible your UI is inaccessible). Most often, this will be used with the name option like so: getByRole('button', {name: /submit/i}). Check the list of roles.
## getByLabelText: 
This method is really good for form fields. When navigating through a website form, users find elements using label text. This method emulates that behavior, so it should be your top preference.
## getByPlaceholderText: 
A placeholder is not a substitute for a label. But if that's all you have, then it's better than alternatives.
## getByText: 
Outside of forms, text content is the main way users find elements. This method can be used to find non-interactive elements (like divs, spans, and paragraphs).
## getByDisplayValue: 
The current value of a form element can be useful when navigating a page with filled-in values.