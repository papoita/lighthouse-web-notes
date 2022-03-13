
# servers
From now on, we'll need to run two servers to work on our application. The scheduler client (scheduler) and the scheduler server (scheduler-api). The client runs on port 8000, and the API server runs on port 8001.

## seeding
http://localhost:8001/api/debug/reset

or

Make a GET request to /api/debug/reset with curl http://localhost:8001/api/debug/reset

# get request
http://localhost:8001/api/days

returns

{
  "id":Number,
  "name":String,
  "appointments":Array,
  "interviewers":Array,
  "spots":Number
}

An id that uniquely identifies the day
A name for each day (Since this is an array, the days are in the correct order for the week)
The appointments array only contains appointment ids. We are going to reduce our data duplication by using the id as a reference, similar to how we handle relationships in a relational database.
The interviewers array, a list of interviewer ids
The spots key contains the number of spots remaining for that specific day.

# Rutes for scheduler-api
"GET_DAYS":         http://localhost:8001/api/days,
"GET_APPOINTMENTS": http://localhost:8001/api/appointments,
"GET_INTERVIEWERS": http://localhost:8001/api/interviewers,
# summay
running a second server responsible for providing data. We can make HTTP requests to the server to retrieve and alter appointment data. The API is limited to support the minimal requirements for the application.

# axios
When should we request the data?
We want to request the data when the term changes.
Where should we store the retrieved data?
We want to store the results as state.
What changes cause us to make the request again?

# side effect
function or expression is said to have a side effect if it modifies some state variable value(s) outside its local environment, that is to say has an observable effect besides returning a value (the main effect) to the invoker of the operation.

infinite loop

API calls, updates to the DOM, and event listeners, among other things. The React Hook API provides a method called useEffect to help us manage these

```jsx
function LiveSearch(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  fetch(`/search?term=${term}`).then(setResults);

  return (
    <>
      <SearchBar value={term} onChange={setTerm} />
      <Results results={results} />
    </>
  );
}
```

# React.useEffect

React calls the function provided to the useEffect method of a component after render. Think of it like giving React an instruction to hold onto the function that passes to useEffect and then make adjustments to the DOM after the render has happened plus any updates after that.
```jsx
useEffect(() => console.log("Side Effect"));
```

1. Rule #1
Don't call Hooks inside loops, conditions, or nested functions.

```jsx
function LiveSearch(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);


  useEffect(() => {
    if(results.length > 0) {
      console.log("Results Set");
    }
  });

  return (
    <>
      <SearchBar value={term} onChange={setTerm} />
      <Results results={results} />
    </>
  );
}
```

2. Rule #2
Only call Hooks from inside React components.

3. Rule #3
The effect method that we pass to useEffect must either return undefined or a function.
4. Dependencies
We can tell React to skip applying an effect if certain values haven't changed between re-renders. To do so, we pass an array as an optional second argument to useEffect.
effects are usually dependent on state and props, and that we must declare those dependencies in the list.


```jsx
useEffect(() => {
  if(results.length > 0) {
    console.log("Results Set");
  }
}, [results]); // Only re-run the effect if results changes
```
## Requests

The component has no results when React renders it the first time.
The component makes an asynchronous request to the API server.
The data for the component is returned in the response.
The component can now be updated with the data using an action that sets the state.
```jsx
function LiveSearch(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`/search?term=${term}`).then(setResults);
  }, [term]);

  return (
    <>
      <SearchBar value={term} onChange={setTerm} />
      <Results results={results} />
    </>
  );
}
```
We request the data after the initial render. The effect will be run each time the component renders due to term changing. The request depends on the value of term so we have declared it as a dependency to run the effect. When we call setResults it will update the component and render with the latest results. React doesn't run the effect because the term has not changed, only the results and the results are not a dependency of the effect.

## Classes

does not apply for this project

# Using Effects


