# Axios
documentation mentions the async/await syntax. We are going to use Promises for this project to get more practice. Understanding Promises is a pre-requisite to using the async/await syntax.

1. We can cancel an in-progress request.
2. Can set a timeout for a response.
3. It supports CSRF protection.

```
npm install axios
```

## Methods
axios.get(url[, config])
axios.post(url[, config])
axios.put(url[, config])
axios.delete(url[, config])

## exaple for GET request
```jsx
axios.get("/api/appointments").then((response) => {
  console.log(response);
});
```

## when sending data to server
```jsx
axios
  .put(`/api/appointments/2`, {
    id: 2,
    time: "1pm",
    interview: {
      student: "Archie Cohen",
      interviewer: 9,
    },
  })
  .then((response) => {
    console.log(response);
  });
  ```

  ## errors
  ```jsx
  axios
  .get("/api/appointments")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error.response.status);
    console.log(error.response.headers);
    console.log(error.response.data);
  });
  ```
* user tries to login with the incorrect credentials expect error.response.status to equal 401. 
* If they try to access a resource without permission, the response returns 403 status code.


# Promise.all
The Promise.all() method takes an array of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.
```jsx
Promise.all([
  axios.get('/first_endpoint'),
  axios.get('/second_endpoint'),
  axios.get('/third_endpoint')
]).then((all) => {
  console.log(all[0]); // first
  console.log(all[1]); // second
  console.log(all[2]); // third
});
```
