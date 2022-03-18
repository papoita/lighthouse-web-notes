we make a request to the API server and then set the state object for days, appointments and interviewers with the response data. Creating an appointment is the first opportunity we have had to change data.

Right now the same state exists in two places.

State is persistent in the database of the API server.
Our local state is stored in the Application component state object.

# changing local state
 Application level. If we know the 
 id of the appointment slot that we want to book an interview for and 
 the details of the interview, t
 hen we can edit the appointments object. 