Both the visual design and the API use the term spots to mean appointments. We can book up to five interviews per day, each one takes up a spot.

Where is the value of "spots" stored for each day?
How can we calculate how many spots should be available?
When should that value change?
the number of spots is inside each day object

```jsx
{
    id: 1,
    name: "Monday",
    appointments: [1,2,3,4,5]
    spots: 2
  }
  ```

  We should update the spots when we book or cancel an interview. However, it is important to update the state with the new number of spots when the update is confirmed on the server side. So, it should be done in the bookInterview and cancelInterview functions, and applied in the .then part of the AJAX request.

  ```jsx
  function updateSpots(num) {
    state.days.forEach((day) => {
      if (day.name === state.day) {
        day.spots -= num;
      }
    });
    return state.days;
  }
  ```