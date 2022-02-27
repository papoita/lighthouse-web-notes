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
