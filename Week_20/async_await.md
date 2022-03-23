Async/Await is a feature that does not replace Promises, but instead makes them easier to use

ECMAScript 2017 includes support for async functions.

We can take any asynchronous test and switch it from using the raw Promise syntax to the newer async/await syntax. This example from Application.test.js can be altered to use the updated syntax.

```jsx
it("changes the schedule when a new day is selected", () => {
  const { getByText } = render(<Application />);

  return waitForElement(() => getByText("Monday")).then(() => {
    fireEvent.click(getByText("Tuesday"));

    expect(getByText("Leopold Silvers")).toBeInTheDocument();
  });
});
```
to MUCH BETTER
The asynchronous function has been defined as one using the async keyword.
The Promise chain can be hidden by using the await keyword.

```jsx
it("changes the schedule when a new day is selected", async () => {
  const { getByText } = render(<Application />);

  await waitForElement(() => getByText("Monday"));

  fireEvent.click(getByText("Tuesday"));

  expect(getByText("Leopold Silvers")).toBeInTheDocument();
});
```

# anatomy of async and await

We mentioned before that the use of async and await does not replace the use of Promises. They work well together. Promises represent a future value that is either resolved or rejected. Promises can be returned from functions, chained and passed to other functions.

We will quickly cover the basics of async and await.

```jsx
function setTimeoutPromise(error) {
  /* Wrapping a function that takes a callback with a Promise */
  return new Promise((resolve, reject) => {
    if (error) {
      /* When an error occurs we reject the Promise */
      reject("Error");
    } else {
      /* This Promise will resolve in 1000ms */
      setTimeout(() => resolve("Data"), 1000);
    }
  });
}

setTimeoutPromise(true /* or false */)
  .then(data => {
    /* Success case */
    console.log(`Promise Resolved with ${data}`);
  })
  .catch(error => {
    /* Failure case */
    console.log(`Promise Rejected with ${error}`);
  });
  ```

  /* Can only use await inside of an async function */
async function run() {}

/* We can invoke the async function like any other */
run();
```jsx
async function run() {
  console.log("1. The calm before async");

  try {
    const data = await setTimeoutPromise();

    console.log(`3. Promise Resolved with ${data}`);
  } catch (error) {
    console.log(`3. Promise Rejected with ${error}`);
  }
}

/* We can invoke the async function like any other */
run().then(() => {
  console.log("4. Use Pomises at the top level");
});

/* This prints immediately after run() is called */
console.log("2. Careful, this prints before the timeout is complete");

/*
1. The calm before async
2. Careful, this prints before completing the timeout
3. Promise Resolved with Resolved Data
4. Use Promises at the top level
*/
```