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


