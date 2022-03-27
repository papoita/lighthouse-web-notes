React Hooks provide an API that allows us to store state and manage side effects; therefore, it is no longer necessary to use classes. It is important to recognize that the class API is used heavily in projects built between 2016 and 2019.
```jsx
import React, { Component } from "react";

class Application extends Component {
 render() {
  return <div></div>;
 }
} 
```
if constructor is added to props, we must pass a super (props)

```jsx
import React, { Component } from "react";

class Application extends Component {
 constructor(props) {
  /* If we add a constructor to our class, we must pass props to the super class */
  super(props);
 }

 render() {
  return <div></div>;
 }
}
```

 addition of class properties. Through the use of transpilaton tools like Babel, we have gained the ability to test out new features and determine if they are popular before making them officially a part of the language.

When we create a component, we are creating a new instance of the class.
```jsx
class Counter extends Component {
 render() {
  return <button onClick={this.props.onClick}>{this.props.count}</button>;
 }
}

class Application extends Component {
 state = {
  count: 0
 };

 increment = event => {
  this.setState(previousState => ({
   count: previousState.count + 1
  }));
 };

 render() {
  return <Counter onClick={this.increment} count={this.state.count} />;
 }
}
```
# Lifecycle

props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).


# scheduler-dashboard
focused state using filter

First we will add the selectPanel(id) function to the Dashboard class. Since it is a function that we are declaring for all instances of the Dashboard class, we call this an instance method.

We are using this.setState to apply state changes. It is an instance method provided by the React.Component superclass.

If it were with functions it would b elike this
```jsx
function Dashboard(props) {
  const [state, setState] = React.useState({focused: null});

  function selectPanel(id) {
    setState({
      focused: id
    });
  }

  return /* JSX */
}
```
passing panel as prop
```jsx
<Panel
 key={panel.id}
 id={panel.id}
 label={panel.label}
 value={panel.value}
 onSelect={this.selectPanel}
/>
```

# binding
https://medium.com/free-code-camp/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
We are going to focus on three ways that we could solve this specific case.

Bind in Constructor
Use Arrow Function in Class Property
Use Arrow Function in Render
# Summary
## React.Component
We inherit the behaviour from a base component class provided by React. Sometimes we would see React.Component instead, if we aren't using named imports.

## render()
We must define a render method in our class. It is the only method that must exist for a component to work in React.

## this.props
React attaches the props object to the component instance. We can access props using this.props.

## Initial State
We can initialize the state in the constructor or using class property syntax. We have decided not to use constructors for this project.

## this.state
Similar to how props are attached to the instance, the same is true for this.state. We can access the state for the instance of the component using this.state.

## this.setState
To change the existing state, we need to call the setState instance method provided by React. A component will render when after we called setState.

## Instance Methods
There are instance methods that we inherit from React.Component like this.setState. We also create our own to help organize our logic.

Binding Context
When we start to pass functions around, we need to be careful of maintaining the correct context.

# Lifecycle
## Mount
only one
create component instance
constructor, render, componentDidMount

## update
everytime it updates (0-many)
component can be updated using props when a parent renders or
updat internal state

## unmpunt
only once
componentWillUnmount

# Local Storage

dedicated data store in a user's browser that stores key-value pairs as strings. It can be accessed using the Web Storage API. It persists across browser sessions (even if a computer is powered down). Most browsers provide at least 2MB (and often 5MB) of local storage.

## Local storage
this.state.focused

We use the JSON.stringify function to convert our values before writing them to the localStorage. When we get the values out of storage, we use the JSON.parse function to convert the string back to JavaScript values. This process of serialization allows us to save more complex data types in localStorage
```jsx
 componentDidMount() {
    const focused = JSON.parse(localStorage.getItem("focused"));

    if (focused) {
      this.setState({ focused });
    }
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousState.focused !== this.state.focused) {
      localStorage.setItem("focused", JSON.stringify(this.state.focused));
    }
  }

```

# Websockets
There are two lifecycle methods that we will use for this feature. When React calls componentDidMount, we will connect to our scheduler-api WebSocket server. WebSockets are connections that stay open, so we need to close them when the component unmounts. We'll use the componentWillUnmount lifecycle method to clean up our WebSocket connection.