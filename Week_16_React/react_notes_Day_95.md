Feb 17, 2022, 
Feb 20, 2022
# JSX in React

encapsulated components manage their own state

## encapsulation: 
group of elements can be inside a components and can be called by another component

Frist static html code then dynamic like EJS

# React.createElement
```
const element = <h2 className="name">Name</h2>
```

* className instead of class
* component names always start with capital letter

const tweet = <Tweet/>

# ReactDOM.render(element, container)

```
import React from "react";
import ReactDOM from "react-dom";

function Tweet(props) {
  return (
    <article className="tweet">
      <header className="tweet__header">
        <img className="tweet__header-avatar" src={ props.avatar } />
        <h2 className="tweet__header-name">{ props.name }</h2>
      </header>
      <main className="tweet__content">
        <p>{ props.content }</p>
      </main>
      <footer className="tweet__footer">{ props.date }</footer>
    </article>
  );
}

ReactDOM.render(
  <Tweet
    name="React"
    avatar="https://api.adorable.io/avatars/64/react@adorable.png"
    content="A JavaScript library for building user interfaces"
    date="May 29th, 2013"
  />,
  document.getElementById("root")
)
```
# Expressions in JSX

format function

```
import { format } from "date-fns";

function Footer(props) {
  return (
    <footer className="tweet__footer">
      {format(props.date, "MMMM Do, YYYY")}
    </footer>
  );
}

ReactDOM.render(
  <Footer
    date="2013-05-29"
  />,
  document.getElementById("root")
);
```

# rules
* All tags must be closed
* A child tag must close before its parent
* All JSX expressions must result in one root level element
```
return (
  <div>
    <input />
  </div>
)

/* becomes */

return React.createElement("div", null, React.createElement("input", null))
```
* No HTML comments
```
return (
  <div>
    <!--- Not allowed --->
    {/* Allowed */}
  </div>
)
```

# Event handling
```
 function Button() {
    return (
      <button onClick={() => console.log("Button Clicked")}>
        Click me!
      </button>
    );
  }
  ```
```
  function Button() {
    const doStuff = () => {
      console.log("Do stuff.");
      console.log("Do more stuff.");
      console.log("Do EVEN MORE stuff!");
    };

    return <button onClick={doStuff}>Click me!</button>;
  }
  ```
  ## onClick
  event handler: mouse position, timestamp
  ## onChange
  name of the input, value the user typed or selected
  ## onSubmit
content of the form
method to prevent the default behaviour

  ```
    function MyClickableDiv() {
    return (
      <div onClick={(event) => {
        console.log(`The mouse coordinates of this click event are: x: ${event.screenX} and y: ${event.screenY}`);
        }}
      >
      </div>
    );
  }
  ```

  # Preventing default actions
  
https://reactjs.org/docs/handling-events.html

```
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

# data types
hold only one value
undefined, Boolean, Number, String, BigInt, Symbol

# Structural types
Object, Array, Date, and Map

## arrays
when to use 
collectin of independent items
better for first or last item

## object
related data
order is not important
appropriate labels attached to corrsponding values
can have consistency issues because keys defined by developers, slower

# building data structures
* Determine what data you need
* Determine what operations you need to perform on the data
* Organize the data
* Determine if certain data is related or independent and decide what kind of substructure is needed
* Start small, then grow your structure

# pass data or props or porperties
React, we pass data to components as "props" (short for properties)
```
<Profile firstName="Amy" lastName="Mansel" avatar="/profile-hex.png" />

or

const user = {
  firstName: "Amy",
  lastName: "Mansel",
  avatar: "/profile-hex.png",
};

<Profile {...user} />;
```
## props children
anything that is passed to a component inside its tags. Within any component, we can access the children through props.children

## naming props for event handlers
```
function Parent(){

  function doSomething() {
    console.log("Do something");
  }

    return (
      <h1>I am the parent. Here is the child.</h1>
      <Child onClick={doSomething} />
    );
  }
  ```

  ```
  function Child(props) {
  return <div onClick={props.onClick}>Click me!</div>;
}
```
# conditional rendering 
allows only ternary operator

```
function Hello(props) { 

  return (props.yourName ? <h1>Hello, {props.yourName}.</h1> : <h1>Sorry, you don't seem to have a name.</h1>);
}
```

# short circuit evaluation
evaluated left to right, and if the first expression is false, the second expression is not evaluated at all.
```
function Hello(props) { 
  return (props.yourName && <h1>Hello {props.yourName}</h1>);
}
```
# render arrays in JSX
```
const someArray = [
  <p>a paragraph</p>,
  <p>another paragraph</p>,
  <p>yet another paragraph</p>,
];

return <div>{someArray}</div>;
```

will return this in html

```
<div>
  <p>a paragraph</p>
  <p>another paragraph</p>
  <p>yet another paragraph</p>
</div>
```
