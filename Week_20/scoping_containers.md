There are two ways that we will work with dom-testing-library queries. They can either be imported or returned. The import would still need to be done at the top of the file, whereas render should be run in a test.
```jsx
import { getByText } from "@testing-library/react";
const { getyByText } = render(<Application />);
```
Until now we have only been using the queries returned by the render function which are automatically scoped to the document.body.
 When we use these queries to search, we start from the top of the document each time.

# Using prettyDOM
 Import the prettyDOM function from @testing-library/react. Pass the container value to the prettyDOM function and console.log the returned text.

console.log(prettyDOM(container));
When the test runs again, it should output a more helpful representation of the DOM tree that container points references. We can wrap any DOM node value with prettyDOM to get valuable debug information.

We should use the 
# ByLabelText, ByPlaceholderText, ByText, ByDisplayValue, ByAltText, ByTitle and ByRole queries most of the time.

Add a data-testid="appointment" prop to the <article> root element in the src/components/Appointments/index.js file.

Any attribute on an HTML element prefixed with data- is accessible through the browser API using document.querySelector("[data-testid=appointment]"). It is the same API that the dom-testing-library uses to perform the query internally.

Instead of searching for one element with the test id, we are going to search for all of the elements in the DOM with the matching data-testid attribute.

# getBy vs queryBy
getByText function will throw the error "Unable to find an element with the text: Lydia Miller-Jones.". The test output provides a helpful message.
queryBy just says timed out not very descriptive