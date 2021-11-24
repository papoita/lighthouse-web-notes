write a web server
1. low level http module socket tcp
 node.js js  from google it is js wrap by c++
 DOM

 # Node
2.  http module
ports a number between 1 - (ie. it is an extension of a particular phone)
5432 postgres
80 / 443 http

in a general requesst object
request.method;
  request.url;

  anything in a ddress bar is a GET
  click a link GET

  The number of people that can connect to the number of clients that coul connect to 1 process in one port (destination port) is unlimited it is limited by memory and cpu from the computer.
  low bouncing are alternative

# Express
install npm
install de dependdecy
it is a function
processed in order
take in parameters
order is imoprtant when defining end points
sending json is the API
res.json retuning to client and using it 
## app.get is an endpoint
res.json to send an object
res.send to send html
# make aps within express
#make routers in express

# http status codes
200 s all good
300 s still good but extra info
400 s bad you
500 s bad server

304 chached,, server does not send any further info it is not modified has not changed
use http cats

# express middleware
sits between request and response
```app.use((req, res, next)=>{
console.log("REquest received");
//res.send("HEllo from middleware"); this will result in an error facing the server and not to the client, because there will be more than one response. Is used when you want to intercept the response and do something else completly. It is more common that we use some that have been written already
next();
}); ``` 
body-parser
cookie parser
maintain sessions
error -handlers
morgan (the most common)

## morgan
npm install morgan

```const morgan = require("morgan);```
logging package
dev
app.use(morgan)(dev);
same as

return another function

in tiny app
download morgan
chain .send
return anything  (even if express doesnt care it will stop everything after send)
