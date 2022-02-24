# React State
# Fancy Buttons project

## what is state
condition regarding stored inputs
shows current values or contents

## useState hook
key parts of the UI that change based on user input
 * import useState hook into the module

```
  import React, { useState } from "react";
```
* useState returns an array

```
function Application(props) {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <h1>Button was clicked {count} times.</h1>
    </main>
  );
}
```
* sometimes we have to pass a function as a prop. If we need to pass any arguments to that function, the pattern is to put it inside another function. setCount has to be passed a value (count + 1) and so we wrap it in an outer function. This is a way to prevent setCount from being invoked immediately when the page renders.

## Goals
* using a state inside components
passing down props to child components
manage a state from a main component that trickles down to child components

* The counter button will keep track how many times we click on it.
* The angry button will change colour to get more red until it reaches a maximum threshold.
* The light switch button will turn on and off when clicked.
* The text repeater button will copy the text of the button over and over.

1. clean css
2. create components foe ach button
3. import components into app.js
4. import useState Hook in each button and call it
5. very important that hooks are not inside conditionals, loops, or other functions, they need to be at the top of the component function.
declared in a single line using array destructuring
```
const [reference, setReference] = useState();
  // or
  const [state, setState] = useState();
  ```
  * the setter function needs to start with the word set like in the example above
  * Remember that the first thing returned by useState is a reference to a value in our state. The second thing returned is a function that lets us change that value.
  ```
  function SomeComponent(){
    const [state, setState] = useState("Some word");
    //...
  }
  ```
   state contains the value "Some word" and setState is a function that can change that value, and trigger a re-rendering of our components.

   ```
   setState("Some other word")
   ```
   ## setState works asynchronously

   # set function to be referenced with an onClick event
   need to use the onClick event to count the clicks. One pattern to keep the JSX clean when doing actions on events is to create a function that only needs to be referenced
   ```
   const handleClick = (event) => setState(event.target.value ? event.target.value : "");

  <button onClick={handleClick} />

  // instead of

  <button onClick={event => setState(event.target.value ? event.target.value : "")} />
  ```

  # lifting state up
  In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it