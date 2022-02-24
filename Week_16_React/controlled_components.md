HTML form elements 
allow user to provide input to website to intake and process data
# form elements 
keep track of their own state
vs
# input, textarea and select
keep track of their state

# controlled components
override HTML form elements to let React control their state

1. Set variable that is stored in state as the value attribute on th eform element
2. onChange event that uses the setter to set a new value when the input changes

# onChange
DOM generate objects with useful information, user types on keyboard and vlaue of the data is found in event.target.value

```
function DisplayWord(props) {
  const [word, setWord] = useState("");

  return (
    <main>
      <input
        value={word}
        onChange={(event) => setWord(event.target.value)}
        placeholder="Please enter a word"
      />
      <h1>Your word is: {word}.</h1>
    </main>
  );
}
```
# Fragments
## returning a component

to avoid using <div> to wrap the JSX function use fragment

1. import form library
```
import React, { Fragment } from 'react';
```
2. use like this:
```
return (
  <Fragment>
    <h1>A heading</h1>
    <p>A paragraph</p>
  </Fragment>
)
```
or like this
```
return (
  <>
    <h1>A heading</h1>
    <p>A paragraph</p>
  </>
)
```

## conditional expressions result in multiple elements
Use shorthand where possible, but use <Fragment> if the component should be passed props

```
const userLoggedIn = false;

return (
  <Fragment>
    {userLoggedIn ? 
    <>
      <h1>Success!</h1>
      <p>You are logged in.</p>
    </>
    :
    <>
      <h1>Warning!</h1>
      <p>You are not logged in</p>
    </>
    }
  </Fragment>
)
```
