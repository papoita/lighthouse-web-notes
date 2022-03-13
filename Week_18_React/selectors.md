need to compute new data from existing state in an application. To do this we can use a selector, a function that accepts state as an argument and returns data that is derived from that state.

For example, say we had an application where we wanted to select users with a provided name, here is what a simple selector for that might look like:


```jsx
function selectUserByName(state, name) {
  const filteredNames = state.users.filter(user => user.name === name);
  return filteredNames;
}
```