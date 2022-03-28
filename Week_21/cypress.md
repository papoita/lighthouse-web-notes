# Cypress testing of Scheduler

We will focus on end-to-end testing, including the navigation of a user through the common user path. For our application, this means that a user follows these steps:

Visits the root of our web server
Changes the day to "Tuesday"
Clicks on the second "Add" button in the schedule
Enters their name
Chooses an interviewer
Clicks the save button
Sees the booked appointment
Clicks the edit button
Changes the name and interviewer
Clicks the save button
Sees the edit to the appointment
Clicks the delete button
Clicks the confirm button
Sees that the appointment slot is empty
This list seems very long, but there are a lot of steps. If we were to perform this test manually after every change, we would be pretty confident that most of the major functionality works. A test like this gives us confidence that the client and the server work together to handle the common user interactions.

# cypress documentation

https://docs.cypress.io/guides/getting-started/installing-cypress


#  let's start by writing three smaller tests.

"should book an interview"
"should edit an interview"
"should cancel an interview"

## Booking
The plan for testing the booking of an interview is more manageable.

Visits the root of our web server
Clicks on the "Add" button in the second appointment
Enters their name
Chooses an interviewer
Clicks the save button
Sees the booked appointment

## Editing
If we edit the existing appointment booked for "Archie Cohen", then we don't need to create an appointment first.

Visits the root of our web server
Clicks the edit button for the existing appointment
Changes the name and interviewer
Clicks the save button
Sees the edit to the appointment

## Canceling
We can also perform a test to cancel an existing interview. It is for this reason that we need to reset the database after each test. If one test cancels and interview and the next test expects that interview to exist, then our tests can break for reasons unrelated to our code quality.

Visits the root of our web server
Clicks the delete button for the existing appointment
Clicks the confirm button
Sees that the appointment slot is empty

# Default Assertions
https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Default-Assertions

Many commands have a default, built-in assertion, or rather have requirements that may cause it to fail without needing an explicit assertion you've added.

For instance:
cy.visit() expects the page to send text/html content with a 200 status code.
cy.request() expects the remote server to exist and provide a response.
cy.contains() expects the element with content to eventually exist in the DOM.
cy.get() expects the element to eventually exist in the DOM.
.find() also expects the element to eventually exist in the DOM.
.type() expects the element to eventually be in a typeable state.
.click() expects the element to eventually be in an actionable state.
.its() expects to eventually find a property on the current subject.

# stubbing
If we wanted to test only the client, then we would use the powerful server mocking tools provided by Cypress. The documentation for Network Requests describes two test strategies.

Don't Stub Responses 
Stub Responses
We chose the first strategy, which means that we do not stub responses. Our goal is to test the integration of the client and the server using Cypress. We would not be able to meet that requirement if we stub responses.

Note
Stubbing is the term used by Cypress to describe mocking our server responses.