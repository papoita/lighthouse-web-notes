Hello React Challenge

https://github.com/lighthouse-labs/hello-react

only modify src/index.js

* 2 components in the same file
  * buttons
  * application

---
1. Passing props.children with JSX
2. Handling DOM events
3. Managing state
4. Conditional rendering
5. Controlled inputs


## Yarn 
front end - basada en npm manejo de paquetes pero optimizado en versionamiento de dependencias

## npm 
backend -manejo de packages

change version in node
nvm use v16 or v10

# bundle
build bundle of all the react code for production
optimized for computers (no spaces, non human readable, reasigned variable names)
webpack
npm run build
yarn build

# getting started project
## public
erase comments and extra files

## index.js
import react, reactdom, css (not in html but in js because js can allow bundler to package/handle), app

<React.StrictMode>
wraps the app component inside react.DOM to avoid vulnerabilites and improve coding practices

# construction of components and props
1. create component, inside a function and export the component and pass props (put inside the brackets of the function)
2. app.js import component form component path, bring in the component using < /Component> and bring in the props using the info of props (aqui es que se le da la informacion props)
