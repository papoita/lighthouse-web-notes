<!-- @format -->

Nov 15

# Networking with HTTP

What is networking? (Quick review)
TCP introduction (and demo)
HTTP Fundamentals
Its request & response nature
How it leverages TCP
Most important parts of a request
Common status codes such as 200, 302, 404, and 500
Simple node HTTP Client example (using request)

a computer network is when two computers cna communicate with each other
networking makes the internet possible

TCP transmission control protocol packets, frames: allows to establish a channel, structure data and workflow of data over the network
IP address (numbers) and ports (number extensions)

LAN local area network

NIC network interface card

WAN Wide area network bigger network accross buildings or countries through routers

MAC address hexadecimals 48 bits 6 bytes long
used to address a specific computer

## JSON

## APIs

## Promises

## callback waterfall

## error handling with promises vs callbacks

# intro to net

module built into node
https://dashboard.ngrok.com/signup

npm install ngrok -g

client
server
tunneling with ngrok

the client is always the one establishing conenction with the server
needs ip address and port

# intro to snake

info about the project an dcriteria

# Multiplayer snake game

everaging Node's net module to create a TCP client for the game server
callbacks
asynchronous control flow
modules in node and writing modular code
refactoring code
working with stdin

````
conn.on("connect", () => {
  // code that does something when the connection is first established
});```
````

https://nodejs.org/api/net.html#net_class_net_socket

# destructuring code

// fileB.js

```
const { myNumber, myString, myFunction } = require("./fileA");

myNumber; // => 42
myString; // => "hello"
myFunction; // => the function you wrote
When you know the names of the keys on an object, you can destructure it.
```

This one line of code...

```
const { myNumber, myString, myFunction } = require("./fileA");
```

...declares three variables that have the same names as the keys on the module.exports object from fileA.

It works because the variable names exactly match the names of the keys of the module.exports object.
