Feb 27, 2022

this application, a student can create, edit and delete interview appointments.

* Build components in isolation: We'll start with those at the outermost nodes of the component tree (e.g. buttons, individual list items). and work our way up the tree to the components that need to use the ones built first.
* Retrieve data from an API and render the data using components.
* Manage the visual state of the application including create, edit and delete capabilities.
* Implement advanced React patterns to manage the state and add live updates.

* Storybook
components build in isolation,

* webpack 
to see changes live in the browser

* Jest test-runner
tetsing environment instead of mocha and chai
starts in watch mode

* cypress: end to end testing
testing using simulated user interaction

- If you want to manually test your components in isolation: use Storybook.
- If you want to run your entire application in development mode: use webpack-dev-server.
- If you want to run unit or integration tests from the command line: use Jest.
- If you wan to run automated end-to-end tests in the browser: use Cypress.

# to start project
npm start

# to view storybooks 
npm run storybook
opens in port
http://localhost:9009/

# jest
Run the npm test command to run Jest
Press a to run all tests if prompted
Confirm that the existing tests pass

# Javascript tooling
javascript compilation and module bundling

# babel: javascript compiler
https://babeljs.io/repl#?browsers=&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgJhmAQEMIIA5E1DAIjGrloD4rVsB6A5gKBn4FA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=react&prettier=false&targets=&version=7.4.3&externalPlugins=&assumptions=%7B%7D

Embed environment variables into the code at build time
Remove code that does not ever get run
Use features of JavaScript that aren't standard

# button component
apply styles to base button

```jsx
<Button danger={true}>Cancel</Button>
 ```
 is the same as 
 ```jsx
 <Button danger>Cancel</Button>
 ```

 # adding interactivity

 ## Js example
 onclick

 ```html
 <div onclick="alert(`You just clicked this div.`);">Click Me</div>
 ```

 disabled button
 ```html
 <div onclick="alert(`You just clicked this div`);" disabled>Click Me</div>
 ```

## JSX
```jsx
<div onClick="alert(`You just clicked this div.`);" className="some-class" disabled>Click Me</div>
```

# Running unit tests

A button can render
A button renders with the default style
A button renders with the "confirm" style when the confirm prop is true
A button renders with the "danger" style when the danger prop is true
A button can trigger an onClick prop with the button event handler
A button does not trigger onClick prop when the disabled prop is true

* In the src/components/__tests__/Button.test.js file remove the .skip from the five tests described. Run the tests to confirm that they all pass with npm test.


# refactor code

use library called Classnames to clean up code (already installed in node modules)
* in  src/components/Button.js

import classNames from classnames;


# DayListItem
name:String the name of the day
spots:Number the number of spots remaining
selected:Boolean true or false declaring that this day is selected
setDay:Function accepts the name of the day eg. "Monday", "Tuesday"
We use the spots prop for two purposes. To display the text "{props.spots} spots remaining" and to determine if the day is full. The DayListItem knows what it means to be full but not what it means to be selected. It uses this prop directly to determine which styles to apply.

# DayList 

days:Array a list of day objects (each object includes an id, name, and spots)
day:String the currently selected day
setDay:Function accepts the name of the day eg. "Monday", "Tuesday"

# component creation steps

Create a file with our component name
Create & Export the component function
Add the base HTML in the return statement of our component
Create & Import a CSS / SCSS file holding the style of our component
Write stories for Storybook to render our component in isolation
Refactor the hardcoded content to use props & state

# Prop drilling
get data to lower parts of the React Component tree

# Storybook Syntax

An argument can be passed to a function in Storybook by wrapping it in () after the name of the action, as seen in the code above.

# Controlled components

Controlled components use HTML form elements (e.g. <input>, <textarea>, <select>) but use React state to store their current value and update them.

HTML form elements have an attribute called value and support an event called onchange that fires if the value changes

etting the value attribute on the form element with a variable that is stored in state.
Using an onChange (camelCase, because it's React!) event that fires the setter function set a new value when the input changes.

# controlled List
select list that takes user input, but is built without using any type of HTML form input (no <input> tags, no <select> tags). Both the <DayList> and the <InterviewerList> were built this way.

The thing to note here is that because these lists are built without HTML form inputs, the lists do not have built-in value or onChange attributes

```jsx
<script>
  function displayInterviewer() {
    const currentInterviewer = document.querySelector("#interviewer-list").value;
    document.querySelector("#interviewer-output").innerHTML = `The currently selected interviewer is: <strong>${currentInterviewer}</strong>`;
  }
</script>

<p>Select an interviewer from the list.</p>

<select id="interviewer-list" onchange="displayInterviewer()">
  <option value="Sylvia Palmer">Sylvia Palmer</option>
  <option value="Tori Malcolm">Tori Malcolm</option>
  <option value="Mildred Nazir">Mildred Nazir</option>
  <option value="Cohana Roy">Cohana Roy</option>
  <option value="Sven Jones">Sven Jones</option>
</select>

<p id="interviewer-output">The currently selected interviewer is:</p>
```
vs in react 
```jsx
<select id="interviewer-list" onChange={displayInterviewer}>
  <option value="Sylvia Palmer">Sylvia Palmer</option>
  <option value="Tori Malcolm">Tori Malcolm</option>
  ...
  ```

  * Using <ul> and <li> to create select lists is a common pattern in React.
  we used React props to assign a piece of data (a day name or interviewer ID) to each <li>. Then we stored a value in state (day or interviewer). The value stored in state 

  # Appointment component
Empty, Show, Form, Confirm, Status and Error

# steps to build components
Create a file with our component name
Create & Export the component function
Add the base HTML in the return statement of our component
Create & Import a CSS / SCSS file holding the style of our component
Write stories for Storybook to render our component in isolation
Refactor the hard coded content to use props & state
