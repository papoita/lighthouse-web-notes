
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