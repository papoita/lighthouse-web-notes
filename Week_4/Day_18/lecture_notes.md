# Nov 9 Lecure 4

# ASYNC CLASS
js runs from top to bottom

when fetching data or requesting from api is expensive and takes time and will block code that goes after

## Asynchornours promise
callbacks with asynchronous code 
when fetch takes time

so that these expensive/slow operations or tasks dont block our code
ie. input from user (such as form)
asking for data from a database or from an api

setTimeout (delaying )
//suware bracket sin documentation is optional)
is asynch
sometimes is good to comment the asynch because always the synch will run faster than asynch but anyway asynch will be save in memory line by line
expensive operations will happen before asynch

setInterval
script is calling it all the time, is good for live data, voting results, new data

callstack: synchronous
web/ c++: asynchronous

promisess better than callback

for unpredictable code use error handling
from APIs the data structure makes it very predictable

# File System \

const fs = require("fs") //node modules
const path = require("path")

readFile  