# Rules for sutom hooks
It is possible for us to create custom Hooks to share logic between components.

So far we have covered the two general rules for Hooks:

Don't call Hooks inside loops, conditions, or nested functions
Only call Hooks from inside React components
These rules apply with custom hooks as well, but there is one more:

A custom Hook is a function that must start with the word "use"

We can use the custom Hook instead of useState. We store the object that the Hook returns in a separate variable per input. The spread operator provides an easy way to pass the value and onChange props directly to each input element.

```jsx
function Application(props) {
  const firstname = useControlledInput("");
  const lastname = useControlledInput("");
  const email = useControlledInput("");
  const password = useControlledInput("");
  const passwordConfirmation = useControlledInput("");

  return (
    <form>
      <input {...firstname} />
      <input {...lastname} />
      <input {...email} />
      <input {...password} type="password" />
      <input {...passwordConfirmation} type="password" />
    </form>
  );
}
```

current mode as a stateful variable that will be used to render the Appointment child components conditionally. As we interact with the application, we will use two different functions to change between the modes:

A transition function that will allow us to advance to any other mode
A back function will allow us to return to the previous mode

## automated tests
The automated tests that we ran in previous activities were implemented with Jest and an additional library called react-testing-library. Hooks can only be used within React components, so we need to make sure that the testing environment supports this constraint.