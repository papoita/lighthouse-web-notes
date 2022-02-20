create -react-app

1. in terminal
npx create-react-app example-app
2. available scripts:
* npm start
    Starts the development server.

  * npm run build
    Bundles the app into static files for production.

  * npm test
    Starts the test runner.

  * npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

* We suggest that you begin by typing:

  cd example-app
  npm start
  3. As with TinyApp, the public/ folder contains elements that will be accessible to the browser when the development server is running. The most important file in this folder is the index.html file since it is where our React app will attach itself
  4.  the src/ folder, which contains all of the code for our app. As a starting point, the create-react-app package creates one component file (App.js) and an index.js that will render our component in the previously mentioned index.html file. A base test file is also generated, along with css files to style the components.
  5. react is datacentric framework